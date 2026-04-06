export interface LoanResult {
    monthlyPayment: number;
    monthlyPaymentMin?: number;
    monthlyPaymentMax?: number;
    totalPayment: number;
    totalInterest: number;
    paymentPlan: Array<{
        month: number;
        payment: number;
        principal: number;
        interest: number;
        remainingPrincipal: number;
    }>;
}
export declare function calcEqualInstallment(principal: number, annualRate: number, months: number): LoanResult;
export declare function calcEqualPrincipal(principal: number, annualRate: number, months: number): LoanResult;
