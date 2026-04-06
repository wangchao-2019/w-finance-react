// 计算结果类型

// 等额本息
export function calcEqualInstallment(principal, annualRate, months) {
  if (principal <= 0 || annualRate < 0 || months <= 0) return {
    monthlyPayment: 0,
    totalPayment: 0,
    totalInterest: 0,
    paymentPlan: []
  };
  var monthlyRate = annualRate / 100 / 12;
  var pow = Math.pow(1 + monthlyRate, months);
  var monthlyPayment = monthlyRate === 0 ? principal / months : principal * monthlyRate * pow / (pow - 1);
  var totalPayment = monthlyPayment * months;
  var totalInterest = totalPayment - principal;
  var paymentPlan = [];
  var remaining = principal;
  for (var i = 1; i <= months; i++) {
    var interest = remaining * monthlyRate;
    var prin = monthlyPayment - interest;
    remaining -= prin;
    if (i === months) remaining = 0;
    paymentPlan.push({
      month: i,
      payment: monthlyPayment,
      principal: prin,
      interest: interest,
      remainingPrincipal: remaining
    });
  }
  return {
    monthlyPayment: monthlyPayment,
    totalPayment: totalPayment,
    totalInterest: totalInterest,
    paymentPlan: paymentPlan
  };
}

// 等额本金
export function calcEqualPrincipal(principal, annualRate, months) {
  var _paymentPlan, _paymentPlan$;
  if (principal <= 0 || annualRate < 0 || months <= 0) return {
    monthlyPayment: 0,
    totalPayment: 0,
    totalInterest: 0,
    paymentPlan: []
  };
  var monthlyRate = annualRate / 100 / 12;
  var monthlyPrincipal = principal / months;
  var paymentPlan = [];
  var remaining = principal;
  var totalPayment = 0;
  for (var i = 1; i <= months; i++) {
    var interest = remaining * monthlyRate;
    var payment = monthlyPrincipal + interest;
    totalPayment += payment;
    remaining -= monthlyPrincipal;
    if (i === months) remaining = 0;
    paymentPlan.push({
      month: i,
      payment: payment,
      principal: monthlyPrincipal,
      interest: interest,
      remainingPrincipal: remaining
    });
  }
  var totalInterest = totalPayment - principal;
  return {
    monthlyPayment: 0,
    monthlyPaymentMin: ((_paymentPlan = paymentPlan[paymentPlan.length - 1]) === null || _paymentPlan === void 0 ? void 0 : _paymentPlan.payment) || 0,
    monthlyPaymentMax: ((_paymentPlan$ = paymentPlan[0]) === null || _paymentPlan$ === void 0 ? void 0 : _paymentPlan$.payment) || 0,
    totalPayment: totalPayment,
    totalInterest: totalInterest,
    paymentPlan: paymentPlan
  };
}