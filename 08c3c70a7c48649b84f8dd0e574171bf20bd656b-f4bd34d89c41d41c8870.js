(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[206],{9768:function(e,t,a){"use strict";a.d(t,{A:function(){return c}});var n=a(4506),r=a(6540),i=a(9764),l=a.n(i);var s=e=>{let{book:t}=e;var a,n;for(let r=0;r<t.length;r++)a=t[r].ImageURL.replace(/_SL500_/,"_SL160_"),n=t[r].ImageURL.replace(/_SL500_/,"_SL75_"),t[r].image_m=a,t[r].image_s=n;const i=Array.from(new Map(t.map((e=>[e.Asin,e]))).values());return r.createElement("div",{id:"book"},i.map((e=>r.createElement("div",{key:e.Asin},r.createElement("a",{className:"amazon-card-container",target:"_blank",rel:"noopener noreferrer",href:e.URL},r.createElement("div",{className:"amazon-card-body"},r.createElement("div",{className:"amazon-card-title"},e.Title),r.createElement("div",{className:"amazon-card-domain"},"価格：",(null==e?void 0:e.Price)||"なし","円、ポイント：",e.Points,"、",e.Contributor,"、出版社：",e.Publisher,"、カテゴリー：",e.Category)),r.createElement("div",{className:"amazon-card-image-container"},r.createElement("img",{className:"amazon-card-image",srcSet:`${e.image_s} 320w, ${e.image_m} 640w, ${e.ImageURL} `,src:e.image_s,sizes:"(max-width:1280px) 50vw, 1280px",loading:"lazy",alt:e.Title})))))))};var o=e=>{let{itemsPerPage:t,items:a}=e;function n(e){let{currentItems:t}=e;return r.createElement(r.Fragment,null,r.createElement(s,{book:t}))}const{0:i,1:o}=(0,r.useState)(0),c=i+t,u=a.slice(i,c),p=Math.ceil(a.length/t),g=e=>{const n=e.selected*t%a.length;console.log(`User requested page number ${e.selected}, which is offset ${n}`),o(n)};return r.createElement(r.Fragment,null,r.createElement(l(),{breakLabel:"...",nextLabel:"次へ>",onPageChange:g,pageRangeDisplayed:3,pageCount:p,previousLabel:"<前へ",renderOnZeroPageCount:null,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}),r.createElement(n,{currentItems:u}),r.createElement(l(),{breakLabel:"...",nextLabel:"次へ>",onPageChange:g,pageRangeDisplayed:3,pageCount:p,previousLabel:"<前へ",renderOnZeroPageCount:null,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))};var c=e=>{let{book:t,catetag:a,pubtag:i}=e;const{0:l,1:s}=(0,r.useState)(t),{0:c,1:u}=(0,r.useState)();console.log(t);const p=a,g=e=>{if("all"===e)return void s(t);const a=t.filter((t=>{const a=t.Category.split(",");return[].concat((0,n.A)(a),(0,n.A)(e)).filter((t=>a.includes(t)&&e.includes(t))).length>0}));s(a)},d=i||"",m=e=>{if("all"===e)return void s(t);const a=t.filter((t=>{const a=t.Publisher.split(",");return[].concat((0,n.A)(a),(0,n.A)(e)).filter((t=>a.includes(t)&&e.includes(t))).length>0}));s(a)},f=e=>{u(e.target.value),(e=>{if(""===e)s(t);else{const a=t.filter((t=>Object.values(t).filter((t=>null!=t&&-1!==t.toString().toUpperCase().indexOf(e.toString().toUpperCase()))).length>0));s(a)}})(e.target.value)};return 0===d.length?r.createElement(r.Fragment,null,r.createElement("details",null," ",r.createElement("summary",null,r.createElement("strong",null,"クリックしてカテゴリー選択ボタンの表示")),r.createElement("div",null,r.createElement("h4",null,"クリックしてカテゴリーで絞り込みが可能"),r.createElement("button",{className:"categorybutton",onClick:()=>g("all")},"全て"),p.map((e=>r.createElement("button",{className:"categorybutton",onClick:()=>g(e)},e))))),r.createElement("div",null,r.createElement("h4",null,"フリーキーワード検索"),r.createElement("input",{type:"text",value:c,onChange:f})),r.createElement(o,{itemsPerPage:10,items:l})):r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("h4",null,"クリックしてカテゴリーと出版社で絞り込みが可能"),r.createElement("details",null," ",r.createElement("summary",null,r.createElement("strong",null,"クリックしてカテゴリー選択ボタンの表示")),r.createElement("p",null,"カテゴリー： ",r.createElement("button",{className:"categorybutton",onClick:()=>g("all")},"全て"),p.map((e=>r.createElement("button",{className:"categorybutton",onClick:()=>g(e)},e))))),r.createElement("details",null," ",r.createElement("summary",null,r.createElement("strong",null,"クリックして出版社選択ボタンの表示")),r.createElement("p",null,"出版社：",r.createElement("button",{className:"categorybutton",onClick:()=>m("all")},"全て"),d.map((e=>r.createElement("button",{className:"categorybutton",onClick:()=>m(e)},e)))))),r.createElement("div",null,r.createElement("h4",null,"フリーキーワード検索"),r.createElement("input",{type:"text",value:c,onChange:f})),r.createElement(o,{itemsPerPage:10,items:l}))}},9764:function(e,t,a){var n;n=e=>(()=>{var t={703:(e,t,a)=>{"use strict";var n=a(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,i,l){if(l!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}},697:(e,t,a)=>{e.exports=a(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:t=>{"use strict";t.exports=e}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{default:()=>C});var e=n(98),t=n.n(e),a=n(697),i=n.n(a);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}var s=function(e){var a=e.pageClassName,n=e.pageLinkClassName,r=e.page,i=e.selected,s=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,g=e.extraAriaContext,d=e.pageLabelBuilder,m=e.rel,f=e.ariaLabel||"Page "+r+(g?" "+g:""),b=null;return i&&(b="page",f=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+s:s,void 0!==n?void 0!==o&&(n=n+" "+o):n=o),t().createElement("li",{className:a},t().createElement("a",l({rel:m,role:p?void 0:"button",className:n,href:p,tabIndex:i?"-1":"0","aria-label":f,"aria-current":b,onKeyPress:u},c(u)),d(r)))};s.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};const o=s;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}var u=function(e){var a=e.breakLabel,n=e.breakAriaLabel,r=e.breakClassName,i=e.breakLinkClassName,l=e.breakHandler,s=e.getEventListener,o=r||"break";return t().createElement("li",{className:o},t().createElement("a",c({className:i,role:"button",tabIndex:"0","aria-label":n,onKeyPress:l},s(l)),a))};u.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};const p=u;function g(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(s,e);var a,n,r,i,l=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(i){var a=v(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(this,e)});function s(e){var a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),h(b(a=l.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;a.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})})),h(b(a),"handleNextPage",(function(e){var t=a.state.selected,n=a.props.pageCount;a.handleClick(e,null,t<n-1?t+1:void 0,{isNext:!0})})),h(b(a),"handlePageSelected",(function(e,t){if(a.state.selected===e)return a.callActiveCallback(e),void a.handleClick(t,null,void 0,{isActive:!0});a.handleClick(t,null,e)})),h(b(a),"handlePageChange",(function(e){a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),h(b(a),"getEventListener",(function(e){return h({},a.props.eventListener,e)})),h(b(a),"handleClick",(function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.isPrevious,l=void 0!==i&&i,s=r.isNext,o=void 0!==s&&s,c=r.isBreak,u=void 0!==c&&c,p=r.isActive,g=void 0!==p&&p;e.preventDefault?e.preventDefault():e.returnValue=!1;var d=a.state.selected,m=a.props.onClick,f=n;if(m){var b=m({index:t,selected:d,nextSelectedPage:n,event:e,isPrevious:l,isNext:o,isBreak:u,isActive:g});if(!1===b)return;Number.isInteger(b)&&(f=b)}void 0!==f&&a.handlePageChange(f)})),h(b(a),"handleBreakClick",(function(e,t){var n=a.state.selected;a.handleClick(t,e,n<e?a.getForwardJump():a.getBackwardJump(),{isBreak:!0})})),h(b(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),h(b(a),"callActiveCallback",(function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})})),h(b(a),"getElementPageRel",(function(e){var t=a.state.selected,n=a.props,r=n.nextPageRel,i=n.prevPageRel,l=n.selectedPageRel;return t-1===e?i:t===e?l:t+1===e?r:void 0})),h(b(a),"pagination",(function(){var e=[],n=a.props,r=n.pageRangeDisplayed,i=n.pageCount,l=n.marginPagesDisplayed,s=n.breakLabel,o=n.breakClassName,c=n.breakLinkClassName,u=n.breakAriaLabels,g=a.state.selected;if(i<=r)for(var d=0;d<i;d++)e.push(a.getPageElement(d));else{var m=r/2,f=r-m;g>i-r/2?m=r-(f=i-g):g<r/2&&(f=r-(m=g));var b,v,h=function(e){return a.getPageElement(e)},y=[];for(b=0;b<i;b++){var C=b+1;if(C<=l)y.push({type:"page",index:b,display:h(b)});else if(C>i-l)y.push({type:"page",index:b,display:h(b)});else if(b>=g-m&&b<=g+(0===g&&r>1?f-1:f))y.push({type:"page",index:b,display:h(b)});else if(s&&y.length>0&&y[y.length-1].display!==v&&(r>0||l>0)){var P=b<g?u.backward:u.forward;v=t().createElement(p,{key:b,breakAriaLabel:P,breakLabel:s,breakClassName:o,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,b),getEventListener:a.getEventListener}),y.push({type:"break",index:b,display:v})}}y.forEach((function(t,a){var n=t;"break"===t.type&&y[a-1]&&"page"===y[a-1].type&&y[a+1]&&"page"===y[a+1].type&&y[a+1].index-y[a-1].index<=2&&(n={type:"page",index:t.index,display:h(t.index)}),e.push(n.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:n},a}return a=s,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext,r=e.pageCount,i=e.forcePage;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(r)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(r,"). Did you forget a Math.ceil()?")),void 0!==t&&t>r-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(r-1,").")),void 0!==i&&i>r-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(r-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount,r=t.hrefAllControls;if(a)return r||e>=0&&e<n?a(e+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var a=this.state.selected,n=this.props,r=n.pageClassName,i=n.pageLinkClassName,l=n.activeClassName,s=n.activeLinkClassName,c=n.extraAriaContext,u=n.pageLabelBuilder;return t().createElement(o,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,rel:this.getElementPageRel(e),pageClassName:r,pageLinkClassName:i,activeClassName:l,activeLinkClassName:s,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var a=this.props,n=a.disabledClassName,r=a.disabledLinkClassName,i=a.pageCount,l=a.className,s=a.containerClassName,o=a.previousLabel,c=a.previousClassName,u=a.previousLinkClassName,p=a.previousAriaLabel,d=a.prevRel,f=a.nextLabel,b=a.nextClassName,v=a.nextLinkClassName,h=a.nextAriaLabel,y=a.nextRel,C=this.state.selected,P=0===C,k=C===i-1,L="".concat(g(c)).concat(P?" ".concat(g(n)):""),N="".concat(g(b)).concat(k?" ".concat(g(n)):""),E="".concat(g(u)).concat(P?" ".concat(g(r)):""),x="".concat(g(v)).concat(k?" ".concat(g(r)):""),O=P?"true":"false",w=k?"true":"false";return t().createElement("ul",{className:l||s,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:L},t().createElement("a",m({className:E,href:this.getElementHref(C-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":O,"aria-label":p,rel:d},this.getEventListener(this.handlePreviousPage)),o)),this.pagination(),t().createElement("li",{className:N},t().createElement("a",m({className:x,href:this.getElementHref(C+1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":w,"aria-label":h,rel:y},this.getEventListener(this.handleNextPage)),f)))}}])&&function(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),s}(e.Component);h(y,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),h(y,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const C=y})(),r})(),e.exports=n(a(6540))}}]);
//# sourceMappingURL=08c3c70a7c48649b84f8dd0e574171bf20bd656b-f4bd34d89c41d41c8870.js.map