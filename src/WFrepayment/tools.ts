// 计算结果类型
export interface LoanResult {
  monthlyPayment: number; // 月供（等额本息用）
  monthlyPaymentMin?: number; // 首月还款（等额本金用）
  monthlyPaymentMax?: number; // 末月还款（等额本金用）
  totalPayment: number; // 总还款
  totalInterest: number; // 总利息
  paymentPlan: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    remainingPrincipal: number;
  }>;
}

// 等额本息
export function calcEqualInstallment(
  principal: number,
  annualRate: number,
  months: number,
): LoanResult {
  if (principal <= 0 || annualRate < 0 || months <= 0)
    return {
      monthlyPayment: 0,
      totalPayment: 0,
      totalInterest: 0,
      paymentPlan: [],
    };

  const monthlyRate = annualRate / 100 / 12;
  const pow = Math.pow(1 + monthlyRate, months);
  const monthlyPayment =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * pow) / (pow - 1);

  const totalPayment = monthlyPayment * months;
  const totalInterest = totalPayment - principal;
  const paymentPlan: LoanResult['paymentPlan'] = [];
  let remaining = principal;

  for (let i = 1; i <= months; i++) {
    const interest = remaining * monthlyRate;
    const prin = monthlyPayment - interest;
    remaining -= prin;
    if (i === months) remaining = 0;
    paymentPlan.push({
      month: i,
      payment: monthlyPayment,
      principal: prin,
      interest,
      remainingPrincipal: remaining,
    });
  }

  return { monthlyPayment, totalPayment, totalInterest, paymentPlan };
}

// 等额本金
export function calcEqualPrincipal(
  principal: number,
  annualRate: number,
  months: number,
): LoanResult {
  if (principal <= 0 || annualRate < 0 || months <= 0)
    return {
      monthlyPayment: 0,
      totalPayment: 0,
      totalInterest: 0,
      paymentPlan: [],
    };

  const monthlyRate = annualRate / 100 / 12;
  const monthlyPrincipal = principal / months;
  const paymentPlan: LoanResult['paymentPlan'] = [];
  let remaining = principal;
  let totalPayment = 0;

  for (let i = 1; i <= months; i++) {
    const interest = remaining * monthlyRate;
    const payment = monthlyPrincipal + interest;
    totalPayment += payment;
    remaining -= monthlyPrincipal;
    if (i === months) remaining = 0;
    paymentPlan.push({
      month: i,
      payment,
      principal: monthlyPrincipal,
      interest,
      remainingPrincipal: remaining,
    });
  }

  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment: 0,
    monthlyPaymentMin: paymentPlan[paymentPlan.length - 1]?.payment || 0,
    monthlyPaymentMax: paymentPlan[0]?.payment || 0,
    totalPayment,
    totalInterest,
    paymentPlan,
  };
}
