"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[751],{6093:function(e,t,l){l.r(t),l.d(t,{Head:function(){return u}});var a=l(4506),r=l(6540),s=l(4967),n=l(3895),i=l(7528),c=l(8418),o=l(9768);const u=e=>{let{data:t}=e;var l=t.file.name,a=l.substr(0,4)+"年"+l.substr(4,2)+"月"+l.substr(6,2)+"日発売の新刊";return r.createElement(i.A,{title:a,ogpimage:t.file.childrenJson[0].ImageURL,description:a})};t.default=e=>{var t;let{data:l,location:i}=e;var u=l.file.childrenJson;const m=l.site.siteMetadata.catesafe;console.log(u);const b=u.map((e=>e.Publisher)),d=(0,a.A)(new Set(b)),f=u.map((e=>e.Category.split(","))).flat();var g=(0,a.A)(new Set(f));g=g.filter((e=>m.includes(e)));var p=l.file.name;const h=p.substr(0,4)+"年"+p.substr(4,2)+"月"+p.substr(6,2)+"日発売の新刊"||"Title";return r.createElement(r.Fragment,null,r.createElement(n.A,{location:i,title:null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title},r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},h),r.createElement("p",null,p.substr(0,4)+"年"+p.substr(4,2)+"月"+p.substr(6,2)+"日","　")),r.createElement(o.A,{book:u,catetag:g,pubtag:d}),r.createElement("hr",null),r.createElement(c.A,{title:h,url:`${l.site.siteMetadata.siteUrl}${l.file.fields.slug}`}),r.createElement("footer",null,r.createElement(s.A,null)))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-fac00aa17a193942cf3b.js.map