# WFSignPanel

这是一个签字面板组件，签字完成后获取返回图片.

```jsx
import { WFSignPanel } from 'w-finance-react';
import { useState, useRef } from 'react';

export default () => {
  const [url, setUrl] = useState('');
  // 接收签字图片回调
  const handleSave = (dataUrl) => {
    console.log('签字图片 base64：', dataUrl);
    setUrl(dataUrl);
    // 你可以在这里上传到服务器、预览、下载等
  };

  return (
    <div>
      <img src={url} alt="" style={{ width: '100px', height: '100px' }} />
      <div style={{ padding: '20px', maxWidth: '600px' }}>
        <h3>签字画板</h3>
        <WFSignPanel
          width={210}
          height={300}
          penColor="#000"
          penWidth={2}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};
```

## API

### Props

| 参数      | 说明         | 类型     | 默认值 |
| --------- | ------------ | -------- | ------ |
| width     | 画布宽度     | _number_ | 200    |
| height    | 画布高度     | _number_ | 300    |
| penColor  | 画笔颜色     | _string_ | '#000' |
| penWidth  | 画笔粗细     | _number_ | 2      |
| className | 自定义样式类 | _string_ |        |

### Events

| 事件       | 说明                        | 回调参数          |
| ---------- | --------------------------- | ----------------- |
| onSave     | 保存回调（返回图片 base64） | _(value: string)_ |
| cancelText | 取消回调                    | void              |
