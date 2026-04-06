import { PDFDocument } from 'pdf-lib';
import React, { useImperativeHandle, useRef } from 'react';
// 类型定义
interface Position {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}
interface WFgenerateContractProp extends Position {
  onCompelete: (value: Blob) => void;
  getStatus?: (value: boolean) => void;
  getSignFile?: (value: File) => void;
  getPdfFile?: (value: File) => void;
}
type fileData = {
  signImage?: File | '';
  pdfFile?: File | '';
};

const WFgenerateContract: React.FC<WFgenerateContractProp> = React.forwardRef(
  (
    {
      x,
      y,
      width = 50,
      height = 50,
      onCompelete,
      getStatus,
      getSignFile,
      getPdfFile,
    },
    ref,
  ) => {
    const fileRef = useRef<fileData>({
      signImage: '',
      pdfFile: '',
    });
    // 状态
    // const [pdfFile, setPdfFile] = useState<File | null>(null);
    // const [signImage, setSignImage] = useState<File | null>(null);

    // 签字位置（可自定义）
    const signPosition: Position = {
      x, // 横坐标
      y, // 纵坐标
      width, // 签字宽度
      height, // 签字高度
    };

    // 文件引用
    const pdfInputRef = useRef<HTMLInputElement | null>(null);
    const signInputRef = useRef<HTMLInputElement | null>(null);

    // 1. 选择PDF
    const handlePdfSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        // setPdfFile(file);
        fileRef.current.pdfFile = file;
        getPdfFile?.(file);
      }
    };

    // 2. 选择签字图片
    const handleSignSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        // setSignImage(file);
        fileRef.current.signImage = file;
        getSignFile?.(file);
      }
    };

    // 3. 核心：合并PDF + 签名
    const handleMerge = async () => {
      if (!fileRef.current.pdfFile || !fileRef.current.signImage) {
        alert('请先选择PDF文件和签名图片');
        return;
      }

      try {
        getStatus?.(true);

        // 读取PDF文件
        const pdfBytes = await fileRef.current.pdfFile.arrayBuffer();
        const pdfDoc = await PDFDocument.load(pdfBytes);

        // 读取签名图片
        const imgBytes = await fileRef.current.signImage.arrayBuffer();
        let img;

        // 自动识别图片格式
        if (fileRef.current.signImage.type === 'image/png') {
          img = await pdfDoc.embedPng(imgBytes);
        } else if (fileRef.current.signImage.type === 'image/jpeg') {
          img = await pdfDoc.embedJpg(imgBytes);
        } else {
          alert('仅支持 PNG / JPG 签名');
          return;
        }

        // 获取第一页
        const pages = pdfDoc.getPages();
        pages.forEach((Page) => {
          // 绘制签名到指定位置
          Page.drawImage(img, {
            x: signPosition.x,
            y: signPosition.y,
            width: signPosition.width,
            height: signPosition.height,
          });
        });

        // 生成新PDF
        const newPdfBytes: any = await pdfDoc.save();
        const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        // 下载
        const a = document.createElement('a');
        a.href = url;
        a.download = `已签名_${fileRef.current.pdfFile.name}`;
        a.click();

        URL.revokeObjectURL(url);
        a.remove();
        alert('签名合并成功！');
        onCompelete?.(blob);
      } catch (err) {
        console.error('合并失败：', err);
        alert('PDF合并失败，请检查文件');
      } finally {
        getStatus?.(false);
      }
    };
    useImperativeHandle(
      ref,
      () => {
        return {
          selectSignImg() {
            signInputRef.current?.click();
          },
          selectPdf() {
            pdfInputRef.current?.click();
          },
          async handleMerge() {
            await handleMerge();
          },
        };
      },
      [],
    );
    return (
      <>
        <input
          ref={signInputRef}
          type="file"
          accept="image/png,image/jpeg"
          hidden
          onChange={handleSignSelect}
        />
        <input
          ref={pdfInputRef}
          type="file"
          accept="application/pdf"
          hidden
          onChange={handlePdfSelect}
        />
      </>
    );
  },
);

export default WFgenerateContract;
