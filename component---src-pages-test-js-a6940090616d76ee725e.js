"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[475],{8191:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u}});var l=a(4506),n=a(6540),r=a(4967),s=a(3895),c=a(7528),o=a(8418),i=a(9768);const u=e=>{let{data:t}=e;return n.createElement(c.A,{title:"小説の新刊一覧",ogpimage:"",description:"小説の新刊一覧、最近発売された小説を一覧で表示します。"})};t.default=e=>{var t;let{data:a,location:c}=e;const u=a.site.siteMetadata.catesafe;var m=new Date,p=parseInt(m.toLocaleDateString("sv-SE").replaceAll("-",""),10);const{0:g,1:h}=(0,n.useState)(!0),{0:E,1:d}=(0,n.useState)([]),{0:b,1:f}=(0,n.useState)([]),{0:S,1:v}=(0,n.useState)([]),{0:A,1:y}=(0,n.useState)(p);(0,n.useEffect)((()=>{fetch(`https://kyukyunyorituryo.github.io/new_pub/json/${A}j.json`).then((e=>e.json())).then((e=>{var t=e;const a=t.map((e=>e.Publisher)),n=(0,l.A)(new Set(a)),r=t.map((e=>e.Category.split(","))).flat();var s=(0,l.A)(new Set(r));s=s.filter((e=>u.includes(e))),n.length=10,d(e),f(s),v(n),h(!1)}))}),[]);var k="小説の新刊一覧";const w=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return g?n.createElement(n.Fragment,null):n.createElement(n.Fragment,null,n.createElement(s.A,{location:c,title:w},n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h1",{itemProp:"headline"}," ","「Kindle新刊」"+k),n.createElement("p",null,"最近発売された小説の一覧ページ")),n.createElement(i.A,{book:E,catetag:b,pubtag:S}),n.createElement("hr",null),n.createElement(o.A,{title:k,url:""}),n.createElement("footer",null,n.createElement(r.A,null)))))}}}]);
//# sourceMappingURL=component---src-pages-test-js-a6940090616d76ee725e.js.map