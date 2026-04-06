/// <reference types="react" />
import { BankInfo } from './bankUtils';
interface WFbankCardInputProps {
    desensitizeFlag?: boolean;
    getCardInfo?: <T extends BankInfo>(data: T) => T;
    showBankInfo?: boolean;
}
declare const WFbankCardInput: React.FC<WFbankCardInputProps>;
export default WFbankCardInput;
