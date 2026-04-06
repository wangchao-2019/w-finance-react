# WFbankCardInput

这是一个银行卡输入框，输入后可自动识别银行名称并返回脱敏数据，并支持复制卡号

```jsx
import { WFbankCardInput } from 'w-finance-react';
import { useRef, useState } from 'react';

export default () => {
  const getCardInfo = (v) => {
    console.log(v);
  };
  return (
    <WFbankCardInput
      desensitizeFlag={true}
      getCardInfo={getCardInfo}
      showBankInfo={true}
    ></WFbankCardInput>
  );
};
```

## API

### Props

| 参数            | 说明                           | 类型      | 默认值 |
| --------------- | ------------------------------ | --------- | ------ |
| desensitizeFlag | 输入完成是否在下方显示脱敏卡号 | _boolean_ | false  |
| showBankInfo    | 输入完成是否展示银行相关信息   | _boolean_ | false  |

### Events

| 事件        | 说明                                 | 回调参数                                                                                        |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| getCardInfo | 卡号输入后并获取到对应银行信息时触发 | _(cardNoDesensitize: string, cardNo: string, bankName: string, cardType: string, logo: string)_ |
