(self.webpackChunkSahidul_Arif=self.webpackChunkSahidul_Arif||[]).push([[351],{4852:function(e){"use strict";e.exports=Object.assign},4340:function(e,t,r){"use strict";r.d(t,{zx:function(){return Se},W2:function(){return Ee},Ar:function(){return Oe},pQ:function(){return be},Dx:function(){return Ae}});var n,o,a,i,l=r(7294),c=r(5697),u=r.n(c),s=r(3524),f=r.n(s),p=r(9590),d=r.n(p),m=r(4852),h=r.n(m),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",T="href",C="http-equiv",O="innerHTML",A="itemprop",S="name",k="property",L="rel",j="src",P="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",M="defer",I="encodeSpecialCharacters",R="onChangeClientState",_="titleTemplate",B=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],q="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(e){var t=X(e,v.TITLE),r=X(e,_);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,N);return t||n||void 0},V=function(e){return X(e,R)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],c=l.toLowerCase();-1===t.indexOf(c)||r===L&&"canonical"===e[r].toLowerCase()||c===L&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(l)||l!==O&&l!==w&&l!==A||(r=l)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var l=a[i],c=h()({},n[l],o[l]);n[l]=c}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},G=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){G(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:r.g.requestAnimationFrame||G,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ce(v.BODY,n),ce(v.HTML,o),le(f,p);var d={baseTag:ue(v.BASE,r),linkTags:ue(v.LINK,a),metaTags:ue(v.META,i),noscriptTags:ue(v.NOSCRIPT,l),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),c(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(v.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(q),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===o.indexOf(c)&&o.push(c);var s=a.indexOf(c);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(q):r.getAttribute(q)!==i.join(",")&&r.setAttribute(q,i.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(q,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[x[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[q]=!0,o=fe(r,n),[l.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=se(r),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[q]=!0,n);return Object.keys(t).forEach((function(e){var r=x[e]||e;if(r===O||r===w){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),l.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(v.BASE,t,n),bodyAttributes:pe(y,r,n),htmlAttributes:pe(g,o,n),link:pe(v.LINK,a,n),meta:pe(v.META,i,n),noscript:pe(v.NOSCRIPT,l,n),script:pe(v.SCRIPT,c,n),style:pe(v.STYLE,u,n),title:pe(v.TITLE,{title:f,titleAttributes:p},n)}},me=f()((function(e){return{baseTag:$([T,P],e),bodyAttributes:Z(y,e),defer:X(e,M),encode:X(e,I),htmlAttributes:Z(g,e),linkTags:J(v.LINK,[L,T],e),metaTags:J(v.META,[S,E,C,k,A],e),noscriptTags:J(v.NOSCRIPT,[O],e),onChangeClientState:V(e),scriptTags:J(v.SCRIPT,[j,O],e),styleTags:J(v.STYLE,[w],e),title:Q(e),titleAttributes:Z(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),he=(o=me,i=a=function(e){function t(){return Y(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[z({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return z({},o,((t={})[n.type]=i,t.titleAttributes=z({},a),t));case v.BODY:return z({},o,{bodyAttributes:z({},a)});case v.HTML:return z({},o,{htmlAttributes:z({},a)})}return z({},o,((r={})[n.type]=z({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=z({},t);return Object.keys(e).forEach((function(t){var n;r=z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return l.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(U(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=z({},r);return t&&(n=this.mapChildrenToProps(t,n)),l.createElement(o,n)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(l.Component),a.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ye=he,ge=r(1883);function be(e){let{description:t,lang:r,meta:n,title:o}=e;const{site:a}=(0,ge.useStaticQuery)("63159454"),i=t||a.siteMetadata.description;return l.createElement(ye,{htmlAttributes:{lang:r},title:o,titleTemplate:"%s | "+a.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"675"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(n)})}be.defaultProps={lang:"bn",meta:[],description:""};var ve=r(9583);const Ee=e=>{let{children:t,padding:r}=e;return l.createElement("div",{style:{padding:r},className:"container"},t)},we=()=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 185 208.4"},l.createElement("path",{fill:"#00cf5d",d:"M 60.547 0 L 78.906 0 L 139.453 132.813 L 96.875 132.813 L 90.43 115.234 L 49.023 115.234 L 42.578 132.813 L 0 132.813 L 60.547 0 Z M 79.688 85.938 L 69.727 58.984 L 59.766 85.938 L 79.688 85.938 Z"})),Te=()=>{const{0:e,1:t}=(0,l.useState)(!1),r=(0,l.useRef)();if("undefined"!=typeof window){let e=window.pageYOffset;window.addEventListener("scroll",(()=>{const n=window.pageYOffset,o=e-n,{current:a}=r;t(!1),n>100?a.classList.add("compaq"):a.classList.remove("compaq"),o<0?a.classList.add("hide"):a.classList.remove("hide"),e=n}))}const n=e=>{e.preventDefault();const r=e.target.hash,n=document.querySelector(r).offsetTop;t(!1),"undefined"!=typeof window&&window.scrollTo({top:n,left:0,behavior:"smooth"})};return l.createElement("header",{ref:r},l.createElement(Ee,{padding:"25px 25px"},l.createElement("div",{className:"header"},l.createElement("div",{className:"logo"},l.createElement("h1",null,l.createElement(ge.Link,{to:"/"},l.createElement(we,null)))),l.createElement("div",{onClick:()=>t(!e),className:"mobile-nav"},l.createElement(ve.Fm7,null)),l.createElement("ul",{className:"menubar "+(e?"mobilenav-activate":"")},l.createElement("li",null,l.createElement("a",{onClick:n,href:"#about"},"About")),l.createElement("li",null,l.createElement("a",{onClick:n,href:"#skill"},"Skill")),l.createElement("li",null,l.createElement("a",{onClick:n,href:"#portfolio"},"Portfolio")),l.createElement("li",null,l.createElement("a",{onClick:n,href:"#contact"},"Contact")),l.createElement("li",null,l.createElement("a",{target:"__blank",rel:"noopener noreferrer",href:"https://sahidularif1.medium.com/"},"Blog")),l.createElement("li",null,l.createElement("a",{className:"btn-download",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/document/d/1Syb4FmNENOLwgEisymDcg2M3ZA7YY2wmFfL_pOlasDM/edit?usp=sharing"},"Resume"))))))};Te.defaultProps={siteTitle:""};const Ce=()=>{const e=e=>{e.preventDefault();const t=e.target.hash,r=document.querySelector(t).offsetTop;"undefined"!=typeof window&&window.scrollTo({top:r,left:0,behavior:"smooth"})};return l.createElement("footer",{className:"footer-area"},l.createElement(Ee,{padding:"50px 25px"},l.createElement("div",{className:"footer"},l.createElement("div",{className:"language"},l.createElement("ul",{className:"menubar"},l.createElement("li",null,l.createElement("a",{onClick:e,href:"#about"},"About")),l.createElement("li",null,l.createElement("a",{onClick:e,href:"#skill"},"Skill")),l.createElement("li",null,l.createElement("a",{onClick:e,href:"#portfolio"},"Portfolio")),l.createElement("li",null,l.createElement("a",{target:"blank",rel:"noopener noreferrer",href:"https://sahidularif1.medium.com/"},"Blog")))),l.createElement("div",{className:"copyright"},l.createElement("ul",{className:"github"},l.createElement("li",null,l.createElement("a",{target:"blank",rel:"noopener noreferrer",href:"https://github.com/sahidularif/arif.me"},l.createElement("p",null,l.createElement(ve.QJe,null)," Star"))),l.createElement("li",null,l.createElement("a",{target:"blank",rel:"noopener noreferrer",href:"https://github.com/sahidularif/arif.me"},l.createElement("p",null,l.createElement(ve.FEF,null)," Fork")))),l.createElement("p",null,"By Me"," ",l.createElement("span",{onClick:e=>{e.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})}},l.createElement(ve.$Pg,null)))))))},Oe=e=>{let{children:t}=e;const r=(0,ge.useStaticQuery)("3649515864");return l.createElement(l.Fragment,null,l.createElement(Te,{siteTitle:r.site.siteMetadata.title}),l.createElement("div",{style:{}},l.createElement("main",null,t),l.createElement(Ce,null)))},Ae=e=>{let{title:t,social:r,side:n,height:o}=e;return l.createElement("div",{style:{height:o},className:"title "+n+" "+(r?"social":"")},r&&l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{target:"blank",rel:"any",href:"https://github.com/sahidularif/"},l.createElement(ve.hJX,null))),l.createElement("li",null,l.createElement("a",{target:"blank",rel:"any",href:"https://www.linkedin.com/in/sahidul-arif-761196162/"},l.createElement(ve.BUd,null))),l.createElement("li",null,l.createElement("a",{target:"blank",rel:"any",href:"https://medium.com/@sahidularif1"},l.createElement(ve.Cv5,null)))),l.createElement("p",null,t))};Ae.defaultProps={side:"left",height:"160px"};const Se=e=>{let{title:t,link:r,target:n,clickEvent:o,onMouseOver:a,onMouseOut:i,color:c,bgColor:u,borderColor:s,mt:f,mb:p,ml:d,mr:m}=e;return l.createElement("a",{style:{marginTop:f,marginBottom:p,marginLeft:d,marginRight:m,color:c,borderColor:s,backgroundColor:u},target:n,onClick:o&&(e=>{e.preventDefault();const t=e.target.hash,r=document.querySelector(t).offsetTop;window.scrollTo({top:r,left:0,behavior:"smooth"})}),onMouseOver:a,onMouseOut:i,rel:n?"noopener noreferrer":"",className:"btn",href:r},t)};Se.defaultProps={title:"Button",link:"https://zonayed.me",target:"",marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,color:"rgba(255, 255, 255, 0.85)",bgColor:"transparent",borderColor:"#00cf5d"}},9590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,c,u,s;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!a(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((l=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!a(e[u[c]],i[u[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function u(e){return function(t){return n.createElement(s,i({attr:i({},e.attr)},t),c(e.child))}}function s(e){var t=function(t){var r,o=e.attr,a=e.size,c=e.title,u=l(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},3524:function(e,t,r){"use strict";var n,o=r(7294),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",l),f}}}}]);
//# sourceMappingURL=commons-6b96c89ba2e321ffbede.js.map