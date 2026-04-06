import { useEffect, useRef, useState } from 'react';

// 类型定义
interface SignatureCanvasProps {
  width?: number; // 画布宽度
  height?: number; // 画布高度
  penColor?: string; // 画笔颜色
  penWidth?: number; // 画笔粗细
  onSave?: (dataUrl: string) => void; // 保存回调
  className?: string; // 自定义样式类
}

const WFSignPanel = ({
  width = 200,
  height = 300,
  penColor = '#000',
  penWidth = 2,
  onSave,
  className = '',
}: SignatureCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  // 初始化画布
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
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
  const getCanvasCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

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
      y: clientY - rect.top,
    };
  };

  // 开始绘制
  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault(); // 防止移动端滚动
    const { x, y } = getCanvasCoordinates(e);
    if (!ctx) return;

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  // 绘制中
  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !ctx) return;
    e.preventDefault();

    const { x, y } = getCanvasCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  // 结束绘制
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // 清空画布
  const clearCanvas = () => {
    if (!ctx || !canvasRef.current) return;
    ctx.fillRect(0, 0, width, height);
  };

  // 导出签字图片（base64）
  const saveSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL('image/png');
    onSave?.(dataUrl);
    return dataUrl;
  };

  return (
    <div className={`signature-canvas-wrapper ${className}`}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        style={{
          border: '1px solid #ccc',
          borderRadius: '4px',
          background: '#fff',
          touchAction: 'none', // 禁止浏览器默认触摸行为
        }}
      />

      {/* 操作按钮 */}
      <div style={{ marginTop: '12px', gap: '8px', display: 'flex' }}>
        <button
          type="button"
          onClick={clearCanvas}
          style={{
            padding: '6px 12px',
            border: 'none',
            borderRadius: '4px',
            background: '#f5f5f5',
            cursor: 'pointer',
          }}
        >
          清空
        </button>
        <button
          type="button"
          onClick={saveSignature}
          style={{
            padding: '6px 12px',
            border: 'none',
            borderRadius: '4px',
            background: '#1677ff',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          保存签字
        </button>
      </div>
    </div>
  );
};

export default WFSignPanel;
