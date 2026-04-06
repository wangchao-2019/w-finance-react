---
title: 指南
---

# 指南

这是一个基于 react 的金融组件库，专为金融场景设计，以下指南将帮助你快速上手。

## 快速开始

1.  准备环境：React ≥ 18.0.0，Node ≥ 20.0.0
2.  安装组件库：
    ```bash
    npm install @w-finance-react --save
    ```

## 如何使用

```tsx:pure
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
```
