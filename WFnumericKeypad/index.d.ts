import React from 'react';
import './WFnumericKeypad.css';
interface PayPasswordModalProps {
    visible: boolean;
    length?: number;
    onComplete: (val: string) => void;
    onCancel: () => void;
}
declare const WFnumericKeypad: React.FC<PayPasswordModalProps>;
export default WFnumericKeypad;
