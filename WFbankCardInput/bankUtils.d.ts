export interface BankInfo {
    bankName: string;
    cardType: '借记卡' | '信用卡';
    logo?: string;
}
export declare function luhnCheck(cardNo: string): boolean;
export declare function getBankByCardNo(cardNo: string): BankInfo | null;
export declare function formatCardNo(val: string): string;
export declare function desensitizeCardNo(cardNo: string): string;
