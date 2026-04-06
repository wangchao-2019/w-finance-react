import { useEffect, useRef, useState } from 'react';
import {
  BankInfo,
  desensitizeCardNo,
  formatCardNo,
  getBankByCardNo,
  luhnCheck,
} from './bankUtils';
interface WFbankCardInputProps {
  desensitizeFlag?: boolean;
  getCardInfo?: <T extends BankInfo>(data: T) => T;
  showBankInfo?: boolean;
}
const WFbankCardInput: React.FC<WFbankCardInputProps> = ({
  desensitizeFlag = false,
  getCardInfo,
  showBankInfo = false,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [cardNo, setCardNo] = useState('');
  const [bankInfo, setBankInfo] = useState<BankInfo | null>(null);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  useEffect(() => {
    if (bankInfo) {
      getCardInfo?.({
        ...bankInfo,
        cardNoDesensitize: desensitizeCardNo(cardNo),
        cardNo,
      });
    }
  }, [cardNo]);
  // 输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(222222);
    const formatted = formatCardNo(e.target.value);
    setCardNo(formatted);

    const raw = formatted.replace(/\s/g, '');
    if (raw.length === 0) {
      setIsValid(null);
      setBankInfo(null);
      return;
    }

    // 校验
    setIsValid(luhnCheck(raw));
    // 识别银行
    setBankInfo(getBankByCardNo(raw));
  };

  // 清空
  const handleClear = () => {
    setCardNo('');
    setIsValid(null);
    setBankInfo(null);
    inputRef.current?.focus();
  };

  // 复制
  const handleCopy = () => {
    const raw = cardNo.replace(/\s/g, '');
    if (!raw) return;
    navigator.clipboard.writeText(raw).then(() => {
      alert('复制成功！');
    });
  };

  return (
    <div style={{ maxWidth: 420, margin: '20px 0', fontFamily: 'system-ui' }}>
      <div style={{ marginBottom: 8, fontWeight: 500 }}>银行卡号</div>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={cardNo}
          onChange={handleChange}
          placeholder="请输入银行卡号"
          maxLength={30}
          style={{
            width: '100%',
            padding: '12px 40px 12px 14px',
            fontSize: 16,
            border: '1px solid',
            borderColor:
              isValid === null ? '#dcdcdc' : isValid ? '#00b42a' : '#ff5252',
            borderRadius: 8,
            outline: 'none',
          }}
        />

        {/* 清空按钮 */}
        {cardNo && (
          <button
            type="button"
            onClick={handleClear}
            style={{
              position: 'absolute',
              right: 20,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 18,
              color: '#999',
            }}
          >
            ✕
          </button>
        )}

        {/* 复制按钮 */}
        {cardNo && isValid && (
          <button
            type="button"
            onClick={handleCopy}
            style={{
              position: 'absolute',
              right: 5,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 16,
              color: '#1677ff',
            }}
          >
            ⎘
          </button>
        )}
      </div>

      {/* 错误提示 */}
      {isValid === false && cardNo.replace(/\s/g, '').length >= 13 && (
        <div style={{ color: '#ff5252', fontSize: 12, marginTop: 4 }}>
          银行卡格式不正确
        </div>
      )}

      {/* 银行信息 */}
      {bankInfo && showBankInfo && (
        <div
          style={{
            marginTop: 12,
            padding: 12,
            background: '#f7f8fa',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div style={{ fontSize: 24 }}>🏦</div>
          <div>
            <div style={{ fontWeight: 500 }}>{bankInfo.bankName}</div>
            <div style={{ fontSize: 12, color: '#666' }}>
              {bankInfo.cardType}
            </div>
          </div>
        </div>
      )}

      {/* 脱敏预览 */}
      {isValid && cardNo && desensitizeFlag && (
        <div style={{ marginTop: 12, fontSize: 14, color: '#666' }}>
          脱敏展示：{desensitizeCardNo(cardNo)}
        </div>
      )}
    </div>
  );
};

export default WFbankCardInput;
