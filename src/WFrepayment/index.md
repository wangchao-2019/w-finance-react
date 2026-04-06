# WFrepayment

这是一个贷款计算功能组件，输入对应的贷款金额，年利率，贷款年限，还款方式即可生成还款的详细信息

```jsx
import { WFrepayment } from 'w-finance-react';
import { useState } from 'react';

export default () => {
  return <WFrepayment issueNumber={40}></WFrepayment>;
};
```

## API

### Props

| 参数        | 说明     | 类型     | 默认值 |
| ----------- | -------- | -------- | ------ |
| issueNumber | 还款期数 | _number_ | 20     |
