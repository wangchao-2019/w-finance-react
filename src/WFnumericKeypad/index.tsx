import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import './WFnumericKeypad.css';
interface PayPasswordModalProps {
  visible: boolean;
  length?: number;
  onComplete: (val: string) => void;
  onCancel: () => void;
}

const WFnumericKeypad: React.FC<PayPasswordModalProps> = React.forwardRef(
  ({ visible, length = 6, onComplete, onCancel }, ref) => {
    const [pwd, setPwd] = useState('');
    const [shake, setShake] = useState(false);
    const pwdRef = useRef<HTMLDivElement | null>(null);
    // 错误抖动
    const triggerShake = () => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    };
    useImperativeHandle(
      ref,
      () => {
        return {
          triggerShake() {
            triggerShake();
          },
        };
      },
      [],
    );
    // 关闭时清空
    useEffect(() => {
      if (!visible) {
        setPwd('');
        setShake(false);
      }
    }, [visible]);

    // 数字输入
    const handleNum = (num: string) => {
      if (pwd.length >= length) return;
      const newPwd = pwd + num;
      setPwd(newPwd);

      if (newPwd.length === length) {
        onComplete(newPwd);
        setPwd('');
      }
    };

    // 删除
    const handleDel = () => {
      setPwd(pwd.slice(0, -1));
    };

    // 清空
    const handleClear = () => {
      setPwd('');
    };

    const keys = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['C', '0', '←'],
    ];

    if (!visible) return null;

    return (
      <div className="overlayStyle">
        <div className="modalStyle">
          {/* 头部 */}
          <div className="headerStyle">
            <span className="titleStyle">请输入支付密码</span>
            <button type="button" onClick={onCancel} className="closeStyle">
              ×
            </button>
          </div>

          {/* 密码格 */}
          <div
            ref={pwdRef}
            className="pwdBoxContainerStyle"
            style={{ animation: shake ? 'shake 0.5s' : 'none' }}
          >
            {Array.from({ length }).map((_, i) => (
              <div
                key={i}
                className="pwdBoxStyle"
                style={{ borderColor: pwd[i] ? '#165DFF' : '#ddd' }}
              >
                {pwd[i] && <div className="dotStyle" />}
              </div>
            ))}
          </div>

          {/* 数字键盘 */}
          <div className="padContainerStyle">
            {keys.map((row, ri) => (
              <div key={ri} className="padRowStyle">
                {row.map((key) => (
                  <button
                    type="button"
                    key={key}
                    className="padBtnStyle"
                    onClick={() => {
                      if (key === 'C') handleClear();
                      else if (key === '←') handleDel();
                      else handleNum(key);
                    }}
                  >
                    {key}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 全局样式：抖动动画 */}
        <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0);}
          10%,30%,50%,70%,90%{transform:translateX(-6px);}
          20%,40%,60%,80%{transform:translateX(6px);}
        }
      `}</style>
      </div>
    );
  },
);

export default WFnumericKeypad;
