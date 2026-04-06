function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useEffect, useRef, useState } from 'react';
import { desensitizeCardNo, formatCardNo, getBankByCardNo, luhnCheck } from "./bankUtils";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var WFbankCardInput = function WFbankCardInput(_ref) {
  var _ref$desensitizeFlag = _ref.desensitizeFlag,
    desensitizeFlag = _ref$desensitizeFlag === void 0 ? false : _ref$desensitizeFlag,
    getCardInfo = _ref.getCardInfo,
    _ref$showBankInfo = _ref.showBankInfo,
    showBankInfo = _ref$showBankInfo === void 0 ? false : _ref$showBankInfo;
  var inputRef = useRef(null);
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    cardNo = _useState2[0],
    setCardNo = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    bankInfo = _useState4[0],
    setBankInfo = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    isValid = _useState6[0],
    setIsValid = _useState6[1];
  useEffect(function () {
    if (bankInfo) {
      getCardInfo === null || getCardInfo === void 0 || getCardInfo(_objectSpread(_objectSpread({}, bankInfo), {}, {
        cardNoDesensitize: desensitizeCardNo(cardNo),
        cardNo: cardNo
      }));
    }
  }, [cardNo]);
  // 输入变化
  var handleChange = function handleChange(e) {
    console.log(222222);
    var formatted = formatCardNo(e.target.value);
    setCardNo(formatted);
    var raw = formatted.replace(/\s/g, '');
    if (raw.length === 0) {
      setIsValid(null);
      setBankInfo(null);
      return;
    }

    // 校验
    setIsValid(luhnCheck(raw));
    // 识别银行
    setBankInfo(getBankByCardNo(raw));
  };

  // 清空
  var handleClear = function handleClear() {
    var _inputRef$current;
    setCardNo('');
    setIsValid(null);
    setBankInfo(null);
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
  };

  // 复制
  var handleCopy = function handleCopy() {
    var raw = cardNo.replace(/\s/g, '');
    if (!raw) return;
    navigator.clipboard.writeText(raw).then(function () {
      alert('复制成功！');
    });
  };
  return /*#__PURE__*/_jsxs("div", {
    style: {
      maxWidth: 420,
      margin: '20px 0',
      fontFamily: 'system-ui'
    },
    children: [/*#__PURE__*/_jsx("div", {
      style: {
        marginBottom: 8,
        fontWeight: 500
      },
      children: "\u94F6\u884C\u5361\u53F7"
    }), /*#__PURE__*/_jsxs("div", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/_jsx("input", {
        ref: inputRef,
        type: "text",
        value: cardNo,
        onChange: handleChange,
        placeholder: "\u8BF7\u8F93\u5165\u94F6\u884C\u5361\u53F7",
        maxLength: 30,
        style: {
          width: '100%',
          padding: '12px 40px 12px 14px',
          fontSize: 16,
          border: '1px solid',
          borderColor: isValid === null ? '#dcdcdc' : isValid ? '#00b42a' : '#ff5252',
          borderRadius: 8,
          outline: 'none'
        }
      }), cardNo && /*#__PURE__*/_jsx("button", {
        type: "button",
        onClick: handleClear,
        style: {
          position: 'absolute',
          right: 20,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: 18,
          color: '#999'
        },
        children: "\u2715"
      }), cardNo && isValid && /*#__PURE__*/_jsx("button", {
        type: "button",
        onClick: handleCopy,
        style: {
          position: 'absolute',
          right: 5,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: 16,
          color: '#1677ff'
        },
        children: "\u2398"
      })]
    }), isValid === false && cardNo.replace(/\s/g, '').length >= 13 && /*#__PURE__*/_jsx("div", {
      style: {
        color: '#ff5252',
        fontSize: 12,
        marginTop: 4
      },
      children: "\u94F6\u884C\u5361\u683C\u5F0F\u4E0D\u6B63\u786E"
    }), bankInfo && showBankInfo && /*#__PURE__*/_jsxs("div", {
      style: {
        marginTop: 12,
        padding: 12,
        background: '#f7f8fa',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 10
      },
      children: [/*#__PURE__*/_jsx("div", {
        style: {
          fontSize: 24
        },
        children: "\uD83C\uDFE6"
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("div", {
          style: {
            fontWeight: 500
          },
          children: bankInfo.bankName
        }), /*#__PURE__*/_jsx("div", {
          style: {
            fontSize: 12,
            color: '#666'
          },
          children: bankInfo.cardType
        })]
      })]
    }), isValid && cardNo && desensitizeFlag && /*#__PURE__*/_jsxs("div", {
      style: {
        marginTop: 12,
        fontSize: 14,
        color: '#666'
      },
      children: ["\u8131\u654F\u5C55\u793A\uFF1A", desensitizeCardNo(cardNo)]
    })]
  });
};
export default WFbankCardInput;