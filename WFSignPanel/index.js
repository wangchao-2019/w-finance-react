function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useEffect, useRef, useState } from 'react';

// 类型定义
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var WFSignPanel = function WFSignPanel(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 200 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 300 : _ref$height,
    _ref$penColor = _ref.penColor,
    penColor = _ref$penColor === void 0 ? '#000' : _ref$penColor,
    _ref$penWidth = _ref.penWidth,
    penWidth = _ref$penWidth === void 0 ? 2 : _ref$penWidth,
    onSave = _ref.onSave,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var canvasRef = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDrawing = _useState2[0],
    setIsDrawing = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    ctx = _useState4[0],
    setCtx = _useState4[1];

  // 初始化画布
  useEffect(function () {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var context = canvas.getContext('2d');
    if (!context) return;

    // 设置画布样式
    context.strokeStyle = penColor;
    context.lineWidth = penWidth;
    context.lineCap = 'round'; // 圆润笔触
    context.lineJoin = 'round';
    context.fillStyle = '#fff'; // 白色背景
    context.fillRect(0, 0, width, height);
    setCtx(context);
  }, [width, height, penColor, penWidth]);

  // 获取鼠标/触摸在画布上的坐标
  var getCanvasCoordinates = function getCanvasCoordinates(e) {
    var canvas = canvasRef.current;
    if (!canvas) return {
      x: 0,
      y: 0
    };
    var rect = canvas.getBoundingClientRect();
    var clientX, clientY;

    // 区分鼠标事件和触摸事件
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  // 开始绘制
  var startDrawing = function startDrawing(e) {
    e.preventDefault(); // 防止移动端滚动
    var _getCanvasCoordinates = getCanvasCoordinates(e),
      x = _getCanvasCoordinates.x,
      y = _getCanvasCoordinates.y;
    if (!ctx) return;
    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  // 绘制中
  var draw = function draw(e) {
    if (!isDrawing || !ctx) return;
    e.preventDefault();
    var _getCanvasCoordinates2 = getCanvasCoordinates(e),
      x = _getCanvasCoordinates2.x,
      y = _getCanvasCoordinates2.y;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  // 结束绘制
  var stopDrawing = function stopDrawing() {
    setIsDrawing(false);
  };

  // 清空画布
  var clearCanvas = function clearCanvas() {
    if (!ctx || !canvasRef.current) return;
    ctx.fillRect(0, 0, width, height);
  };

  // 导出签字图片（base64）
  var saveSignature = function saveSignature() {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var dataUrl = canvas.toDataURL('image/png');
    onSave === null || onSave === void 0 || onSave(dataUrl);
    return dataUrl;
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "signature-canvas-wrapper ".concat(className),
    children: [/*#__PURE__*/_jsx("canvas", {
      ref: canvasRef,
      width: width,
      height: height,
      onMouseDown: startDrawing,
      onMouseMove: draw,
      onMouseUp: stopDrawing,
      onMouseLeave: stopDrawing,
      onTouchStart: startDrawing,
      onTouchMove: draw,
      onTouchEnd: stopDrawing,
      style: {
        border: '1px solid #ccc',
        borderRadius: '4px',
        background: '#fff',
        touchAction: 'none' // 禁止浏览器默认触摸行为
      }
    }), /*#__PURE__*/_jsxs("div", {
      style: {
        marginTop: '12px',
        gap: '8px',
        display: 'flex'
      },
      children: [/*#__PURE__*/_jsx("button", {
        type: "button",
        onClick: clearCanvas,
        style: {
          padding: '6px 12px',
          border: 'none',
          borderRadius: '4px',
          background: '#f5f5f5',
          cursor: 'pointer'
        },
        children: "\u6E05\u7A7A"
      }), /*#__PURE__*/_jsx("button", {
        type: "button",
        onClick: saveSignature,
        style: {
          padding: '6px 12px',
          border: 'none',
          borderRadius: '4px',
          background: '#1677ff',
          color: '#fff',
          cursor: 'pointer'
        },
        children: "\u4FDD\u5B58\u7B7E\u5B57"
      })]
    })]
  });
};
export default WFSignPanel;