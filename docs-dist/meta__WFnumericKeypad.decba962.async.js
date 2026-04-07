"use strict";(self.webpackChunkw_finance_react=self.webpackChunkw_finance_react||[]).push([[404],{43528:function(h,l,e){var o;e.r(l),e.d(l,{demos:function(){return M}});var E=e(17061),d=e.n(E),y=e(27424),x=e.n(y),C=e(17156),I=e.n(C),t=e(67294),P=e(1696),M={"wfnumerickeypad-demo-0":{component:t.memo(t.lazy(I()(d()().mark(function i(){var u,c,r,s,p;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,1696));case 2:return u=n.sent,c=u.WFnumericKeypad,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,s=r.useState,p=r.useRef,n.abrupt("return",{default:function(){var O=s(!1),v=x()(O,2),g=v[0],f=v[1],m=p(null);return t.createElement("div",{style:{padding:20}},t.createElement("button",{onClick:function(){return f(!0)}},"\u6253\u5F00\u652F\u4ED8\u5BC6\u7801\u952E\u76D8"),t.createElement(c,{visible:g,length:6,ref:m,onComplete:function(D){console.log("\u5BC6\u7801\uFF1A",D),m.current.triggerShake()},onCancel:function(){return f(!1)}}))}});case 10:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"wfnumerickeypad-demo-0",refAtomIds:["WFnumericKeypad"],dependencies:{"index.jsx":{type:"FILE",value:`import { WFnumericKeypad } from 'w-finance-react';
import { useState, useRef } from 'react';

export default () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(true)}>\u6253\u5F00\u652F\u4ED8\u5BC6\u7801\u952E\u76D8</button>

      <WFnumericKeypad
        visible={show}
        length={6}
        ref={ref}
        onComplete={(val) => {
          console.log('\u5BC6\u7801\uFF1A', val);
          // \u5BC6\u7801\u9519\u8BEF\u65F6\u8C03\u7528\u6296\u52A8
          ref.current.triggerShake();
          // setShow(false);
        }}
        onCancel={() => setShow(false)}
      />
    </div>
  );
};`},"w-finance-react":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"w-finance-react":P,react:o||(o=e.t(t,2))},renderOpts:{compile:function(){var i=I()(d()().mark(function c(){var r,s=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(862).then(e.bind(e,16862));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,s));case 3:case"end":return a.stop()}},c)}));function u(){return i.apply(this,arguments)}return u}()}}}},97974:function(h,l,e){e.r(l),e.d(l,{texts:function(){return o}});const o=[{value:"\u8FD9\u662F\u4E00\u4E2A\u53EA\u53EF\u8F93\u5165\u6570\u5B57\u7684\u5BC6\u7801\u652F\u4ED8\u5F39\u6846\u7EC4\u4EF6\uFF0C\u8F93\u5165\u9519\u8BEF\u5E26\u6709\u9707\u52A8\u6548\u679C",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"visible",paraId:1,tocIndex:2},{value:"\u5F39\u7A97\u663E\u793A\u72B6\u6001",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"length",paraId:1,tocIndex:2},{value:"\u8F93\u5165\u5BC6\u7801\u4F4D\u6570",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"6",paraId:1,tocIndex:2},{value:"\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u56DE\u8C03\u53C2\u6570",paraId:2,tocIndex:3},{value:"onComplete",paraId:2,tocIndex:3},{value:"\u5BC6\u7801\u8F93\u5165\u540E\u7684\u56DE\u8C03",paraId:2,tocIndex:3},{value:"val:string",paraId:2,tocIndex:3},{value:"onCancel",paraId:2,tocIndex:3},{value:"\u53D6\u6D88\u8F93\u5165\u7684\u56DE\u8C03",paraId:2,tocIndex:3},{value:"void",paraId:2,tocIndex:3},{value:"triggerShake",paraId:2,tocIndex:3},{value:"\u6296\u52A8\u8F93\u5165\u6846\uFF0C\u901A\u8FC7 ref \u8C03\u7528",paraId:2,tocIndex:3},{value:"void",paraId:2,tocIndex:3}]}}]);
