function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useMemo, useState } from 'react';
import { calcEqualInstallment, calcEqualPrincipal } from "./tools";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var LoanCalculator = function LoanCalculator(_ref) {
  var _result$monthlyPaymen;
  var _ref$issueNumber = _ref.issueNumber,
    issueNumber = _ref$issueNumber === void 0 ? 20 : _ref$issueNumber;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    principal = _useState2[0],
    setPrincipal = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    annualRate = _useState4[0],
    setAnnualRate = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    years = _useState6[0],
    setYears = _useState6[1];
  var _useState7 = useState('equalInstallment'),
    _useState8 = _slicedToArray(_useState7, 2),
    type = _useState8[0],
    setType = _useState8[1];
  var months = Number(years) * 12;
  var result = useMemo(function () {
    return type === 'equalInstallment' ? calcEqualInstallment(principal || 0, annualRate || 0, months) : calcEqualPrincipal(principal || 0, annualRate || 0, months);
  }, [principal, annualRate, years, type]);
  return /*#__PURE__*/_jsxs("div", {
    style: {
      maxWidth: 900,
      margin: '20px auto',
      padding: 20,
      fontFamily: 'system-ui'
    },
    children: [/*#__PURE__*/_jsx("h2", {
      children: "\u8D37\u6B3E\u8FD8\u6B3E\u8BA1\u7B97\u5668"
    }), /*#__PURE__*/_jsxs("div", {
      style: {
        display: 'grid',
        gap: 12,
        marginBottom: 20
      },
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("label", {
          children: "\u8D37\u6B3E\u672C\u91D1\uFF1A"
        }), /*#__PURE__*/_jsx("input", {
          type: "number",
          value: principal,
          onChange: function onChange(e) {
            return setPrincipal(e.target.value !== '' && Number(e.target.value) || '');
          },
          style: {
            padding: 6,
            width: 160
          }
        }), ' ', "\u5143"]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("label", {
          children: "\u5E74\u5229\u7387\uFF1A"
        }), /*#__PURE__*/_jsx("input", {
          type: "number",
          step: "0.01",
          value: annualRate,
          onChange: function onChange(e) {
            return setAnnualRate(e.target.value !== '' && Number(e.target.value) || '');
          },
          style: {
            padding: 6,
            width: 120
          }
        }), ' ', "%"]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("label", {
          children: "\u8D37\u6B3E\u5E74\u9650\uFF1A"
        }), /*#__PURE__*/_jsx("input", {
          type: "number",
          value: years,
          onChange: function onChange(e) {
            return setYears(e.target.value !== '' && Number(e.target.value) || '');
          },
          style: {
            padding: 6,
            width: 100
          }
        }), ' ', "\u5E74"]
      }), /*#__PURE__*/_jsxs("div", {
        style: {
          display: 'flex',
          gap: 5,
          marginTop: 8
        },
        children: [/*#__PURE__*/_jsxs("label", {
          children: [/*#__PURE__*/_jsx("input", {
            type: "radio",
            checked: type === 'equalInstallment',
            onChange: function onChange() {
              return setType('equalInstallment');
            }
          }), "\u7B49\u989D\u672C\u606F"]
        }), /*#__PURE__*/_jsxs("label", {
          children: [/*#__PURE__*/_jsx("input", {
            type: "radio",
            checked: type === 'equalPrincipal',
            onChange: function onChange() {
              return setType('equalPrincipal');
            }
          }), "\u7B49\u989D\u672C\u91D1"]
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      style: {
        background: '#f7f8fa',
        padding: 16,
        borderRadius: 10
      },
      children: [type === 'equalInstallment' ? /*#__PURE__*/_jsx(_Fragment, {
        children: /*#__PURE__*/_jsxs("p", {
          children: ["\u6708\u4F9B\uFF1A", /*#__PURE__*/_jsx("strong", {
            children: result.monthlyPayment.toFixed(2)
          }), " \u5143"]
        })
      }) : /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs("p", {
          children: ["\u9996\u6708\u8FD8\u6B3E\uFF1A", /*#__PURE__*/_jsx("strong", {
            children: (_result$monthlyPaymen = result.monthlyPaymentMax) === null || _result$monthlyPaymen === void 0 ? void 0 : _result$monthlyPaymen.toFixed(2)
          }), ' ', "\u5143"]
        }), /*#__PURE__*/_jsxs("p", {
          children: ["\u6BCF\u6708\u9012\u51CF\uFF1A", /*#__PURE__*/_jsx("strong", {
            children: ((principal || 0 / months || 0) * (annualRate || 0 / 100 / 12)).toFixed(2)
          }), ' ', "\u5143"]
        })]
      }), /*#__PURE__*/_jsxs("p", {
        children: ["\u603B\u5229\u606F\uFF1A", /*#__PURE__*/_jsx("strong", {
          children: result.totalInterest.toFixed(2)
        }), " \u5143"]
      }), /*#__PURE__*/_jsxs("p", {
        children: ["\u603B\u8FD8\u6B3E\uFF1A", /*#__PURE__*/_jsx("strong", {
          children: result.totalPayment.toFixed(2)
        }), " \u5143"]
      })]
    }), /*#__PURE__*/_jsx("h4", {
      style: {
        marginTop: 24
      },
      children: '还款计划（前' + issueNumber + '期）'
    }), /*#__PURE__*/_jsx("div", {
      style: {
        maxHeight: 400,
        overflowY: 'auto'
      },
      children: /*#__PURE__*/_jsxs("table", {
        style: {
          width: '100%',
          borderCollapse: 'collapse'
        },
        border: 1,
        cellPadding: 6,
        children: [/*#__PURE__*/_jsx("thead", {
          children: /*#__PURE__*/_jsxs("tr", {
            children: [/*#__PURE__*/_jsx("th", {
              children: "\u671F\u6570"
            }), /*#__PURE__*/_jsx("th", {
              children: "\u6708\u4F9B"
            }), /*#__PURE__*/_jsx("th", {
              children: "\u672C\u91D1"
            }), /*#__PURE__*/_jsx("th", {
              children: "\u5229\u606F"
            }), /*#__PURE__*/_jsx("th", {
              children: "\u5269\u4F59\u672C\u91D1"
            })]
          })
        }), /*#__PURE__*/_jsx("tbody", {
          children: result.paymentPlan.slice(0, issueNumber).map(function (item) {
            return /*#__PURE__*/_jsxs("tr", {
              children: [/*#__PURE__*/_jsx("td", {
                children: item.month
              }), /*#__PURE__*/_jsx("td", {
                children: item.payment.toFixed(2)
              }), /*#__PURE__*/_jsx("td", {
                children: item.principal.toFixed(2)
              }), /*#__PURE__*/_jsx("td", {
                children: item.interest.toFixed(2)
              }), /*#__PURE__*/_jsx("td", {
                children: item.remainingPrincipal.toFixed(2)
              })]
            }, item.month);
          })
        })]
      })
    })]
  });
};
export default LoanCalculator;