# WFnumericKeypad

这是一个只可输入数字的密码支付弹框组件，输入错误带有震动效果

```jsx
import { WFnumericKeypad } from 'w-finance-react';
import { useState, useRef } from 'react';

export default () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(true)}>打开支付密码键盘</button>

      <WFnumericKeypad
        visible={show}
        length={6}
        ref={ref}
        onComplete={(val) => {
          console.log('密码：', val);
          // 密码错误时调用抖动
          ref.current.triggerShake();
          // setShow(false);
        }}
        onCancel={() => setShow(false)}
      />
    </div>
  );
};
```

## API

### Props

| 参数    | 说明         | 类型      | 默认值 |
| ------- | ------------ | --------- | ------ |
| visible | 弹窗显示状态 | _boolean_ |        |
| length  | 输入密码位数 | _number_  | 6      |

### Events

| 事件         | 说明                      | 回调参数   |
| ------------ | ------------------------- | ---------- |
| onComplete   | 密码输入后的回调          | val:string |
| onCancel     | 取消输入的回调            | void       |
| triggerShake | 抖动输入框，通过 ref 调用 | void       |
