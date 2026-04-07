"use strict";(self.webpackChunkw_finance_react=self.webpackChunkw_finance_react||[]).push([[142],{80593:function(_,l,e){var d;e.r(l),e.d(l,{demos:function(){return g}});var h=e(17061),o=e.n(h),x=e(27424),f=e.n(x),E=e(17156),I=e.n(E),a=e(67294),P=e(1696),g={"wfsignpanel-demo-0":{component:a.memo(a.lazy(I()(o()().mark(function i(){var u,c,r,s,p;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,1696));case 2:return u=n.sent,c=u.WFSignPanel,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,s=r.useState,p=r.useRef,n.abrupt("return",{default:function(){var M=s(""),v=f()(M,2),O=v[0],y=v[1],W=function(m){console.log("\u7B7E\u5B57\u56FE\u7247 base64\uFF1A",m),y(m)};return a.createElement("div",null,a.createElement("img",{src:O,alt:"",style:{width:"100px",height:"100px"}}),a.createElement("div",{style:{padding:"20px",maxWidth:"600px"}},a.createElement("h3",null,"\u7B7E\u5B57\u753B\u677F"),a.createElement(c,{width:210,height:300,penColor:"#000",penWidth:2,onSave:W})))}});case 10:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"wfsignpanel-demo-0",refAtomIds:["WFSignPanel"],dependencies:{"index.jsx":{type:"FILE",value:`import { WFSignPanel } from 'w-finance-react';\r
import { useState, useRef } from 'react';\r
\r
export default () => {\r
  const [url, setUrl] = useState('');\r
  // \u63A5\u6536\u7B7E\u5B57\u56FE\u7247\u56DE\u8C03\r
  const handleSave = (dataUrl) => {\r
    console.log('\u7B7E\u5B57\u56FE\u7247 base64\uFF1A', dataUrl);\r
    setUrl(dataUrl);\r
    // \u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u3001\u9884\u89C8\u3001\u4E0B\u8F7D\u7B49\r
  };\r
\r
  return (\r
    <div>\r
      <img src={url} alt="" style={{ width: '100px', height: '100px' }} />\r
      <div style={{ padding: '20px', maxWidth: '600px' }}>\r
        <h3>\u7B7E\u5B57\u753B\u677F</h3>\r
        <WFSignPanel\r
          width={210}\r
          height={300}\r
          penColor="#000"\r
          penWidth={2}\r
          onSave={handleSave}\r
        />\r
      </div>\r
    </div>\r
  );\r
};`},"w-finance-react":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"w-finance-react":P,react:d||(d=e.t(a,2))},renderOpts:{compile:function(){var i=I()(o()().mark(function c(){var r,s=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(862).then(e.bind(e,16862));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,s));case 3:case"end":return t.stop()}},c)}));function u(){return i.apply(this,arguments)}return u}()}}}},14295:function(_,l,e){e.r(l),e.d(l,{texts:function(){return d}});const d=[{value:"\u8FD9\u662F\u4E00\u4E2A\u7B7E\u5B57\u9762\u677F\u7EC4\u4EF6\uFF0C\u7B7E\u5B57\u5B8C\u6210\u540E\u83B7\u53D6\u8FD4\u56DE\u56FE\u7247.",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"width",paraId:1,tocIndex:2},{value:"\u753B\u5E03\u5BBD\u5EA6",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"200",paraId:1,tocIndex:2},{value:"height",paraId:1,tocIndex:2},{value:"\u753B\u5E03\u9AD8\u5EA6",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"300",paraId:1,tocIndex:2},{value:"penColor",paraId:1,tocIndex:2},{value:"\u753B\u7B14\u989C\u8272",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"'#000'",paraId:1,tocIndex:2},{value:"penWidth",paraId:1,tocIndex:2},{value:"\u753B\u7B14\u7C97\u7EC6",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"2",paraId:1,tocIndex:2},{value:"className",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F\u7C7B",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u56DE\u8C03\u53C2\u6570",paraId:2,tocIndex:3},{value:"onSave",paraId:2,tocIndex:3},{value:"\u4FDD\u5B58\u56DE\u8C03\uFF08\u8FD4\u56DE\u56FE\u7247 base64\uFF09",paraId:2,tocIndex:3},{value:"(value: string)",paraId:2,tocIndex:3},{value:"cancelText",paraId:2,tocIndex:3},{value:"\u53D6\u6D88\u56DE\u8C03",paraId:2,tocIndex:3},{value:"void",paraId:2,tocIndex:3}]}}]);
