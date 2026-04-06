interface SignatureCanvasProps {
    width?: number;
    height?: number;
    penColor?: string;
    penWidth?: number;
    onSave?: (dataUrl: string) => void;
    className?: string;
}
declare const WFSignPanel: ({ width, height, penColor, penWidth, onSave, className, }: SignatureCanvasProps) => import("react/jsx-runtime").JSX.Element;
export default WFSignPanel;
