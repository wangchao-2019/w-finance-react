# WFgenerateContract

这是一个 pdf 合成的组件，传入对应 pdf 跟图片，可将图片在 pdf 的任意位置合成一个新的 pdf 并下载到本地.
该组件无样式，需手动调用内部方法 selectSignImg，selectPdf，handleMerge 完成功能

```jsx
import { WFgenerateContract } from 'w-finance-react';
import { useRef, useState } from 'react';

export default () => {
  const mergeRef = useRef(null);
  const [loading, setLoding] = useState(false);
  const [signImage, setSignImage] = useState(null);
  const [PDFImage, setPdfimg] = useState(null);
  return (
    <div>
      <WFgenerateContract
        x={200}
        y={200}
        width={50}
        height={50}
        ref={mergeRef}
        getStatus={(v) => setLoding(v)}
        getSignFile={(v) => setSignImage(v)}
        getPdfFile={(v) => setPdfimg(v)}
      ></WFgenerateContract>
      <div style={{ maxWidth: 500, margin: '30px auto', padding: 20 }}>
        <h2 style={{ marginBottom: 20 }}>PDF签名合并工具</h2>

        {/* 选择PDF */}
        <div style={{ marginBottom: 16 }}>
          <button type="button" onClick={() => mergeRef.current?.selectPdf()}>
            选择PDF文件
          </button>
          {PDFImage && <p>已选签名：{PDFImage.name}</p>}
        </div>

        {/* 选择签名 */}
        <div style={{ marginBottom: 16 }}>
          <button onClick={() => mergeRef.current?.selectSignImg()}>
            选择签名图片
          </button>

          {signImage && <p>已选签名：{signImage.name}</p>}
        </div>

        {/* 合并按钮 */}
        <button
          onClick={() => mergeRef.current?.handleMerge()}
          disabled={loading}
          style={{
            backgroundColor: '#165DFF',
            color: '#fff',
            marginTop: 10,
          }}
        >
          {loading ? '处理中...' : '合并签名并下载PDF'}
        </button>
      </div>
    </div>
  );
};
```

## API

### Props

| 参数  | 说明                            | 类型     | 默认值 |
| ----- | ------------------------------- | -------- | ------ |
| x     | 图片合成在 pdf 页面中的横向位置 | _number_ | ''     |
| y     | 图片合成在 pdf 页面中的竖向位置 | _number_ | ''     |
| width | 图片在合成的 pdf 中的宽度大小   | _number_ | ''     |
| width | 图片在合成的 pdf 中的长度大小   | _number_ | ''     |

### Events

| 事件          | 说明                        | 回调参数  |
| ------------- | --------------------------- | --------- |
| onCompelete   | 合并成功后返回的 pdf 文件流 | _blob_    |
| getStatus     | 是否在合并过程中            | _boolean_ |
| getSignFile   | 获取到选择的图片            | _File_    |
| getPdfFile    | 获取到选择的 pdf            | _File_    |
| selectSignImg | 选取图片,通过 ref 调用      |           |
| selectPdf     | 选取 pdf,通过 ref 调用      |           |
| handleMerge   | 合成 pdf,通过 ref 调用      |           |
