(self.webpackChunkSahidul_Arif=self.webpackChunkSahidul_Arif||[]).push([[678],{1357:function(){},2943:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var n=r(7294);function a(e,t,r,n){return new(r||(r=Promise))((function(a,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function o(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,o)}c((n=n.apply(e,t||[])).next())}))}function l(e,t){var r,n,a,l,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&l[0]?n.return:l[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,l[1])).done)return a;switch(n=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],n=0}finally{r=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}}function i(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,l=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=l.next()).done;)i.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=l.return)&&r.call(l)}finally{if(a)throw a.error}}return i}function c(e,t,r){if(r||2===arguments.length)for(var n,a=0,l=t.length;a<l;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}function s(e,t,r,n){for(var s=[],p=4;p<arguments.length;p++)s[p-4]=arguments[p];return a(this,void 0,void 0,(function(){var a,p,d,h,f,b;return l(this,(function(l){switch(l.label){case 0:l.trys.push([0,12,13,14]),a=i(s),p=a.next(),l.label=1;case 1:if(p.done)return[3,11];switch(typeof(d=p.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,u(e,d,t,r,n)];case 3:return l.sent(),[3,10];case 4:return[4,m(d)];case 5:return l.sent(),[3,10];case 6:return[4,d.apply(void 0,c([e,t,r,n],o(s),!1))];case 7:return l.sent(),[3,10];case 8:return[4,d];case 9:l.sent(),l.label=10;case 10:return p=a.next(),[3,1];case 11:return[3,14];case 12:return h=l.sent(),f={error:h},[3,14];case 13:try{p&&!p.done&&(b=a.return)&&b.call(a)}finally{if(f)throw f.error}return[7];case 14:return[2]}}))}))}function u(e,t,r,n,i){return a(this,void 0,void 0,(function(){var a;return l(this,(function(l){switch(l.label){case 0:return a=function(e,t){var r=o(t).slice(0);return c(c([],o(e),!1),[NaN],!1).findIndex((function(e,t){return r[t]!==e}))}(e.textContent,t),[4,p(e,c(c([],o(h(e.textContent,a)),!1),o(d(t,a)),!1),r,n,i)];case 1:return l.sent(),[2]}}))}))}function m(e){return a(this,void 0,void 0,(function(){return l(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function p(e,t,r,n,o){return a(this,void 0,void 0,(function(){var a,c,s,u,p,d,h,f,b,g,y,v;return l(this,(function(E){switch(E.label){case 0:if(a=t,o){for(c=0,s=1;s<t.length;s++)if(u=t[s-1],(p=t[s]).length>u.length||""===p){c=s;break}a=t.slice(c,t.length)}E.label=1;case 1:E.trys.push([1,6,7,8]),d=i(function(e){var t,r,n,a,o,c,s;return l(this,(function(u){switch(u.label){case 0:t=function(e){return l(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){return""===e||t.textContent.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}}))},u.label=1;case 1:u.trys.push([1,6,7,8]),r=i(e),n=r.next(),u.label=2;case 2:return n.done?[3,5]:(a=n.value,[5,t(a)]);case 3:u.sent(),u.label=4;case 4:return n=r.next(),[3,2];case 5:return[3,8];case 6:return o=u.sent(),c={error:o},[3,8];case 7:try{n&&!n.done&&(s=r.return)&&s.call(r)}finally{if(c)throw c.error}return[7];case 8:return[2]}}))}(a)),h=d.next(),E.label=2;case 2:return h.done?[3,5]:(f=h.value,b="WRITING"===f.opCode(e)?r+r*(Math.random()-.5):n+n*(Math.random()-.5),f.op(e),[4,m(b)]);case 3:E.sent(),E.label=4;case 4:return h=d.next(),[3,2];case 5:return[3,8];case 6:return g=E.sent(),y={error:g},[3,8];case 7:try{h&&!h.done&&(v=d.return)&&v.call(d)}finally{if(y)throw y.error}return[7];case 8:return[2]}}))}))}function d(e,t,r){var n=o(e).slice(0);return void 0===t&&(t=0),void 0===r&&(r=n.length),l(this,(function(e){switch(e.label){case 0:return t<r?[4,n.slice(0,++t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}function h(e,t,r){var n=o(e).slice(0);return void 0===t&&(t=0),void 0===r&&(r=n.length),l(this,(function(e){switch(e.label){case 0:return r>t?[4,n.slice(0,--r).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var f=(0,n.memo)((function(e){var t=e.sequence,r=e.repeat,a=e.className,l=e.speed,i=void 0===l?40:l,u=e.deletionSpeed,m=e.omitDeletionAnimation,p=void 0!==m&&m,d=e.wrapper,h=void 0===d?"div":d,f=e.cursor,b=void 0===f||f,g=e.style;i=Math.abs(i-100),u=u?Math.abs(u-100):i;var y,v,E,w,k,N,S=(0,n.useRef)(null),x="index-module_type__E-SaG";y=a&&a.length>0?b?"".concat(x," ").concat(a):a:b?x:"",v=(0,n.useRef)((function(){return r===1/0?s.apply(void 0,c(c([S.current,i,u,p],o(t),!1),[s],!1)):"number"==typeof r?s.apply(void 0,c([S.current,i,u,p],o(Array(1+r).fill(t).flat()),!1)):s.apply(void 0,c([S.current,i,u,p],o(t),!1)),function(){S.current}})),E=(0,n.useRef)(),w=(0,n.useRef)(!1),k=(0,n.useRef)(!1),N=o((0,n.useState)(0),2)[1],w.current&&(k.current=!0),(0,n.useEffect)((function(){return w.current||(E.current=v.current(),w.current=!0),N((function(e){return e+1})),function(){k.current&&E.current&&E.current()}}),[]);var M=h;return n.createElement(M,{style:g,className:y,ref:S})}),(function(e,t){return!0})),b=r(4340);const g=()=>n.createElement("div",{className:"intro-area"},n.createElement(b.Dx,{title:"Follow Me",social:!0,height:"320px"}),n.createElement(b.W2,null,n.createElement("div",{className:"intro"},n.createElement("div",{className:"intro-text"},n.createElement(f,{sequence:["Hello 👋!!! I am",1e3,""],speed:50,wrapper:"p",repeat:1/0}),n.createElement("h1",null,"Sahidul Arif"),n.createElement("h3",null,"Web developer"),n.createElement("br",null),n.createElement("div",{className:"action"},n.createElement(b.zx,{link:"https://github.com/sahidularif/arif.me/blob/main/src/data/file/MyResume.pdf",target:"__blank",bgColor:"#00cf5d",title:"Get Resume"}),n.createElement(b.zx,{clickEvent:!0,link:"#about",ml:"15px",title:"About Me"}))))));var y=r.p+"static/profile-f4356437756a88d366c7a4a2682dbcd0.jpg";const v=()=>n.createElement("div",{id:"about",className:"about-area"},n.createElement(b.W2,null,n.createElement(b.Dx,{side:"right",title:"About Me"}),n.createElement("div",{className:"about"},n.createElement("div",{className:"about-details"},n.createElement("p",null,"Hello! I'm Sahidul Arif, full-stack web developer with a passion for creating visually stunning and user-friendly websites. Strong knowledge of HTML, CSS, JavaScript, TypeScript, NextJs. Experience in developing interactive web pages and web applications. Knowledge of web security, SEO and cloud deployment."),n.createElement("div",{className:"about-action"},n.createElement(b.zx,{link:"https://docs.google.com/document/d/1Syb4FmNENOLwgEisymDcg2M3ZA7YY2wmFfL_pOlasDM/edit?usp=sharing",target:"_blank",bgColor:"#00cf5d",title:"Get Resume"}),n.createElement(b.zx,{clickEvent:!0,link:"#skill",ml:"15px",title:"My Skills"}))),n.createElement("div",{className:"about-image"},n.createElement("div",{className:"image"},n.createElement("img",{alt:"profile",src:y})))))),E={Web:[{name:"HTML5",percent:90},{name:"CSS3",percent:90},{name:"React",percent:80},{name:"Gatsby",percent:60},{name:"Next.JS",percent:65},{name:"Node JS",percent:70},{name:"Express JS",percent:70},{name:"MongoDB",percent:80},{name:"Oracle",percent:80}],Others:[{name:"React Native",percent:70},{name:"Redux",percent:70},{name:"GraphQL",percent:70}],Programming:[{name:"JavaScript",percent:80},{name:"Java",percent:65},{name:"C",percent:50},{name:"Php",percent:70}],Tools:[{name:"Git",percent:90},{name:"Photoshop",percent:75},{name:"Illustrator",percent:80},{name:"Firebase",percent:80},{name:"Heroku",percent:85},{name:"Gatsby",percent:70},{name:"Netlify",percent:90},{name:"Figma",percent:90}]},w={Web:[{type:"featured",name:"Renterbd",image:"https://i.ibb.co/h1H4BD2/renterbd.png",description:"A full-stack roommate find web app for find room and roommate world-wide",demo:"https://renterbd.web.app/",source:"https://github.com/sahidularif/roommate-app",tools:["React","NodeJs","Redux","Mongodb"]},{type:"featured",name:"Nobabjada-Ecommerce",image:"https://i.ibb.co/GTY6vM8/nobabjada.png",description:"A full stack e-commerce web app, where user can buying any product and have ability to review order",demo:"https://nobabjada.vercel.app/",source:"https://github.com/sahidularif/-nobabjada-ecommerce-frontend",tools:["React","TypeScript","Stripe","Redux"]},{type:"featured",name:"Pro-Marketer",image:"https://i.ibb.co/8KKXrCv/promarketer.png",description:"Built a full-stack Pro-Marketer web app that allow useer to buying a service.",demo:"https://pro-marketer-5f932.web.app/",source:"https://github.com/sahidularif/creative-agency-proMarketer-client",tools:["React","Nodejs","Firebase","Mongodb"]},{type:"featured",name:"News Portal",image:"https://i.ibb.co/WntGCgK/newsportal.png",description:"Built a Mern stack news portal that's provide world class hot news.",demo:"https://newsportal24.netlify.app/",source:"https://github.com/sahidularif/news-portal-client",tools:["React","NodeJs","Mongodb"]},{type:"featured",name:"Urban rider",image:"https://i.ibb.co/TMK4XvZ/urbanrider.png",description:"A MERN-Stack web app, where user can hire taxi or cab to going destination",demo:"https://urban-rider-44603.web.app/",source:"https://github.com/sahidularif/urban-rider",tools:["Bootstrap","Google map","React"]},{type:"featured",name:"Ema-John",image:"https://i.ibb.co/pjxdVhN/emajohn.png",description:"It's a simple Amazon like e-commerce web app, that allow user to buying, review, payment and shipping order",demo:"https://ema-john.firebaseapp.com/",source:"https://github.com/sahidularif/ema-john-simple",tools:["JavaScript","React","Firebase"]},{type:"featured",name:"Fancy Slider",image:"https://i.ibb.co/mBF4Jh5/fancy-slider.png",description:"MERN-STACK web app, where user can search picture and also can make slider by select multiple pictures",demo:"https://sahidularif.github.io/fancy-slider/",source:"https://github.com/sahidularif/fancy-slider",tools:["Bootstrap","JavaScript","Rest Api"]},{type:"featured",name:"Fancy Slider",image:"https://i.ibb.co/mBF4Jh5/fancy-slider.png",description:"MERN-STACK web app, where user can search picture and also can make slider by select multiple pictures",demo:"https://sahidularif.github.io/fancy-slider/",source:"https://github.com/sahidularif/fancy-slider",tools:["Bootstrap","JavaScript","Rest Api"]},{type:"featured",name:"Hungry Monster",image:"https://i.ibb.co/278JQFY/hungrymonster.png",description:"MERN-STACT recipe web app, where you can search your favourite recipe and you will be a good monster cooker",demo:"https://sahidularif.github.io/hungry-monster/",source:"https://github.com/sahidularif/hungry-monster/",tools:["Bootstrap","JavaScript","Rest Api"]},{type:"featured",name:"Cruise Queen",image:"https://i.ibb.co/PFv3b6f/cruisequeen.png",description:"Built a ticket based web app that allow user to buying ticker for travel.",demo:"https://sahidularif.github.io/Cruise-queen-booking-system/",source:"https://github.com/sahidularif/Cruise-queen-booking-system",tools:["Bootstrap","JavaScript"]},{type:"featured",name:"Weather Api",image:"https://i.ibb.co/dmTHq6j/weather-api.png",description:"Simple weather base web app, where you can search and find your area temperature",demo:"https://sahidularif.github.io/weather-api/index.html",source:"https://github.com/sahidularif/weather-api",tools:["JavaScript","Rest Api"]},{type:"featured",name:"Panda Ecommerce",image:"https://i.ibb.co/h1Thrj8/res-Ecommerce.png",description:"A complete fully responsive e-commerce web site",demo:"https://sahidularif.github.io/responsive-ecommerce-website/",source:"https://github.com/sahidularif/responsive-ecommerce-website",tools:["Html","Css","Bootstrap"]}]},k=()=>{const e=Object.keys(E),{0:t,1:r}=(0,n.useState)(e[0]),a=E[t];return n.createElement("div",{id:"skill",className:"skill-area"},n.createElement(b.W2,null,n.createElement(b.Dx,{title:"My Skills"}),n.createElement("div",{className:"skills"},n.createElement("ul",{className:"skill-nav"},e.map((e=>n.createElement("li",{onClick:()=>r(e),className:e===t?"active":"",key:e},e)))),n.createElement("div",{className:"skill"},a.map((e=>{let{name:t,percent:r}=e;return n.createElement("div",{key:t,className:"card"},n.createElement("h4",null,t),n.createElement("p",null,r,"%"),n.createElement("div",{style:{width:r+"%"},className:"progress-ar"}))}))))))};r(1357);var N=r(9583);var S=()=>{let e,t;const{0:r,1:a}=(0,n.useState)("More");return n.createElement("div",{className:"portfolio-action"},n.createElement(b.zx,{target:"__blank",link:"https://github.com/sahidularif",onMouseOver:()=>{clearTimeout(t),e=setTimeout((()=>{a("Show More")}),1e3)},onMouseOut:()=>{clearTimeout(e),t=setTimeout((()=>{a("More")}),2e3)},onClick:e=>{e.preventDefault(),clearTimeout(),a("Showing More..."),setTimeout((()=>{}),1e3)},title:r,mt:"15px"}))};const x=()=>{const e=Object.keys(w),{0:t,1:r}=(0,n.useState)(e[0]),a=w[t].filter((e=>"featured"===e.type)),l=w[t].filter((e=>"regular"===e.type));return n.createElement("div",{id:"portfolio",className:"portfolio-area"},n.createElement(b.W2,null,n.createElement("div",{className:"title left",style:{height:"160px"}},n.createElement("p",null,"Portfolio")),n.createElement("div",{className:"portfolios"},n.createElement("ul",{className:"portfolio-nav"},e.map((e=>n.createElement("li",{onClick:()=>r(e),className:e===t?"active":"",key:e},e)))),n.createElement("div",{className:"portfolio-items portfolios-featured"},a.map(((e,t)=>n.createElement("div",{key:t,className:"portfolio"},n.createElement("div",{className:"portfolio-img"},n.createElement("img",{alt:e.name,src:e.image})),n.createElement("div",{className:"details"},n.createElement("h4",null,n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.demo},e.name)),n.createElement("p",null,e.description),n.createElement("div",{className:"links"},n.createElement("ul",null,e.source&&n.createElement("li",null,n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.source},n.createElement(N.hJX,null))),e.demo&&n.createElement("li",null,n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.demo},n.createElement(N.CkN,null))))),n.createElement("ul",{className:"portfolio-tools"},e.tools.map((e=>n.createElement("li",{key:e},e))))))))),n.createElement("div",{className:"portfolio-items portfolios-regular"},l.map(((e,t)=>n.createElement("div",{key:t,className:"portfolio small"},n.createElement("div",{className:"details"},n.createElement("h4",null,n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.demo},e.name)),n.createElement("p",null,e.description),n.createElement("div",{className:"links"},n.createElement("ul",null,e.source&&n.createElement("li",null,n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.source},n.createElement(N.hJX,null))),e.demo&&n.createElement("li",null,n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.demo},n.createElement(N.CkN,null))))),n.createElement("ul",{className:"portfolio-tools"},e.tools.map((e=>n.createElement("li",{key:e},e))))))))),n.createElement(S,null))))},M=()=>n.createElement("div",{id:"contact",className:"contact-area"},n.createElement(b.W2,null,n.createElement(b.Dx,{side:"right",title:"Contact"}),n.createElement("div",{className:"contact"},n.createElement("div",{className:"contact-status"},n.createElement("p",null,"I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me or if you want to develope any website, please let me know. Or you can just 'say hi' to me."),n.createElement("div",null,n.createElement(b.zx,{title:"Contact Me",mt:"25px",bgColor:"#00cf5d",color:"#fff",link:"mailto:sahidularif1@gmail.com"}))),n.createElement("div",{className:"contact-details"},n.createElement("ul",null,n.createElement("li",null,n.createElement("h5",null,"Email"),n.createElement("p",null,"sahidularif1@gmail.com ",n.createElement("span",null,"(Recommended)"))),n.createElement("li",null,n.createElement("h5",null,"Address"),n.createElement("p",null,"Feni-3900, Chittagong, Bangladesh")))))));var C=()=>n.createElement(n.Fragment,null,n.createElement(b.Ar,null,n.createElement(b.pQ,{title:"Sahidul Arif"}),n.createElement(g,null),n.createElement(v,null),n.createElement(k,null),n.createElement(x,null),n.createElement(M,null)))}}]);
//# sourceMappingURL=component---src-pages-index-js-69c29a516371afdb449e.js.map