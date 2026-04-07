"use strict";(self.webpackChunkw_finance_react=self.webpackChunkw_finance_react||[]).push([[549],{60710:function(D,d,e){var c;e.r(d),e.d(d,{demos:function(){return R}});var y=e(17061),i=e.n(y),C=e(27424),v=e.n(C),S=e(17156),f=e.n(S),t=e(67294),M=e(1696),R={"wfgeneratecontract-demo-0":{component:t.memo(t.lazy(f()(i()().mark(function p(){var s,I,l,m,o;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,1696));case 2:return s=a.sent,I=s.WFgenerateContract,a.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return l=a.sent,m=l.useRef,o=l.useState,a.abrupt("return",{default:function(){var g=m(null),b=o(!1),_=v()(b,2),x=_[0],O=_[1],W=o(null),P=v()(W,2),E=P[0],B=P[1],T=o(null),h=v()(T,2),F=h[0],j=h[1];return t.createElement("div",null,t.createElement(I,{x:200,y:200,width:50,height:50,ref:g,getStatus:function(n){return O(n)},getSignFile:function(n){return B(n)},getPdfFile:function(n){return j(n)}}),t.createElement("div",{style:{maxWidth:500,margin:"30px auto",padding:20}},t.createElement("h2",{style:{marginBottom:20}},"PDF\u7B7E\u540D\u5408\u5E76\u5DE5\u5177"),t.createElement("div",{style:{marginBottom:16}},t.createElement("button",{type:"button",onClick:function(){var n;return(n=g.current)===null||n===void 0?void 0:n.selectPdf()}},"\u9009\u62E9PDF\u6587\u4EF6"),F&&t.createElement("p",null,"\u5DF2\u9009\u7B7E\u540D\uFF1A",F.name)),t.createElement("div",{style:{marginBottom:16}},t.createElement("button",{onClick:function(){var n;return(n=g.current)===null||n===void 0?void 0:n.selectSignImg()}},"\u9009\u62E9\u7B7E\u540D\u56FE\u7247"),E&&t.createElement("p",null,"\u5DF2\u9009\u7B7E\u540D\uFF1A",E.name)),t.createElement("button",{onClick:function(){var n;return(n=g.current)===null||n===void 0?void 0:n.handleMerge()},disabled:x,style:{backgroundColor:"#165DFF",color:"#fff",marginTop:10}},x?"\u5904\u7406\u4E2D...":"\u5408\u5E76\u7B7E\u540D\u5E76\u4E0B\u8F7DPDF")))}});case 10:case"end":return a.stop()}},p)})))),asset:{type:"BLOCK",id:"wfgeneratecontract-demo-0",refAtomIds:["WFgenerateContract"],dependencies:{"index.jsx":{type:"FILE",value:`import { WFgenerateContract } from 'w-finance-react';
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
        <h2 style={{ marginBottom: 20 }}>PDF\u7B7E\u540D\u5408\u5E76\u5DE5\u5177</h2>

        {/* \u9009\u62E9PDF */}
        <div style={{ marginBottom: 16 }}>
          <button type="button" onClick={() => mergeRef.current?.selectPdf()}>
            \u9009\u62E9PDF\u6587\u4EF6
          </button>
          {PDFImage && <p>\u5DF2\u9009\u7B7E\u540D\uFF1A{PDFImage.name}</p>}
        </div>

        {/* \u9009\u62E9\u7B7E\u540D */}
        <div style={{ marginBottom: 16 }}>
          <button onClick={() => mergeRef.current?.selectSignImg()}>
            \u9009\u62E9\u7B7E\u540D\u56FE\u7247
          </button>

          {signImage && <p>\u5DF2\u9009\u7B7E\u540D\uFF1A{signImage.name}</p>}
        </div>

        {/* \u5408\u5E76\u6309\u94AE */}
        <button
          onClick={() => mergeRef.current?.handleMerge()}
          disabled={loading}
          style={{
            backgroundColor: '#165DFF',
            color: '#fff',
            marginTop: 10,
          }}
        >
          {loading ? '\u5904\u7406\u4E2D...' : '\u5408\u5E76\u7B7E\u540D\u5E76\u4E0B\u8F7DPDF'}
        </button>
      </div>
    </div>
  );
};`},"w-finance-react":{type:"NPM",value:"0.0.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"w-finance-react":M,react:c||(c=e.t(t,2))},renderOpts:{compile:function(){var p=f()(i()().mark(function I(){var l,m=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(862).then(e.bind(e,16862));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,m));case 3:case"end":return r.stop()}},I)}));function s(){return p.apply(this,arguments)}return s}()}}}},69268:function(D,d,e){e.r(d),e.d(d,{texts:function(){return c}});const c=[{value:`\u8FD9\u662F\u4E00\u4E2A pdf \u5408\u6210\u7684\u7EC4\u4EF6\uFF0C\u4F20\u5165\u5BF9\u5E94 pdf \u8DDF\u56FE\u7247\uFF0C\u53EF\u5C06\u56FE\u7247\u5728 pdf \u7684\u4EFB\u610F\u4F4D\u7F6E\u5408\u6210\u4E00\u4E2A\u65B0\u7684 pdf \u5E76\u4E0B\u8F7D\u5230\u672C\u5730.
\u8BE5\u7EC4\u4EF6\u65E0\u6837\u5F0F\uFF0C\u9700\u624B\u52A8\u8C03\u7528\u5185\u90E8\u65B9\u6CD5 selectSignImg\uFF0CselectPdf\uFF0ChandleMerge \u5B8C\u6210\u529F\u80FD`,paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"x",paraId:1,tocIndex:2},{value:"\u56FE\u7247\u5408\u6210\u5728 pdf \u9875\u9762\u4E2D\u7684\u6A2A\u5411\u4F4D\u7F6E",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"''",paraId:1,tocIndex:2},{value:"y",paraId:1,tocIndex:2},{value:"\u56FE\u7247\u5408\u6210\u5728 pdf \u9875\u9762\u4E2D\u7684\u7AD6\u5411\u4F4D\u7F6E",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"''",paraId:1,tocIndex:2},{value:"width",paraId:1,tocIndex:2},{value:"\u56FE\u7247\u5728\u5408\u6210\u7684 pdf \u4E2D\u7684\u5BBD\u5EA6\u5927\u5C0F",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"''",paraId:1,tocIndex:2},{value:"width",paraId:1,tocIndex:2},{value:"\u56FE\u7247\u5728\u5408\u6210\u7684 pdf \u4E2D\u7684\u957F\u5EA6\u5927\u5C0F",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"''",paraId:1,tocIndex:2},{value:"\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u56DE\u8C03\u53C2\u6570",paraId:2,tocIndex:3},{value:"onCompelete",paraId:2,tocIndex:3},{value:"\u5408\u5E76\u6210\u529F\u540E\u8FD4\u56DE\u7684 pdf \u6587\u4EF6\u6D41",paraId:2,tocIndex:3},{value:"blob",paraId:2,tocIndex:3},{value:"getStatus",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5728\u5408\u5E76\u8FC7\u7A0B\u4E2D",paraId:2,tocIndex:3},{value:"boolean",paraId:2,tocIndex:3},{value:"getSignFile",paraId:2,tocIndex:3},{value:"\u83B7\u53D6\u5230\u9009\u62E9\u7684\u56FE\u7247",paraId:2,tocIndex:3},{value:"File",paraId:2,tocIndex:3},{value:"getPdfFile",paraId:2,tocIndex:3},{value:"\u83B7\u53D6\u5230\u9009\u62E9\u7684 pdf",paraId:2,tocIndex:3},{value:"File",paraId:2,tocIndex:3},{value:"selectSignImg",paraId:2,tocIndex:3},{value:"\u9009\u53D6\u56FE\u7247,\u901A\u8FC7 ref \u8C03\u7528",paraId:2,tocIndex:3},{value:"selectPdf",paraId:2,tocIndex:3},{value:"\u9009\u53D6 pdf,\u901A\u8FC7 ref \u8C03\u7528",paraId:2,tocIndex:3},{value:"handleMerge",paraId:2,tocIndex:3},{value:"\u5408\u6210 pdf,\u901A\u8FC7 ref \u8C03\u7528",paraId:2,tocIndex:3}]}}]);
