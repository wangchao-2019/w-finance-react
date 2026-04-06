import { useMemo, useState } from 'react';
import {
  calcEqualInstallment,
  calcEqualPrincipal,
} from 'w-finance-react/WFrepayment/tools';

type LoanType = 'equalInstallment' | 'equalPrincipal';

const LoanCalculator = ({ issueNumber = 20 }) => {
  const [principal, setPrincipal] = useState<number | ''>('');
  const [annualRate, setAnnualRate] = useState<number | ''>('');
  const [years, setYears] = useState<number | ''>('');
  const [type, setType] = useState<LoanType>('equalInstallment');

  const months = Number(years) * 12;
  const result = useMemo(
    function () {
      return type === 'equalInstallment'
        ? calcEqualInstallment(principal || 0, annualRate || 0, months)
        : calcEqualPrincipal(principal || 0, annualRate || 0, months);
    },

    [principal, annualRate, years, type],
  );

  return (
    <div
      style={{
        maxWidth: 900,
        margin: '20px auto',
        padding: 20,
        fontFamily: 'system-ui',
      }}
    >
      <h2>贷款还款计算器</h2>

      <div style={{ display: 'grid', gap: 12, marginBottom: 20 }}>
        <div>
          <label>贷款本金：</label>
          <input
            type="number"
            value={principal}
            onChange={(e) =>
              setPrincipal(
                (e.target.value !== '' && Number(e.target.value)) || '',
              )
            }
            style={{ padding: 6, width: 160 }}
          />{' '}
          元
        </div>

        <div>
          <label>年利率：</label>
          <input
            type="number"
            step="0.01"
            value={annualRate}
            onChange={(e) =>
              setAnnualRate(
                (e.target.value !== '' && Number(e.target.value)) || '',
              )
            }
            style={{ padding: 6, width: 120 }}
          />{' '}
          %
        </div>

        <div>
          <label>贷款年限：</label>
          <input
            type="number"
            value={years}
            onChange={(e) =>
              setYears((e.target.value !== '' && Number(e.target.value)) || '')
            }
            style={{ padding: 6, width: 100 }}
          />{' '}
          年
        </div>

        <div style={{ display: 'flex', gap: 5, marginTop: 8 }}>
          <label>
            <input
              type="radio"
              checked={type === 'equalInstallment'}
              onChange={() => setType('equalInstallment')}
            />
            等额本息
          </label>
          <label>
            <input
              type="radio"
              checked={type === 'equalPrincipal'}
              onChange={() => setType('equalPrincipal')}
            />
            等额本金
          </label>
        </div>
      </div>

      <div style={{ background: '#f7f8fa', padding: 16, borderRadius: 10 }}>
        {type === 'equalInstallment' ? (
          <>
            <p>
              月供：<strong>{result.monthlyPayment.toFixed(2)}</strong> 元
            </p>
          </>
        ) : (
          <>
            <p>
              首月还款：<strong>{result.monthlyPaymentMax?.toFixed(2)}</strong>{' '}
              元
            </p>
            <p>
              每月递减：
              <strong>
                {(
                  (principal || 0 / months || 0) * (annualRate || 0 / 100 / 12)
                ).toFixed(2)}
              </strong>{' '}
              元
            </p>
          </>
        )}
        <p>
          总利息：<strong>{result.totalInterest.toFixed(2)}</strong> 元
        </p>
        <p>
          总还款：<strong>{result.totalPayment.toFixed(2)}</strong> 元
        </p>
      </div>

      <h4 style={{ marginTop: 24 }}>{'还款计划（前' + issueNumber + '期）'}</h4>
      <div style={{ maxHeight: 400, overflowY: 'auto' }}>
        <table
          style={{ width: '100%', borderCollapse: 'collapse' }}
          border={1}
          cellPadding={6}
        >
          <thead>
            <tr>
              <th>期数</th>
              <th>月供</th>
              <th>本金</th>
              <th>利息</th>
              <th>剩余本金</th>
            </tr>
          </thead>
          <tbody>
            {result.paymentPlan.slice(0, issueNumber).map((item) => (
              <tr key={item.month}>
                <td>{item.month}</td>
                <td>{item.payment.toFixed(2)}</td>
                <td>{item.principal.toFixed(2)}</td>
                <td>{item.interest.toFixed(2)}</td>
                <td>{item.remainingPrincipal.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanCalculator;
