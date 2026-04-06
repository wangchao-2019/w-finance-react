import { FC } from 'react';
import './WFinput.css';
export interface WFinputProps {
    visible: boolean;
    title?: string;
    defaultValue?: number | string;
    placeholder?: string;
    maxLength?: number;
    decimalPlaces?: number;
    confirmText?: string;
    cancelText?: string;
    onConfirm: (value: string, rawValue: number) => void;
    onCancel: () => void;
}
declare const WFinput: FC<WFinputProps>;
export default WFinput;
