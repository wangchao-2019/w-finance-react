import React, {
  FC,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from 'react';
import './WFinput.css';

// 组件 Props 类型定义（TS 类型约束）
export interface WFinputProps {
  // 弹窗显示状态
  visible: boolean;
  // 弹窗标题
  title?: string;
  // 输入框默认值
  defaultValue?: number | string;
  // 输入框提示文字
  placeholder?: string;
  // 最大输入长度
  maxLength?: number;
  // 小数位数（金融默认2位）
  decimalPlaces?: number;
  // 确认按钮文字
  confirmText?: string;
  // 取消按钮文字
  cancelText?: string;
  // 确认回调（返回格式化后的值和原始值）
  onConfirm: (value: string, rawValue: number) => void;
  // 取消回调
  onCancel: () => void;
}

const WFinput: FC<WFinputProps> = ({
  visible,
  title = '请输入金额',
  defaultValue = '',
  placeholder = '请输入金额',
  maxLength = 16,
  confirmText = '确认',
  cancelText = '取消',
  onConfirm,
  onCancel,
}) => {
  // 输入值状态
  const [inputValue, setInputValue] = useState<string>('');
  const deferredValue = useDeferredValue<string>(inputValue);
  // 输入框 DOM 引用（自动聚焦）
  const inputRef = useRef<HTMLInputElement | null>(null);

  // 格式化金额：千分位 + 保留小数
  const formatAmount = (val: string | number): string => {
    // 先只保留数字和小数点
    const onlyNumDot = (val as string).replace(/[^\d.]/g, '');
    // 只保留第一个小数点
    const firstDotIndex = onlyNumDot.indexOf('.');
    if (firstDotIndex === -1)
      return onlyNumDot.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    else {
      return (
        onlyNumDot
          .slice(0, firstDotIndex + 1)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
        onlyNumDot
          .slice(firstDotIndex + 1, firstDotIndex + 3)
          .replace(/\./g, '')
      );
    }
  };

  // 转换为原始数字（去掉千分位）
  const getRawValue = (formattedValue: string): number => {
    const rawStr = formattedValue.replace(/,/g, '') || '0';
    return parseFloat(rawStr);
  };

  // 输入框变化处理
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const formattedVal = formatAmount(val);
    setInputValue(formattedVal);
  };

  // 确认提交
  const handleConfirm = () => {
    const rawValue = getRawValue(inputValue);
    // 金融行业空值默认 0
    const finalValue = inputValue || '0';
    onConfirm(finalValue, rawValue);
    // 提交后清空输入
    setInputValue('');
  };

  // 取消
  const handleCancel = () => {
    setInputValue('');
    onCancel();
  };

  // 弹窗显示时自动聚焦 + 初始化默认值
  useEffect(() => {
    if (visible) {
      // 初始化默认值
      if (defaultValue) {
        setInputValue(formatAmount(defaultValue));
      } else {
        setInputValue('');
      }
      // 自动聚焦输入框
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [visible, defaultValue]);

  // 不显示时不渲染
  if (!visible) return null;

  return (
    <div className="financial-modal-overlay">
      <div className="financial-modal-container">
        {/* 标题 */}
        <div className="financial-modal-title">{title}</div>

        {/* 输入框 */}
        <div className="financial-modal-input-wrapper">
          <span className="currency-symbol">¥</span>
          <input
            ref={inputRef}
            className="financial-modal-input"
            value={deferredValue}
            onChange={handleInputChange}
            placeholder={placeholder}
            maxLength={maxLength}
            // 移动端数字键盘
            inputMode="decimal"
            // 禁止输入表情/特殊字符
            onKeyDown={(e: { key: string; preventDefault: () => void }) => {
              if (e.key === 'e' || e.key === 'E' || e.key === '-') {
                e.preventDefault();
              }
            }}
          />
        </div>

        {/* 按钮组 */}
        <div className="financial-modal-buttons">
          <button
            type="button"
            className="financial-modal-btn cancel"
            onClick={handleCancel}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className="financial-modal-btn confirm"
            onClick={handleConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WFinput;
