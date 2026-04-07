"use strict";(self.webpackChunkw_finance_react=self.webpackChunkw_finance_react||[]).push([[114],{84214:function(_,r,e){var d;e.r(r),e.d(r,{demos:function(){return h}});var E=e(17061),u=e.n(E),C=e(27424),s=e.n(C),P=e(17156),p=e.n(P),n=e(67294),T=e(1696),h={"wfinput-demo-0":{component:n.memo(n.lazy(p()(u()().mark(function I(){var o,c,l,t;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,1696));case 2:return o=a.sent,c=o.WFinput,a.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return l=a.sent,t=l.useState,a.abrupt("return",{default:function(){var O=t(!1),v=s()(O,2),b=v[0],i=v[1],D=t(""),x=s()(D,2),y=x[0],j=x[1],W=t(""),m=s()(W,2),g=m[0],A=m[1];return n.createElement("div",null,n.createElement("p",null,y),n.createElement("p",null,g),n.createElement("button",{onClick:function(){return i(!0)}},"\u5F00\u59CB\u8F93\u5165"),n.createElement(c,{visible:b,onCancel:function(){i(!1)},onConfirm:function(L,S){i(!1),j(L),A(S)}}))}});case 9:case"end":return a.stop()}},I)})))),asset:{type:"BLOCK",id:"wfinput-demo-0",refAtomIds:["WFinput"],dependencies:{"index.jsx":{type:"FILE",value:`import { WFinput } from 'w-finance-react';\r
import { useState } from 'react';\r
\r
export default () => {\r
  const [visible, setVisible] = useState(false);\r
  const [text1, setText1] = useState('');\r
  const [text2, setText2] = useState('');\r
  return (\r
    <div>\r
      <p>{text1}</p>\r
      <p>{text2}</p>\r
      <button onClick={() => setVisible(true)}>\u5F00\u59CB\u8F93\u5165</button>\r
      <WFinput\r
        visible={visible}\r
        onCancel={() => {\r
          setVisible(false);\r
        }}\r
        onConfirm={(finalValue, rawValue) => {\r
          setVisible(false);\r
          setText1(finalValue);\r
          setText2(rawValue);\r
        }}\r
      />\r
    </div>\r
  );\r
};`},"w-finance-react":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"w-finance-react":T,react:d||(d=e.t(n,2))},renderOpts:{compile:function(){var I=p()(u()().mark(function c(){var l,t=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(862).then(e.bind(e,16862));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,t));case 3:case"end":return a.stop()}},c)}));function o(){return I.apply(this,arguments)}return o}()}}}},89776:function(_,r,e){e.r(r),e.d(r,{texts:function(){return d}});const d=[{value:"\u8FD9\u662F\u5F39\u6846\u8F93\u5165\u7684\u7EC4\u4EF6\uFF0C\u8F93\u5165\u6846\u81EA\u52A8\u5C06\u8F93\u5165\u503C\u4EE5\u5343\u5206\u4F4D\u7684\u5F62\u5F0F\u5C55\u793A\uFF0C\u5C0F\u6570\u70B9\u53EA\u80FD\u8F93\u5165\u540E 2 \u4F4D",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"visible",paraId:1,tocIndex:2},{value:"\u5F39\u7A97\u663E\u793A\u72B6\u6001",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"title",paraId:1,tocIndex:2},{value:"\u5F39\u7A97\u6807\u9898",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"'\u8BF7\u8F93\u5165\u91D1\u989D'",paraId:1,tocIndex:2},{value:"defaultValue",paraId:1,tocIndex:2},{value:"\u8F93\u5165\u6846\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:" | ",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"placeholder",paraId:1,tocIndex:2},{value:"\u5F39\u7A97\u6807\u9898",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"'\u8BF7\u8F93\u5165\u91D1\u989D'",paraId:1,tocIndex:2},{value:"maxLength",paraId:1,tocIndex:2},{value:"\u6700\u5927\u8F93\u5165\u957F\u5EA6",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"16",paraId:1,tocIndex:2},{value:"confirmText",paraId:1,tocIndex:2},{value:"\u786E\u8BA4\u6309\u94AE\u6587\u5B57",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"'\u786E\u8BA4'",paraId:1,tocIndex:2},{value:"cancelText",paraId:1,tocIndex:2},{value:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"'\u53D6\u6D88'",paraId:1,tocIndex:2},{value:"\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u56DE\u8C03\u53C2\u6570",paraId:2,tocIndex:3},{value:"onConfirm",paraId:2,tocIndex:3},{value:"\u786E\u8BA4\u56DE\u8C03\uFF08\u8FD4\u56DE\u683C\u5F0F\u5316\u540E\u7684\u503C\u548C\u539F\u59CB\u503C\uFF09",paraId:2,tocIndex:3},{value:"(value: string, rawValue: number)",paraId:2,tocIndex:3},{value:"cancelText",paraId:2,tocIndex:3},{value:"\u53D6\u6D88\u56DE\u8C03",paraId:2,tocIndex:3},{value:"void",paraId:2,tocIndex:3}]}}]);
