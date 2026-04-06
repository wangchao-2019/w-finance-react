function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useDeferredValue, useEffect, useRef, useState } from 'react';
import "./WFinput.css";

// 组件 Props 类型定义（TS 类型约束）
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var WFinput = function WFinput(_ref) {
  var visible = _ref.visible,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '请输入金额' : _ref$title,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '请输入金额' : _ref$placeholder,
    _ref$maxLength = _ref.maxLength,
    maxLength = _ref$maxLength === void 0 ? 16 : _ref$maxLength,
    _ref$confirmText = _ref.confirmText,
    confirmText = _ref$confirmText === void 0 ? '确认' : _ref$confirmText,
    _ref$cancelText = _ref.cancelText,
    cancelText = _ref$cancelText === void 0 ? '取消' : _ref$cancelText,
    onConfirm = _ref.onConfirm,
    onCancel = _ref.onCancel;
  // 输入值状态
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var deferredValue = useDeferredValue(inputValue);
  // 输入框 DOM 引用（自动聚焦）
  var inputRef = useRef(null);

  // 格式化金额：千分位 + 保留小数
  var formatAmount = function formatAmount(val) {
    // 先只保留数字和小数点
    var onlyNumDot = val.replace(/[^\d.]/g, '');
    // 只保留第一个小数点
    var firstDotIndex = onlyNumDot.indexOf('.');
    if (firstDotIndex === -1) return onlyNumDot.replace(/\B(?=(\d{3})+(?!\d))/g, ',');else {
      return onlyNumDot.slice(0, firstDotIndex + 1).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + onlyNumDot.slice(firstDotIndex + 1, firstDotIndex + 3).replace(/\./g, '');
    }
  };

  // 转换为原始数字（去掉千分位）
  var getRawValue = function getRawValue(formattedValue) {
    var rawStr = formattedValue.replace(/,/g, '') || '0';
    return parseFloat(rawStr);
  };

  // 输入框变化处理
  var handleInputChange = function handleInputChange(e) {
    var val = e.target.value;
    var formattedVal = formatAmount(val);
    setInputValue(formattedVal);
  };

  // 确认提交
  var handleConfirm = function handleConfirm() {
    var rawValue = getRawValue(inputValue);
    // 金融行业空值默认 0
    var finalValue = inputValue || '0';
    onConfirm(finalValue, rawValue);
    // 提交后清空输入
    setInputValue('');
  };

  // 取消
  var handleCancel = function handleCancel() {
    setInputValue('');
    onCancel();
  };

  // 弹窗显示时自动聚焦 + 初始化默认值
  useEffect(function () {
    if (visible) {
      // 初始化默认值
      if (defaultValue) {
        setInputValue(formatAmount(defaultValue));
      } else {
        setInputValue('');
      }
      // 自动聚焦输入框
      setTimeout(function () {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      }, 100);
    }
  }, [visible, defaultValue]);

  // 不显示时不渲染
  if (!visible) return null;
  return /*#__PURE__*/_jsx("div", {
    className: "financial-modal-overlay",
    children: /*#__PURE__*/_jsxs("div", {
      className: "financial-modal-container",
      children: [/*#__PURE__*/_jsx("div", {
        className: "financial-modal-title",
        children: title
      }), /*#__PURE__*/_jsxs("div", {
        className: "financial-modal-input-wrapper",
        children: [/*#__PURE__*/_jsx("span", {
          className: "currency-symbol",
          children: "\xA5"
        }), /*#__PURE__*/_jsx("input", {
          ref: inputRef,
          className: "financial-modal-input",
          value: deferredValue,
          onChange: handleInputChange,
          placeholder: placeholder,
          maxLength: maxLength
          // 移动端数字键盘
          ,
          inputMode: "decimal"
          // 禁止输入表情/特殊字符
          ,
          onKeyDown: function onKeyDown(e) {
            if (e.key === 'e' || e.key === 'E' || e.key === '-') {
              e.preventDefault();
            }
          }
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "financial-modal-buttons",
        children: [/*#__PURE__*/_jsx("button", {
          type: "button",
          className: "financial-modal-btn cancel",
          onClick: handleCancel,
          children: cancelText
        }), /*#__PURE__*/_jsx("button", {
          type: "button",
          className: "financial-modal-btn confirm",
          onClick: handleConfirm,
          children: confirmText
        })]
      })]
    })
  });
};
export default WFinput;