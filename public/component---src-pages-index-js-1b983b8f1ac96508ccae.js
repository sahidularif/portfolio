(self.webpackChunkSahidul_Arif=self.webpackChunkSahidul_Arif||[]).push([[678],{1357:function(){},4309:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var a=r(7294);function n(e,t,r,a){return new(r||(r=Promise))((function(n,l){function i(e){try{c(a.next(e))}catch(e){l(e)}}function o(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,o)}c((a=a.apply(e,t||[])).next())}))}function l(e,t){var r,a,n,l,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,a&&(n=2&l[0]?a.return:l[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,l[1])).done)return n;switch(a=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,a=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((n=(n=i.trys).length>0&&n[n.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){i.label=l[1];break}if(6===l[0]&&i.label<n[1]){i.label=n[1],n=l;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(l);break}n[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],a=0}finally{r=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}}function i(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],a=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,n,l=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(a=l.next()).done;)i.push(a.value)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return i}function c(e,t,r){if(r||2===arguments.length)for(var a,n=0,l=t.length;n<l;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}function s(e,t,r,a){for(var s=[],p=4;p<arguments.length;p++)s[p-4]=arguments[p];return n(this,void 0,void 0,(function(){var n,p,d,f,h,b;return l(this,(function(l){switch(l.label){case 0:l.trys.push([0,12,13,14]),n=i(s),p=n.next(),l.label=1;case 1:if(p.done)return[3,11];switch(typeof(d=p.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,u(e,d,t,r,a)];case 3:return l.sent(),[3,10];case 4:return[4,m(d)];case 5:return l.sent(),[3,10];case 6:return[4,d.apply(void 0,c([e,t,r,a],o(s),!1))];case 7:return l.sent(),[3,10];case 8:return[4,d];case 9:l.sent(),l.label=10;case 10:return p=n.next(),[3,1];case 11:return[3,14];case 12:return f=l.sent(),h={error:f},[3,14];case 13:try{p&&!p.done&&(b=n.return)&&b.call(n)}finally{if(h)throw h.error}return[7];case 14:return[2]}}))}))}function u(e,t,r,a,i){return n(this,void 0,void 0,(function(){var n;return l(this,(function(l){switch(l.label){case 0:return n=function(e,t){var r=o(t).slice(0);return c(c([],o(e),!1),[NaN],!1).findIndex((function(e,t){return r[t]!==e}))}(e.textContent,t),[4,p(e,c(c([],o(f(e.textContent,n)),!1),o(d(t,n)),!1),r,a,i)];case 1:return l.sent(),[2]}}))}))}function m(e){return n(this,void 0,void 0,(function(){return l(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function p(e,t,r,a,o){return n(this,void 0,void 0,(function(){var n,c,s,u,p,d,f,h,b,g,y,E;return l(this,(function(v){switch(v.label){case 0:if(n=t,o){for(c=0,s=1;s<t.length;s++)if(u=t[s-1],(p=t[s]).length>u.length||""===p){c=s;break}n=t.slice(c,t.length)}v.label=1;case 1:v.trys.push([1,6,7,8]),d=i(function(e){var t,r,a,n,o,c,s;return l(this,(function(u){switch(u.label){case 0:t=function(e){return l(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){return""===e||t.textContent.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}}))},u.label=1;case 1:u.trys.push([1,6,7,8]),r=i(e),a=r.next(),u.label=2;case 2:return a.done?[3,5]:(n=a.value,[5,t(n)]);case 3:u.sent(),u.label=4;case 4:return a=r.next(),[3,2];case 5:return[3,8];case 6:return o=u.sent(),c={error:o},[3,8];case 7:try{a&&!a.done&&(s=r.return)&&s.call(r)}finally{if(c)throw c.error}return[7];case 8:return[2]}}))}(n)),f=d.next(),v.label=2;case 2:return f.done?[3,5]:(h=f.value,b="WRITING"===h.opCode(e)?r+r*(Math.random()-.5):a+a*(Math.random()-.5),h.op(e),[4,m(b)]);case 3:v.sent(),v.label=4;case 4:return f=d.next(),[3,2];case 5:return[3,8];case 6:return g=v.sent(),y={error:g},[3,8];case 7:try{f&&!f.done&&(E=d.return)&&E.call(d)}finally{if(y)throw y.error}return[7];case 8:return[2]}}))}))}function d(e,t,r){var a=o(e).slice(0);return void 0===t&&(t=0),void 0===r&&(r=a.length),l(this,(function(e){switch(e.label){case 0:return t<r?[4,a.slice(0,++t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}function f(e,t,r){var a=o(e).slice(0);return void 0===t&&(t=0),void 0===r&&(r=a.length),l(this,(function(e){switch(e.label){case 0:return r>t?[4,a.slice(0,--r).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var h=(0,a.memo)((function(e){var t=e.sequence,r=e.repeat,n=e.className,l=e.speed,i=void 0===l?40:l,u=e.deletionSpeed,m=e.omitDeletionAnimation,p=void 0!==m&&m,d=e.wrapper,f=void 0===d?"div":d,h=e.cursor,b=void 0===h||h,g=e.style;i=Math.abs(i-100),u=u?Math.abs(u-100):i;var y,E,v,w,k,N,x=(0,a.useRef)(null),S="index-module_type__E-SaG";y=n&&n.length>0?b?"".concat(S," ").concat(n):n:b?S:"",E=(0,a.useRef)((function(){return r===1/0?s.apply(void 0,c(c([x.current,i,u,p],o(t),!1),[s],!1)):"number"==typeof r?s.apply(void 0,c([x.current,i,u,p],o(Array(1+r).fill(t).flat()),!1)):s.apply(void 0,c([x.current,i,u,p],o(t),!1)),function(){x.current}})),v=(0,a.useRef)(),w=(0,a.useRef)(!1),k=(0,a.useRef)(!1),N=o((0,a.useState)(0),2)[1],w.current&&(k.current=!0),(0,a.useEffect)((function(){return w.current||(v.current=E.current(),w.current=!0),N((function(e){return e+1})),function(){k.current&&v.current&&v.current()}}),[]);var C=f;return a.createElement(C,{style:g,className:y,ref:x})}),(function(e,t){return!0})),b=r(4340);const g=()=>a.createElement("div",{className:"intro-area"},a.createElement(b.Dx,{title:"Follow Me",social:!0,height:"320px"}),a.createElement(b.W2,null,a.createElement("div",{className:"intro"},a.createElement("div",{className:"intro-text"},a.createElement(h,{sequence:["Hello 👋!!! I am",1e3,""],speed:50,wrapper:"p",repeat:1/0}),a.createElement("h1",null,"Sahidul Arif"),a.createElement("h3",null,"Full-stack web developer"),a.createElement("br",null),a.createElement("div",{className:"action"},a.createElement(b.zx,{link:"https://github.com/sahidularif/arif.me/blob/main/src/data/file/MyResume.pdf",target:"__blank",bgColor:"#00cf5d",title:"Get Resume"}),a.createElement(b.zx,{clickEvent:!0,link:"#about",ml:"15px",title:"About Me"}))))));r.p;const y=()=>a.createElement("div",{id:"about",className:"about-area"},a.createElement(b.W2,null,a.createElement(b.Dx,{side:"right",title:"About Me"}),a.createElement("div",{className:"about"},a.createElement("div",{className:"about-details"},a.createElement("p",null,"Hello! I'm Sahidul Arif, full-stack web developer with a passion for creating visually stunning and user-friendly websites. Strong knowledge of HTML, CSS, JavaScript, TypeScript, NextJs. Experience in developing interactive web pages and web applications. Knowledge of web security, SEO and cloud deployment."),a.createElement("div",{className:"about-action"},a.createElement(b.zx,{link:"https://docs.google.com/document/d/1Syb4FmNENOLwgEisymDcg2M3ZA7YY2wmFfL_pOlasDM/edit?usp=sharing",target:"_blank",bgColor:"#00cf5d",title:"Get Resume"}),a.createElement(b.zx,{clickEvent:!0,link:"#skill",ml:"15px",title:"My Skills"}))),a.createElement("div",{className:"about-image"},a.createElement("div",{className:"image"},a.createElement("img",{alt:"profile",src:"https://i.ibb.co/TMK4XvZ/urbanrider.png"})))))),E={Web:[{name:"HTML5",percent:90},{name:"CSS3",percent:90},{name:"React",percent:80},{name:"Gatsby",percent:60},{name:"Next.JS",percent:65},{name:"Node JS",percent:70},{name:"Express JS",percent:70},{name:"MongoDB",percent:80},{name:"Oracle",percent:80}],Others:[{name:"React Native",percent:70},{name:"Redux",percent:70},{name:"GraphQL",percent:70}],Programming:[{name:"JavaScript",percent:80},{name:"Java",percent:65},{name:"C",percent:50},{name:"Php",percent:70}],Tools:[{name:"Git",percent:90},{name:"Photoshop",percent:75},{name:"Illustrator",percent:80},{name:"Firebase",percent:80},{name:"Heroku",percent:85},{name:"Gatsby",percent:70},{name:"Netlify",percent:90},{name:"Figma",percent:90}]};var v=r.p+"static/bioxin-23b95a961385abcb52303317335d2036.png",w=r.p+"static/cruisequeen-b2cb138d414d74a0a868c529cedaade7.png",k=r.p+"static/emajohn-3f3b77fc9feaffdab9bfff13c80d51f0.png",N=r.p+"static/fancy-slider-e0233f3d76b79166c7a800d846d42e05.png",x=r.p+"static/hungrymonster-3376a09b2a1da3a362bbacdca3ab60d7.png",S=r.p+"static/promarketer-467f655e7b356f9b4a7297e43b5799b8.png",C=r.p+"static/resEcommerce-b71eddc131da13a3f58ca4b7507399de.png";const M={Web:[{type:"featured",name:"Renterbd",image:"https://drive.google.com/file/d/1O3mCZZPnoKmxWQQcEOLyTeCjPlTKqCSX/view?usp=share_link",description:"Built a full-stack roommate find web app for searching for roommates around the world",demo:"https://renterbd.web.app/",source:"https://github.com/sahidularif/roommate-app",tools:["React","Nodejs","ExpressJs","Firebase","Mongodb","Cyclic"]},{type:"featured",name:"Nobabjada Ecommerce",image:S,description:"Built a full-stack e-commerce web app to buy gadget items from the website.",demo:"https://nobabjada.vercel.app/",source:"https://github.com/sahidularif/-nobabjada-ecommerce-frontend",tools:["React","TypeScript","Redux","Nodejs","ExpressJs","Firebase","Mongodb","Cyclic"]},{type:"featured",name:"Pro-Marketer",image:S,description:"Built a full-stack Pro-Marketer web app that allow useer to buying a service.",demo:"https://pro-marketer-5f932.web.app/",source:"https://github.com/sahidularif/creative-agency-proMarketer-client",tools:["React","Firebase","Mongodb","Heroku"]},{type:"featured",name:"Bioxin Cosmetics",image:v,description:"A full stack e-commerce web app, where user can buying any product and have ability to review order",demo:"https://bio-xin.web.app/",source:"https://github.com/sahidularif/bioxin-cosmetics",tools:["React","Firebase","Mongodb","Heroku"]},{type:"featured",name:"Urban rider",image:r.p+"static/urbanrider-b4a88f227464f43c385987bab7b0698f.png",description:"A MERN-Stack web app, where user can hire taxi or cab to going destination",demo:"https://urban-rider-44603.web.app/",source:"https://github.com/sahidularif/urban-rider",tools:["Bootstrap","Google map","React","Heroku"]},{type:"featured",name:"Ema-John",image:k,description:"It's a simple Amazon like e-commerce web app, that allow user to buying, review, payment and shipping order",demo:"https://ema-john.firebaseapp.com/",source:"https://github.com/sahidularif/ema-john-simple",tools:["JavaScript","React","Firebase"]},{type:"featured",name:"Fancy Slider",image:N,description:"MERN-STACK web app, where user can search picture and also can make slider by select multiple pictures",demo:"https://sahidularif.github.io/fancy-slider/",source:"https://github.com/sahidularif/fancy-slider",tools:["Bootstrap","JavaScript","Rest Api"]},{type:"featured",name:"Hungry Monster",image:x,description:"MERN-STACT recipe web app, where you can search your favourite recipe and you will be a good monster cooker",demo:"https://sahidularif.github.io/hungry-monster/",source:"https://github.com/sahidularif/hungry-monster/",tools:["Bootstrap","JavaScript","Rest Api"]},{type:"featured",name:"Cruise Queen",image:w,description:"Built a ticket based web app that allow user to buying ticker for travel.",demo:"https://sahidularif.github.io/Cruise-queen-booking-system/",source:"https://github.com/sahidularif/Cruise-queen-booking-system",tools:["Bootstrap","JavaScript"]},{type:"featured",name:"Weather Api",image:r.p+"static/weather-api-55ad6bd3218b0bee2912cff88912878f.png",description:"Simple weather base web app, where you can search and find your area temperature",demo:"https://sahidularif.github.io/weather-api/index.html",source:"https://github.com/sahidularif/weather-api",tools:["JavaScript","Rest Api"]},{type:"featured",name:"Urban rider",image:C,description:"A complete fully responsive e-commerce web site",demo:"https://sahidularif.github.io/responsive-ecommerce-website/",source:"https://github.com/sahidularif/responsive-ecommerce-website",tools:["Bootstrap"]}]},R=()=>{const e=Object.keys(E),{0:t,1:r}=(0,a.useState)(e[0]),n=E[t];return a.createElement("div",{id:"skill",className:"skill-area"},a.createElement(b.W2,null,a.createElement(b.Dx,{title:"My Skills"}),a.createElement("div",{className:"skills"},a.createElement("ul",{className:"skill-nav"},e.map((e=>a.createElement("li",{onClick:()=>r(e),className:e===t?"active":"",key:e},e)))),a.createElement("div",{className:"skill"},n.map((e=>{let{name:t,percent:r}=e;return a.createElement("div",{key:t,className:"card"},a.createElement("h4",null,t),a.createElement("p",null,r,"%"),a.createElement("div",{style:{width:r+"%"},className:"progress-ar"}))}))))))};r(1357);var _=r(9583);var A=()=>{let e,t;const{0:r,1:n}=(0,a.useState)("More");return a.createElement("div",{className:"portfolio-action"},a.createElement(b.zx,{target:"__blank",link:"https://github.com/sahidularif",onMouseOver:()=>{clearTimeout(t),e=setTimeout((()=>{n("Show More")}),1e3)},onMouseOut:()=>{clearTimeout(e),t=setTimeout((()=>{n("More")}),2e3)},onClick:e=>{e.preventDefault(),clearTimeout(),n("Showing More..."),setTimeout((()=>{}),1e3)},title:r,mt:"15px"}))};const T=()=>{const e=Object.keys(M),{0:t,1:r}=(0,a.useState)(e[0]),n=M[t].filter((e=>"featured"===e.type)),l=M[t].filter((e=>"regular"===e.type));return a.createElement("div",{id:"portfolio",className:"portfolio-area"},a.createElement(b.W2,null,a.createElement("div",{className:"title left",style:{height:"160px"}},a.createElement("p",null,"Portfolio")),a.createElement("div",{className:"portfolios"},a.createElement("ul",{className:"portfolio-nav"},e.map((e=>a.createElement("li",{onClick:()=>r(e),className:e===t?"active":"",key:e},e)))),a.createElement("div",{className:"portfolio-items portfolios-featured"},n.map(((e,t)=>a.createElement("div",{key:t,className:"portfolio"},a.createElement("div",{className:"portfolio-img"},a.createElement("img",{alt:e.name,src:e.image})),a.createElement("div",{className:"details"},a.createElement("h4",null,a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.demo},e.name)),a.createElement("p",null,e.description),a.createElement("div",{className:"links"},a.createElement("ul",null,e.source&&a.createElement("li",null,a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.source},a.createElement(_.hJX,null))),e.demo&&a.createElement("li",null,a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.demo},a.createElement(_.CkN,null))))),a.createElement("ul",{className:"portfolio-tools"},e.tools.map((e=>a.createElement("li",{key:e},e))))))))),a.createElement("div",{className:"portfolio-items portfolios-regular"},l.map(((e,t)=>a.createElement("div",{key:t,className:"portfolio small"},a.createElement("div",{className:"details"},a.createElement("h4",null,a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.demo},e.name)),a.createElement("p",null,e.description),a.createElement("div",{className:"links"},a.createElement("ul",null,e.source&&a.createElement("li",null,a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.source},a.createElement(_.hJX,null))),e.demo&&a.createElement("li",null,a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.demo},a.createElement(_.CkN,null))))),a.createElement("ul",{className:"portfolio-tools"},e.tools.map((e=>a.createElement("li",{key:e},e))))))))),a.createElement(A,null))))},J=()=>a.createElement("div",{id:"contact",className:"contact-area"},a.createElement(b.W2,null,a.createElement(b.Dx,{side:"right",title:"Contact"}),a.createElement("div",{className:"contact"},a.createElement("div",{className:"contact-status"},a.createElement("p",null,"I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me or if you want to develope any website, please let me know. Or you can just 'say hi' to me."),a.createElement("div",null,a.createElement(b.zx,{title:"Contact Me",mt:"25px",bgColor:"#00cf5d",color:"#fff",link:"mailto:sahidularif1@gmail.com"}))),a.createElement("div",{className:"contact-details"},a.createElement("ul",null,a.createElement("li",null,a.createElement("h5",null,"Email"),a.createElement("p",null,"sahidularif1@gmail.com ",a.createElement("span",null,"(Recommended)"))),a.createElement("li",null,a.createElement("h5",null,"Address"),a.createElement("p",null,"Feni-3900, Chittagong, Bangladesh")))))));var j=()=>a.createElement(a.Fragment,null,a.createElement(b.Ar,null,a.createElement(b.pQ,{title:"Sahidul Arif"}),a.createElement(g,null),a.createElement(y,null),a.createElement(R,null),a.createElement(T,null),a.createElement(J,null)))}}]);
//# sourceMappingURL=component---src-pages-index-js-1b983b8f1ac96508ccae.js.map