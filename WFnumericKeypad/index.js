function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import "./WFnumericKeypad.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var WFnumericKeypad = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var visible = _ref.visible,
    _ref$length = _ref.length,
    length = _ref$length === void 0 ? 6 : _ref$length,
    onComplete = _ref.onComplete,
    onCancel = _ref.onCancel;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    pwd = _useState2[0],
    setPwd = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    shake = _useState4[0],
    setShake = _useState4[1];
  var pwdRef = useRef(null);
  // 错误抖动
  var _triggerShake = function triggerShake() {
    setShake(true);
    setTimeout(function () {
      return setShake(false);
    }, 500);
  };
  useImperativeHandle(ref, function () {
    return {
      triggerShake: function triggerShake() {
        _triggerShake();
      }
    };
  }, []);
  // 关闭时清空
  useEffect(function () {
    if (!visible) {
      setPwd('');
      setShake(false);
    }
  }, [visible]);

  // 数字输入
  var handleNum = function handleNum(num) {
    if (pwd.length >= length) return;
    var newPwd = pwd + num;
    setPwd(newPwd);
    if (newPwd.length === length) {
      onComplete(newPwd);
      setPwd('');
    }
  };

  // 删除
  var handleDel = function handleDel() {
    setPwd(pwd.slice(0, -1));
  };

  // 清空
  var handleClear = function handleClear() {
    setPwd('');
  };
  var keys = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['C', '0', '←']];
  if (!visible) return null;
  return /*#__PURE__*/_jsxs("div", {
    className: "overlayStyle",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "modalStyle",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "headerStyle",
        children: [/*#__PURE__*/_jsx("span", {
          className: "titleStyle",
          children: "\u8BF7\u8F93\u5165\u652F\u4ED8\u5BC6\u7801"
        }), /*#__PURE__*/_jsx("button", {
          type: "button",
          onClick: onCancel,
          className: "closeStyle",
          children: "\xD7"
        })]
      }), /*#__PURE__*/_jsx("div", {
        ref: pwdRef,
        className: "pwdBoxContainerStyle",
        style: {
          animation: shake ? 'shake 0.5s' : 'none'
        },
        children: Array.from({
          length: length
        }).map(function (_, i) {
          return /*#__PURE__*/_jsx("div", {
            className: "pwdBoxStyle",
            style: {
              borderColor: pwd[i] ? '#165DFF' : '#ddd'
            },
            children: pwd[i] && /*#__PURE__*/_jsx("div", {
              className: "dotStyle"
            })
          }, i);
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "padContainerStyle",
        children: keys.map(function (row, ri) {
          return /*#__PURE__*/_jsx("div", {
            className: "padRowStyle",
            children: row.map(function (key) {
              return /*#__PURE__*/_jsx("button", {
                type: "button",
                className: "padBtnStyle",
                onClick: function onClick() {
                  if (key === 'C') handleClear();else if (key === '←') handleDel();else handleNum(key);
                },
                children: key
              }, key);
            })
          }, ri);
        })
      })]
    }), /*#__PURE__*/_jsx("style", {
      children: "\n        @keyframes shake {\n          0%,100%{transform:translateX(0);}\n          10%,30%,50%,70%,90%{transform:translateX(-6px);}\n          20%,40%,60%,80%{transform:translateX(6px);}\n        }\n      "
    })]
  });
});
export default WFnumericKeypad;