# WFinput

这是弹框输入的组件，输入框自动将输入值以千分位的形式展示，小数点只能输入后 2 位

```jsx
import { WFinput } from 'w-finance-react';
import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  return (
    <div>
      <p>{text1}</p>
      <p>{text2}</p>
      <button onClick={() => setVisible(true)}>开始输入</button>
      <WFinput
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        onConfirm={(finalValue, rawValue) => {
          setVisible(false);
          setText1(finalValue);
          setText2(rawValue);
        }}
      />
    </div>
  );
};
```

## API

### Props

| 参数         | 说明         | 类型                 | 默认值       |
| ------------ | ------------ | -------------------- | ------------ |
| visible      | 弹窗显示状态 | _boolean_            |              |
| title        | 弹窗标题     | _string_             | '请输入金额' |
| defaultValue | 输入框默认值 | _number_ \| _string_ |
| placeholder  | 弹窗标题     | _string_             | '请输入金额' |
| maxLength    | 最大输入长度 | _number_             | 16           |
| confirmText  | 确认按钮文字 | _string_             | '确认'       |
| cancelText   | 取消按钮文字 | _string_             | '取消'       |

### Events

| 事件       | 说明                                 | 回调参数                            |
| ---------- | ------------------------------------ | ----------------------------------- |
| onConfirm  | 确认回调（返回格式化后的值和原始值） | _(value: string, rawValue: number)_ |
| cancelText | 取消回调                             | void                                |
