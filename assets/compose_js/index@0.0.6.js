/**
 * @date 2023/09/14
 * @author coderxst
 * @excludes friend.js author_tags.js
 * @license MIT
 */
(()=>{const e={getBase64:e=>new Promise(((t,n)=>{window.URL=window.URL||window.webkitURL;const s=new XMLHttpRequest;s.open("get",e,!0),s.responseType="blob",s.onload=function(){if(200==this.status){const e=this.response,n=new FileReader;n.onloadend=function(e){const n=e.target.result;t(n)},n.readAsDataURL(e)}else n()},s.send()})),throttle(e,t=250){let n=null;return function(...s){null==n&&(e.apply(this,s),n=setTimeout((()=>{clearTimeout(n),n=null}),t))}},bool(e){if("true"===e)return!0;if("false"===e)return!1;throw new Error("参数错误, 只能是字符串类型的'true'或者'false'")},chunk(e,t=1){const n=[];for(let s=0;s<e.length;s+=t)n.push(e.slice(s,s+t));return n}},t={windowTitle:"美化窗口",preferenceSectionTitle:"一、显示偏好",themeColorSectionTitle:"二、主题色设置",fontFamilySectionTitle:"三、字体设置",backgroundSectionTitle:"四、背景设置",backgroundEl:document.getElementById("web_bg"),cardOpacity:70,backgroundFilterConfig:{enable:!0,inputConfig:{blurRadius:17,saturation:100,contrastRatios:100}},effectControlList:[{id:"starrySky",name:"星空特效(夜间模式)",enable:!1,eventFn(e){console.log(e.target)}},{id:"neonLamp",name:"霓虹彩灯(夜间模式)",enable:!1,eventFn(e){console.log(e.target)}},{id:"fps",name:"帧率检测(默认开启)",enable:!0,eventFn(e){console.log(e.target)}},{id:"snow",name:"雪花特效(白天模式)",enable:!1,eventFn(e){console.log(e.target)}},{id:"rightWidget",name:"右侧部件(默认开启)",enable:!0,eventFn(e){console.log(e.target)}},{id:"topPermanent",name:"顶栏常驻(默认开启)",enable:!0,eventFn(e){console.log(e.target)}},{id:"asideDisplay",name:"侧栏显隐(默认开启)",enable:!0,eventFn(e){console.log(e.target)}},{id:"asidePosition",name:"侧栏位置(默认右边)",enable:!0,eventFn(e){console.log(e.target)}}],effectControlListColumn:2,themeColor:{activeIndex:-1,colorList:["#f05a5a","#e59642","#c2ce5a","#39ccc1","#5acd82","#66ccff","#425aef","#61649f","#cd5ac3","#935acd","#ee709c","#9d9d9d"]},fontFamily:{activeIndex:-1,fontFamilyList:["宋体","微软雅黑","黑体","仿宋","楷体","隶书","幼圆","华文行楷","华文宋体","华文仿宋","华文楷体"]},backgroundList:[{title:"1. 精选",subtitle:"查看精选背景",content:[{title:"精选照片",url:"https://bu.dusays.com/2023/09/07/64f978116e011.jpg"},{title:"精选照片",url:"https://bu.dusays.com/2023/09/07/64f9780e737b6.jpg"},{title:"精选照片",url:"https://bu.dusays.com/2023/09/07/64f9780701ecb.jpg"},{title:"精选照片",url:"https://bu.dusays.com/2023/09/07/64f9780193ff7.jpg"},{title:"精选照片",url:"https://bu.dusays.com/2023/09/07/64f977facaefe.jpg"},{title:"精选照片",url:"https://bu.dusays.com/2023/09/07/64f977f4dfe95.jpg"},{title:"精选照片",url:"https://bu.dusays.com/2023/09/07/64f977eb14b6e.jpg"},{title:"精选照片",url:"https://bu.dusays.com/2023/09/07/64f977e1348cf.jpg"},{title:"精选照片",url:"https://bu.dusays.com/2023/09/07/64f977bb72033.jpg"},{title:"精选照片",url:"https://bu.dusays.com/2023/09/07/64f977b5f2cd9.jpg"},{title:"精选照片",url:"https://bu.dusays.com/2023/09/07/64f977b115dc6.jpg"},{title:"精选照片",url:"https://bu.dusays.com/2023/09/07/64f977ae0dbf9.jpg"}]},{title:"2. 风景",subtitle:"查看风景背景",content:[{title:"风景照片",url:"https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=800"},{title:"风景照片",url:"https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=800"},{title:"风景照片",url:"https://images.pexels.com/photos/1382393/pexels-photo-1382393.jpeg?auto=compress&cs=tinysrgb&w=800"},{title:"风景照片",url:"https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&w=800"},{title:"风景照片",url:"https://images.pexels.com/photos/3802075/pexels-photo-3802075.jpeg?auto=compress&cs=tinysrgb&w=800"},{title:"风景照片",url:"https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=800"},{title:"风景照片",url:"https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800"},{title:"风景照片",url:"https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?auto=compress&cs=tinysrgb&w=800"},{title:"风景照片",url:"https://images.pexels.com/photos/2541310/pexels-photo-2541310.jpeg?auto=compress&cs=tinysrgb&w=800"},{title:"风景照片",url:"https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=800"},{title:"风景照片",url:"https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg?auto=compress&cs=tinysrgb&w=800"},{title:"风景照片",url:"https://images.pexels.com/photos/1044990/pexels-photo-1044990.jpeg?auto=compress&cs=tinysrgb&w=800"}]}]};document.documentElement.classList.contains("windows")&&new class{#e=null;#t=null;#n=!0;#s=!1;#o=!1;#i={width:"880px",height:"500px"};#a={width:"100vw",height:"100vh"};#r=[];constructor(e){this.#e=e,this.#t=document.createElement("div"),this.#t.id="beautify-the-window",this.#c()}#l(){const e=document.createElement("div");e.classList.add("window-title");const t=document.createElement("div");t.classList.add("btns");const n=[{classList:["btn","close-btn"],innerText:"x",title:"关闭窗口",eventHandleFn:this.handleCloseClick},{classList:["btn","scale-btn"],innerText:"口",title:"最大(恢复)化窗口",eventHandleFn:this.handleScaleClick},{classList:["btn","min-btn"],innerText:"一",title:"最小化窗口",eventHandleFn:this.handleMinClick}],s=e=>{"string"==typeof e.classList&&(e.classList=[e.classList]);const t=document.createElement("span");return t.classList.add(...e.classList),t.innerText=e.innerText,t.title=e.title,t.addEventListener("click",(t=>{e.eventHandleFn.call(this,t)})),t};return n.forEach((e=>{const n=s(e);t.append(n)})),e.append(this.#e.windowTitle,t),e}handleMinClick(){const e=this.#t.querySelector(".min-btn");let t=0;this.#o?(t=1,this.#t.classList.remove("min-window")):(t=0,this.#t.classList.add("min-window")),e.style.transform=`scale(${t})`,e.style.opacity=`${t}`,this.#o=!this.#o}handleScaleClick(){this.#o?this.handleMinClick():(this.#s?(this.#t.style.width=this.#i.width,this.#t.style.height=this.#i.height):(this.#t.style.width=this.#a.width,this.#t.style.height=this.#a.height),this.#s=!this.#s)}handleCloseClick(){this.#n?(this.#t.style.transform="scale(1) translate(-50%, -50%)",this.#t.style.opacity=1,this.#o&&this.handleMinClick()):(this.#t.style.transform="scale(0) translate(-50%, -50%)",this.#t.style.opacity=0),this.#n=!this.#n}#d(){const e=document.createElement("div");e.classList.add("window-content");const t=this.#u(),n=this.#m(),s=this.#h(),o=this.#p();return e.append(t,n,s,o),e}#u(){const t=document.createElement("div");t.classList.add("preference-section");const{preferenceSectionTitle:n}=this.#e,s=`<h3 class="section-title">${n}</h3>`;return t.innerHTML=s+(()=>{let e=this.#e.cardOpacity;const n=`\n          <div class="consumer-beautify">\n            <div class="card-opacity">\n              <div class="title">\n                卡片透明度(0%-100%): <span class="value">${e}%</span>\n              </div>\n              <input type="range" min="0" max="100" value="${e}">\n            </div>\n          </div>\n        `;return this.#g()(["--coderxst-bg-opacity",e/100]),this.#r.push((()=>{const n=t.querySelector("input[type='range']"),s=t.querySelector(".card-opacity .title .value");n.addEventListener("change",(t=>{e=t.target.value,s.innerText=e+"%",this.#g()(["--coderxst-bg-opacity",e/100])}))})),n})()+(()=>{const{bool:n}=e,{backgroundFilterConfig:s}=this.#e,{enable:o,inputConfig:i}=s,a=`\n          <div class="background-filter">\n            <div class="title">\n              背景滤镜:&nbsp;<span class="xst-switch-btn ${o?"active":""}" data-checked="${o}"></span>\n              模糊半径:&nbsp;<span class="value blur-radius">${i.blurRadius}px</span>&nbsp;|\n              饱和度:&nbsp;<span class="value saturation">${i.saturation}%</span>&nbsp;|\n              对比度:&nbsp;<span class="value contrast-ratios">${i.contrastRatios}%</span>\n            </div>\n            <div class="controller">\n              模糊半径:&nbsp;<input type="number" value="0" id="blurRadius">&nbsp;px\n              饱和度:&nbsp;<input type="number" value="100" id="saturation">&nbsp;%\n              对比度:&nbsp;<input type="number" value="100" id="contrastRatios">&nbsp;%\n              <button class="save-btn">保存</button>\n            </div>\n          </div>\n        `,r=()=>{this.#g()(["--coderxst-bg-blur-radius",i.blurRadius+"px"],["--coderxst-bg-saturation",i.saturation+"%"],["--coderxst-bg-contrast-ratios",i.contrastRatios+"%"])};return this.#r.push((()=>{const e=t.querySelector(".background-filter .xst-switch-btn");e.addEventListener("click",(()=>{s.enable=!n(e.dataset.checked),console.log(s)}))}),(()=>{const e=t.querySelectorAll(".background-filter .controller input[type='number']"),n=t.querySelector(".background-filter .title .blur-radius.value"),s=t.querySelector(".background-filter .title .saturation.value"),o=t.querySelector(".background-filter .title .contrast-ratios.value");r(),e.forEach((e=>{e.value=i[e.id],e.addEventListener("change",(t=>{i[e.id]=Number(t.target.value),"blurRadius"===e.id?n.innerText=e.value+"px":"saturation"===e.id?s.innerText=e.value+"%":"contrastRatios"===e.id&&(o.innerText=e.value+"%")}))}))}),(()=>{t.querySelector(".background-filter .controller .save-btn").addEventListener("click",(()=>{o&&(r(),console.log("保存成功"))}))})),a})()+(()=>{const{effectControlList:n,effectControlListColumn:s}=this.#e,o=n.map((e=>`\n          <div class="effect-item">\n            ${e.name}\n            <span \n              class="xst-switch-btn ${e.enable?"active":""}"\n              data-checked="${e.enable}"\n              data-id="${e.id}"\n            ></span>\n          </div>\n        `)),i=e.chunk(o,s).map((e=>`<div class="effect-line">${e.join("")}</div>`)).join("");return this.#r.push((()=>{t.querySelector(".effect-controller").addEventListener("click",(t=>{const s=t.target;if(!s.classList.contains("xst-switch-btn"))return;const o=n.find((e=>e.id===s.dataset.id));o&&(o.enable=!e.bool(s.dataset.checked),o.eventFn(t))}))})),`<div class="effect-controller">${i}</div>`})(),t}#m(){const{themeColor:e,themeColorSectionTitle:t}=this.#e,n=document.createElement("div");n.classList.add("theme-color-section");const s=`<h3 class="section-title">${t}</h3>`,o=e.colorList.map(((t,n)=>`\n          <div\n            class="theme-color-item ${n===e.activeIndex?"active":""}"\n            data-theme-color="${t}"\n            style="--theme-color: ${t}"\n          ></div>\n          `)).join(""),i=e.colorList[e.activeIndex];i&&this.#g()(["--coderxst-theme-color",i],["--anzhiyu-theme",i],["--anzhiyu-main",i]),this.#r.push((()=>{const t=n.querySelectorAll(".theme-color-list .theme-color-item");let s=e.activeIndex;t.forEach(((n,o)=>{n.addEventListener("click",(n=>{const i=n.target,a=t[s];a?.classList.remove("active"),i.classList.add("active"),s=o,e.activeIndex=s,this.#g()(["--coderxst-theme-color",i.dataset.themeColor],["--anzhiyu-theme",i.dataset.themeColor],["--anzhiyu-main",i.dataset.themeColor])}))}))}));const a=`<div class="theme-color-list">${o}</div>`;return n.innerHTML=s+a,n}#h(){const{fontFamily:e,fontFamilySectionTitle:t}=this.#e,{activeIndex:n,fontFamilyList:s}=e,o=document.createElement("div");o.classList.add("font-family-section");const i=`<h3 class="section-title">${t}</h3>`;return o.innerHTML=i+'\n        <div class="statement">\n          <div class="statement-icon">!</div>\n          <div class="statement-content">非商免字体未经授权只能个人使用。本站为完全非商业、非盈利性质的网站，平时用于个人学习交流，如有侵权请联系站长删除，谢谢! ——致版权方</div>\n        </div>\n      '+(()=>{const t=s[n];t&&this.#g(document.body)(["--coderxst-font-family",t]);const i=s.map(((e,t)=>`\n              <div\n                class="font-item ${n===t?"active":""}"\n                data-font-family="${e}"\n                style="--font-family: ${e}"\n              >${e}</div>\n            `)).join("");return this.#r.push((()=>{const t=o.querySelectorAll(".font-list .font-item");let s=n;t.forEach(((n,o)=>{n.addEventListener("click",(n=>{const i=n.target,a=t[s];a?.classList.remove("active"),i.classList.add("active"),s=o,e.activeIndex=s,this.#g(document.body)(["--coderxst-font-family",i.dataset.fontFamily])}))}))})),`<div class="font-list">${i}</div>`})(),o}#p(){const{backgroundSectionTitle:e,backgroundList:t}=this.#e,n=document.createElement("div");n.className="background-section";const s=`<h3 class="section-title">${e}</h3>`;return n.innerHTML=s+(()=>{const e=t.map((e=>{const t=`<div class="title">${e.title}</div>`,n=e.content.map((e=>`\n                  <div class="img">\n                    <img\n                      src="${e.url}"\n                      alt="${e.title}"\n                      title="${e.title}"\n                      data-src="${e.url}"\n                      class="bg-img"\n                    >\n                  </div>\n                `)).join("");return`\n              <div class="group">\n                ${t}\n                ${`\n              <div class="content" data-title="${e.subtitle}">\n                <div class="background-list">\n                  ${n}\n                </div>\n              </div>\n            `}\n              </div>\n            `})).join("");return this.#r.push((()=>{n.querySelectorAll(".background-groups .group .content").forEach((e=>{e.addEventListener("click",(e=>{e.target.classList.toggle("active")}))}))}),(()=>{n.querySelector(".background-groups").addEventListener("click",(e=>{const t=e.target;t.classList.contains("bg-img")&&this.#b(t)}))})),`<div class="background-groups">${e}</div>`})(),n}#b(e){this.#e.backgroundEl.style.background=`url(${e.dataset.src}) left top/100% auto no-repeat`,this.#e.backgroundEl.style.transition="background 0.3s"}#f(){document.addEventListener("DOMContentLoaded",(()=>{this.#r.forEach((e=>e()))}))}#v(){const{bool:t}=e;this.#t.addEventListener("click",(e=>{const n=e.target;n.classList.contains("xst-switch-btn")&&(t(n.dataset.checked)?(n.dataset.checked="false",n.classList.remove("active")):(n.dataset.checked="true",n.classList.add("active")))}))}#g(e=document.documentElement){return(...t)=>{t.forEach((t=>{e.style.setProperty(t[0],t[1])}))}}#c(){const e=this.#l(),t=this.#d();this.#t.append(e,t),document.body.appendChild(this.#t),this.#r.push(this.#v.bind(this)),this.#f()}consumer(e){e(this)}}(t).consumer((e=>{const t=()=>{const t=document.getElementById("rightside-config-show"),n=t.querySelector("#go-up"),s=document.createElement("button");s.id="switch-bg-btn",s.type="button",s.innerHTML="<i class='fa-solid fa-image'></i>",s.title="美化窗口",s.addEventListener("click",e.handleCloseClick.bind(e)),t.insertBefore(s,n)};document.addEventListener("DOMContentLoaded",t),document.addEventListener("pjax:complete",t)}))})(),document.documentElement.classList.contains("windows")&&function(){let e=null;window.addEventListener("DOMContentLoaded",(()=>{e=function(){const e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};let t=0,n=Date.now(),s=Date.now();const o=(()=>{const e=document.createElement("div");return e.id="show-fps",document.body.appendChild(e),e})(),i=()=>{const a=Date.now();let r=Math.round(1e3/(a-s));if(s=a,t++,a>1e3+n){r=Math.round(1e3*t/(a-n));let e="";e=r<=5?'<span style="color:#bd0000">卡成ppt🤢</span>':r<=15?'<span style="color:#ff0000">电竞级帧率😖</span>':r<=25?'<span style="color:#ffa500">有点难受😨</span>':r<35?'<span style="color:#9338e6">不太流畅🙄</span>':r<=45?'<span style="color:#08b7e4">还不错哦😁</span>':'<span style="color:#39c5bb">十分流畅🤣</span>',o.style.opacity="1",o.innerHTML=`FPS: ${r} ${e}`,t=0,n=a}e(i)};return i(),{boxEl:o}}().boxEl})),window.addEventListener("pjax:complete",(()=>{"music"==document.body.dataset.type?e.style.display="none":e.style.display=""}))}(),(new class{#y="https://v.api.aa1.cn/api/api-girl-11-02/index.php?type=json";#L="上一个";#w="下一个";#k="点击打开休闲视频";#E="关闭视频";#x="连续: 开";#C="连续: 关";#S="循环: 开";#T="循环: 关";#O="当前浏览器不支持使用video播放视频, 请升级或者更换浏览器播放视频!";#P=null;#M=null;#I=null;#_=!0;#$=!1;#j=!1;#F=null;#q=[];#N=-1;run(e){this.#P=e??this.#P,this.#P&&(this.#P.querySelector("#random-video-container")||(this.#M?this.#P.appendChild(this.#M):(this.#F||this.#H(),this.render())))}async#D(){const e=await fetch(this.#y),t=await e.json();return t.mp4?t.mp4:""}#B(){const e=document.createElement("div");return e.className="btns",[{className:"btn continuous",innerText:this.#x,eventHandleFn:this.continuousBtnClick},{className:"btn loop",innerText:this.#T,eventHandleFn:this.loopBtnClick},{className:"btn previous",innerText:this.#L,eventHandleFn:this.previousBtnClick},{className:"btn next",innerText:this.#w,eventHandleFn:this.nextBtnClick}].forEach((t=>{const n=this.#R(t);e.appendChild(n)})),e}#A(){return this.#R({className:"open-close",innerText:this.#k,eventHandleFn:this.openAndCloseBtnClick})}#R(e){const t=document.createElement("button");return t.className=e.className,t.innerText=e.innerText,t.addEventListener("click",(t=>{e.eventHandleFn.call(this,t)})),t}continuousBtnClick(e){this.#_?e.target.innerText=this.#C:(this.#M.querySelector(".loop").innerText=this.#T,this.#j=!1,e.target.innerText=this.#x),this.#_=!this.#_}loopBtnClick(e){this.#j?e.target.innerText=this.#T:(this.#M.querySelector(".continuous").innerText=this.#C,this.#_=!1,e.target.innerText=this.#S),this.#j=!this.#j}previousBtnClick(){if(0===this.#N)return this.#q[this.#N];this.#I.src=this.#q[--this.#N],this.#I.play()}async nextBtnClick(){let e="";this.#N<this.#q.length-1?e=this.#q[this.#N+1]:(e=await this.#D(),this.#q.push(e)),this.#I.src=e,this.#I.play(),this.#N++}openAndCloseBtnClick(e){if(e.observer&&!this.#$)return;const t=this.#M.querySelector(".content");this.#$?(t.classList.remove("open"),this.#I.pause(),e.target.innerText=this.#k):(t.classList.add("open"),this.#I.play(),e.target.innerText=this.#E),this.#$=!this.#$}async#V(){const e=document.createElement("div");e.className="video-box";let t=0;const n=await this.#D();return this.#q.push(n),this.#N++,this.#I=document.createElement("video"),this.#I.controls=!0,this.#I.src=n,this.#I.innerText=this.#O,this.#I.addEventListener("loadeddata",(e=>{t=Math.floor(e.target.duration),e.target.style.height="auto";const n=globalThis.getComputedStyle(e.target,null).height;e.target.style.height=n})),this.#I.addEventListener("timeupdate",(e=>{Math.floor(e.target.currentTime)===t&&(this.#_?this.nextBtnClick():this.#j&&this.#I.play())})),this.#F.observe(this.#I),e.appendChild(this.#I),e}#H(){this.#F=new IntersectionObserver((e=>{e[0].isIntersecting||this.openAndCloseBtnClick({target:this.#M.querySelector(".open-close"),observer:!0})}),{threshold:.6})}async render(){if(!this.#P)return;this.#M=document.createElement("div"),this.#M.id="random-video-container";const e=document.createElement("div");e.className="content",e.append(await this.#V(),this.#B()),this.#M.append(e,this.#A()),this.#P.appendChild(this.#M)}consumer(e){e(this)}}).consumer((e=>{const t=()=>{const t=document.querySelector("#card-random-video .item-content");e.run(t)};document.addEventListener("DOMContentLoaded",t),document.addEventListener("pjax:complete",t)})),(new class{#z=document.documentElement.dataset.theme;#W=null;#U=null;#Y=[];#Q=0;constructor(){this.#c(),this.#X()}#c(){this.#W=document.createElement("div"),this.#W.id="sun-moon-container",this.#U=document.createElement("div"),this.#U.classList.add("sun-moon"),this.#W.appendChild(this.#U),document.body.appendChild(this.#W)}#X(){"light"===this.#z?(this.#W.classList.add("sun-mode"),this.#W.classList.remove("moon-mode"),this.#Q=0):"dark"===this.#z&&(this.#W.classList.add("moon-mode"),this.#W.classList.remove("sun-mode"),this.#Q=180),this.#U.style.transform=`rotate(${this.#Q}deg)`}addEvent(e){if(e){if(this.#Y.includes(e)){const t=this.#Y.indexOf(e);this.#Y.splice(t,1)}return this.#Y.push(e),e.addEventListener("click",this.#Z.bind(this)),this}}#Z(){this.#W.classList.add("active"),setTimeout((()=>{this.#Q+=180,this.#U.style.transform=`rotate(${this.#Q}deg)`,setTimeout((()=>{this.#W.classList.toggle("moon-mode"),this.#W.classList.toggle("sun-mode"),setTimeout((()=>{this.#W.classList.remove("active")}),2e3)}),1e3)}),1e3)}consumer(e){e(this)}}).consumer((e=>{const t=()=>{const t=document.querySelector("#rightside #darkmode"),n=document.querySelector("#nav-group #nav-right #console .darkmode_switchbutton");e.addEvent(t).addEvent(n)};document.addEventListener("DOMContentLoaded",(()=>{(()=>{const t=document.querySelector("#rightMenu #menu-darkmode"),n=document.querySelector("#sidebar-menus .darkmode_switchbutton");e.addEvent(t).addEvent(n)})(),t()})),document.addEventListener("pjax:complete",t)})),(()=>{function e(){let e,t,n,s=function(e,t,n,s){const{sin:o,cos:i,asin:a,PI:r,hypot:c}=Math;let l=(e,t)=>(e*=r/180,{x:i(t*=r/180)*i(e),y:i(t)*o(e),z:o(t)}),d=l(e,t),u=l(n,s),m=2*a(c(d.x-u.x,d.y-u.y,d.z-u.z)/2)*6371;return Math.round(m)}(115.57287,35.07118,ipLocation.result.location.lng,ipLocation.result.location.lat),o=ipLocation.result.ad_info.nation;switch(ipLocation.result.ad_info.nation){case"日本":t="よろしく，一起去看樱花吗";break;case"美国":t="Let us live in peace!";break;case"英国":t="想同你一起夜乘伦敦眼";break;case"俄罗斯":t="干了这瓶伏特加！";break;case"法国":t="C'est La Vie";break;case"德国":t="Die Zeit verging im Fluge.";break;case"澳大利亚":t="一起去大堡礁吧！";break;case"加拿大":t="拾起一片枫叶赠予你";break;case"中国":switch(o=ipLocation.result.ad_info.province+" "+ipLocation.result.ad_info.city+" "+ipLocation.result.ad_info.district,e=ipLocation.result.ip,ipLocation.result.ad_info.province){case"北京市":t="北——京——欢迎你~~~";break;case"天津市":t="讲段相声吧";break;case"河北省":t="山势巍巍成壁垒，天下雄关铁马金戈由此向，无限江山";break;case"山西省":t="展开坐具长三尺，已占山河五百余";break;case"内蒙古自治区":t="天苍苍，野茫茫，风吹草低见牛羊";break;case"辽宁省":t="我想吃烤鸡架！";break;case"吉林省":t="状元阁就是东北烧烤之王";break;case"黑龙江省":t="很喜欢哈尔滨大剧院";break;case"上海市":t="众所周知，中国只有两个城市";break;case"江苏省":switch(ipLocation.result.ad_info.city){case"南京市":t="这是我挺想去的城市啦";break;case"苏州市":t="上有天堂，下有苏杭";break;default:t="散装是必须要散装的"}break;case"浙江省":t="东风渐绿西湖柳，雁已还人未南归";break;case"河南省":switch(ipLocation.result.ad_info.city){case"郑州市":t="豫州之域，天地之中";break;case"南阳市":t="臣本布衣，躬耕于南阳此南阳非彼南阳！";break;case"驻马店市":t="峰峰有奇石，石石挟仙气嵖岈山的花很美哦！";break;case"开封市":t="刚正不阿包青天";break;case"洛阳市":t="洛阳牡丹甲天下";break;default:t="可否带我品尝河南烩面啦？"}break;case"安徽省":t="蚌埠住了，芜湖起飞";break;case"福建省":t="井邑白云间，岩城远带山";break;case"江西省":t="落霞与孤鹜齐飞，秋水共长天一色";break;case"山东省":t="遥望齐州九点烟，一泓海水杯中泻";break;case"湖北省":if("黄冈市"===ipLocation.result.ad_info.city)t="红安将军县！辈出将才！";else t="来碗热干面~";break;case"湖南省":t="74751，长沙斯塔克";break;case"广东省":switch(ipLocation.result.ad_info.city){case"广州市":t="看小蛮腰，喝早茶了嘛~";break;case"深圳市":t="今天你逛商场了嘛~";break;case"阳江市":t="阳春合水！博主家乡~ 欢迎来玩~";break;default:t="来两斤福建人~"}break;case"广西壮族自治区":t="桂林山水甲天下";break;case"海南省":t="朝观日出逐白浪，夕看云起收霞光";break;case"四川省":t="康康川妹子";break;case"贵州省":t="茅台，学生，再塞200";break;case"云南省":t="玉龙飞舞云缠绕，万仞冰川直耸天";break;case"西藏自治区":t="躺在茫茫草原上，仰望蓝天";break;case"陕西省":t="来份臊子面加馍";break;case"甘肃省":t="羌笛何须怨杨柳，春风不度玉门关";break;case"青海省":t="牛肉干和老酸奶都好好吃";break;case"宁夏回族自治区":t="大漠孤烟直，长河落日圆";break;case"新疆维吾尔自治区":t="驼铃古道丝绸路，胡马犹闻唐汉风";break;case"台湾省":t="我在这头，大陆在那头";break;case"香港特别行政区":t="永定贼有残留地鬼嚎，迎击光非岁玉";break;case"澳门特别行政区":t="性感荷官，在线发牌";break;default:t="带我去你的城市逛逛吧！"}break;default:t="带我去你的国家逛逛吧"}let i=new Date;n=i.getHours()>=5&&i.getHours()<11?"<span>🌤️ 早上好，一日之计在于晨</span>":i.getHours()>=11&&i.getHours()<13?"<span>☀️ 中午好，记得午休喔~</span>":i.getHours()>=13&&i.getHours()<17?"<span>🕞 下午好，饮茶先啦！</span>":i.getHours()>=17&&i.getHours()<19?"<span>🚶‍♂️ 即将下班，记得按时吃饭~</span>":i.getHours()>=19&&i.getHours()<24?"<span>🌙 晚上好，夜生活嗨起来！</span>":"夜深了，早点休息，少熬夜",e.includes(":")&&(e="<br>好复杂，咱看不懂~(ipv6)");try{document.getElementById("welcome-info").innerHTML=`<p>欢迎来自 <b><span style="color: var(--kouseki-ip-color);font-size: var(--kouseki-gl-size)">${o}</span></b> 的小友💖。${t} 🍂 您当前位置距博主约 <b><span style="color: var(--kouseki-ip-color)">${s}</span></b> 公里！ Tip: <b><span style="color: var(--kouseki-ip-color)">${n}</span></b></p>`}catch(e){console.log("Pjax无法获取元素")}}$.ajax({type:"get",url:"https://apis.map.qq.com/ws/location/v1/ip",data:{key:"VO4BZ-CXBCG-D5GQ2-QPPJ3-MAHFO-7IB56",output:"jsonp"},dataType:"jsonp",success:function(e){ipLocation=e}}),window.onload=e,document.addEventListener("pjax:complete",e)})(),function(){if(document.body.clientWidth>992){function e(){const e=$(window).height(),t=$("body")[0].scrollHeight,n=$(window).scrollTop();return{ViewH:e,DocH:t,ScrollTop:n,Band_H:n/(t-e)*100,S_V:t-e}}function t(e){e.ScrollTop>.001?$(".neko").css("display","block"):$(".neko").css("display","none")}!function(){const e=document.createElement("div");e.id="myscoll",document.body.appendChild(e)}(),function(n){n.fn.nekoScroll=function(s){var o=n.extend({top:"0",scroWidth:"6px",z_index:9999,zoom:.9,borderRadius:"5px",right:"60px",nekoImg:"https://bu.dusays.com/2022/07/20/62d812db74be9.png",hoverMsg:"喵喵喵~",color:"#6f42c1",during:500,blog_body:"body"},s),i=""!==this.prop("className")?"."+this.prop("className"):""!==this.prop("id")?"#"+this.prop("id"):this.prop("nodeName");0==n(".neko").length&&this.after('<div class="neko" id='+o.nekoname+' data-msg="'+o.hoverMsg+'"></div>');let a=e();return n(i).css({position:"fixed",width:o.scroWidth,top:o.top,height:a.Band_H*o.zoom*a.ViewH*.01+"px","z-index":o.z_index,"background-color":o.bgcolor,"border-radius":o.borderRadius,right:o.right,"background-image":"url("+o.scImg+")","background-image":"-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)","border-radius":"2em","background-size":"contain"}),n("#"+o.nekoname).css({position:"fixed",top:a.Band_H*o.zoom*a.ViewH*.01-50+"px","z-index":10*o.z_index,right:o.right,"background-image":"url("+o.nekoImg+")"}),t(e()),n(window).scroll((function(){let s=e();t(s),n(i).css({position:"fixed",width:o.scroWidth,top:o.top,height:s.Band_H*o.zoom*s.ViewH*.01+"px","z-index":o.z_index,"background-color":o.bgcolor,"border-radius":o.borderRadius,right:o.right,"background-image":"url("+o.scImg+")","background-image":"-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)","border-radius":"2em","background-size":"contain"}),n("#"+o.nekoname).css({position:"fixed",top:s.Band_H*o.zoom*s.ViewH*.01-50+"px","z-index":10*o.z_index,right:o.right,"background-image":"url("+o.nekoImg+")"}),s.ScrollTop==s.S_V?n("#"+o.nekoname).addClass("showMsg"):(n("#"+o.nekoname).removeClass("showMsg"),n("#"+o.nekoname).attr("data-msg",o.hoverMsg))})),this.click((function(e){btf.scrollToDest(0,500)})),n("#"+o.nekoname).click((function(){btf.scrollToDest(0,500)})),this}}(jQuery),$(document).ready((function(){$("#myscoll").nekoScroll({bgcolor:"rgb(0 0 0 / .5)",borderRadius:"2em",zoom:.9})}))}}(),(()=>{class e{constructor(e,t){this.smallSrc=e,this.largeSrc=t,this.initTpl()}initTpl(){this.container=document.createElement("div"),this.smallStage=document.createElement("div"),this.largeStage=document.createElement("div"),this.smallImg=new Image,this.largeImg=new Image,this.container.className="pl-container",this.smallStage.className="pl-img pl-blur",this.largeStage.className="pl-img",this.container.appendChild(this.smallStage),this.container.appendChild(this.largeStage),this.smallImg.onload=this._onSmallLoaded.bind(this),this.largeImg.onload=this._onLargeLoaded.bind(this)}progressiveLoad(){this.smallImg.src=this.smallSrc,this.largeImg.src=this.largeSrc}_onLargeLoaded(){this.largeStage.classList.add("pl-visible"),this.largeStage.style.backgroundImage=`url('${this.largeSrc}')`}_onSmallLoaded(){this.smallStage.classList.add("pl-visible"),this.smallStage.style.backgroundImage=`url('${this.smallSrc}')`}}const t=(t,n)=>{console.log("执行渐进背景替换");const s=window.matchMedia("(max-width: 767px)").matches,o=new e(s?t.mobileSmallSrc:t.smallSrc,s?t.mobileLargeSrc:t.largeSrc);n.children[0]&&n.insertBefore(o.container,n.children[0]),o.progressiveLoad()},n={smallSrc:"https://bu.dusays.com/2023/09/02/64f2a0b87e718.jpg",largeSrc:"https://study-note-blog-1306689697.cos.ap-beijing.myqcloud.com/top_imgs%2Findex_img.jpg",mobileSmallSrc:"https://bu.dusays.com/2023/09/02/64f2a0b87e718.jpg",mobileLargeSrc:"https://study-note-blog-1306689697.cos.ap-beijing.myqcloud.com/top_imgs%2Findex_img.jpg",enableRoutes:["/"]};function s(e){const n=document.getElementById("page-header");n&&n.classList.contains("full_page")&&t(e,n)}document.addEventListener("DOMContentLoaded",(()=>{s(n)})),document.addEventListener("pjax:complete",(()=>{!function(e){const t=document.getElementById("page-header");t&&t.classList.contains("full_page")&&s(e)}(n)}))})(),(()=>{const e=(e,t)=>{let n=null;return function(...s){null==n&&(e.apply(this,s),n=setTimeout((()=>{clearTimeout(n),n=null}),t))}};let t=null;const n=()=>{setTimeout((()=>{t&&window.removeEventListener("scroll",t);const n=document.querySelector("#page-header .pl-container"),s=document.querySelector("#web_bg");document.querySelector("#page-header").classList.contains("full_page")?t=((t,n)=>{if(!t||!n)return;t.style.transition="all 0.3s",n.style.transition="all 0.3s";let s=!1,o=!0,i=window.innerHeight;window.addEventListener("resize",(()=>{i=window.innerHeight}));const a=()=>{if(s=window.scrollY>i+20,s&&!o)return;const{opacity:e,blur:a,scale:r}=((e,t)=>{if(e>=t)return{opacity:1,blur:60,scale:1.7};const n=e/t;return{opacity:1*n,blur:60*n,scale:.7*n+1}})(window.scrollY,i),c=t.querySelector(".pl-img.pl-visible:not(.pl-blur)");t.style.filter=`blur(${a}px)`,c&&(c.style.transform=`scale(${r})`),n.style.opacity=e,o=!1};a();const r=e(a,70);return window.addEventListener("scroll",r),r})(n,s):s&&(s.style.opacity="1")}),200)};document.addEventListener("DOMContentLoaded",n),document.addEventListener("pjax:complete",n)})(),(()=>{const e=["欺负我一个69岁的老同志","哎呦，你干嘛！🐓","奶奶滴，玩阴的是吧","年轻人，不讲武德","我大意了，没有闪"],t=["https://bu.dusays.com/2023/09/06/64f841541e66e.webp","https://bu.dusays.com/2023/09/06/64f8415422342.webp","https://bu.dusays.com/2023/09/11/64ff17f2ae52f.webp","https://bu.dusays.com/2023/09/11/64ff19e676fcb.webp","https://bu.dusays.com/2023/09/11/64ff19e68c544.webp"],n=()=>{const n=document.querySelector("#bbTimeList"),s=t[Math.floor(Math.random()*t.length)];setTimeout((()=>{!function(e,t,n){if(!e)return;if(e.querySelector("#walking-pet"))return;e.style.position="relative";const s=document.createElement("div");s.id="walking-pet",s.dataset.tip=t[Math.floor(Math.random()*t.length)];const o=new Image;o.src=n,o.addEventListener("error",(()=>{e.removeChild(s)})),o.addEventListener("click",(()=>{const n=e.clientWidth-s.clientWidth,o=Math.floor(Math.random()*n);s.style.transform=`translate(${o}px, -80%)`,s.dataset.tip=t[Math.floor(Math.random()*t.length)]})),s.appendChild(o),e.appendChild(s)}(n,e,s)}),100)};document.addEventListener("DOMContentLoaded",n),document.addEventListener("pjax:complete",n)})(),(()=>{const e=[{className:"#recent-posts .recent-post-item",enterAnimation:"leftToRight"},{className:"#aside-content .card-widget:not(.mobile #card-toc)",enterAnimation:"rightToLeft"}],t={leftToRight:"translateX(-50%)",rightToLeft:"translateX(50%)",topToBottom:"translateY(-20%)",bottomToTop:"translateY(20%)"},n=new Map,s=(e,n)=>{e.dataset.isIntersecting=n;const s=e.dataset.enterAnimation;let o={transform:"translate(0, 0)",opacity:"1"};if(!n&&s){o={transform:t[s],opacity:"0"}}Object.assign(e.style,o)},o=e=>{for(const t of e){const e=t.target;if(t.isIntersecting){if("true"==e.dataset.isIntersecting)return;s(e,!0)}else{if("false"==e.dataset.isIntersecting)return;s(e,!1)}}},i=()=>{(()=>{for(const e of n.entries()){const t=e[0];e[1].unobserve(t)}n.clear()})(),(e=>{e.map((e=>e.className)).forEach((s=>{const i=document.querySelectorAll(s),a=e.find((e=>e.className===s)),r=a?.enterAnimation;i.forEach((e=>{const s=new IntersectionObserver(o,{threshold:.1});n.set(e,s),s.observe(e),e.dataset.enterAnimation=r,e.dataset.isIntersecting=!1;const i=t[r];Object.assign(e.style,{willChange:"transform",transition:"all 0.5s ease-in-out",transform:i||"translate(0, 0)",opacity:"0"})}))}))})(e)};document.addEventListener("DOMContentLoaded",i),document.addEventListener("pjax:complete",i)})();var frdata={apiurl:"https://friends.coderxst.top/",defaultFish:100,hungryFish:100};if("undefined"!=typeof frdataUser)for(var key in frdataUser)frdataUser[key]&&(frdata[key]=frdataUser[key]);var randomPostTimes=0,randomPostWorking=!1,randomPostTips=["钓到了绝世好文！","在河边打了个喷嚏，吓跑了","你和小伙伴抢夺着","你击败了巨龙，在巢穴中发现了","挖掘秦始皇坟时找到了","在路边闲逛的时候随手买了一个","从学校班主任那拿来了孩子上课偷偷看的","你的同桌无情的从你的语文书中撕下了那篇你最喜欢的","考古学家近日发现了","外星人降临地球学习地球文化，落地时被你塞了","从图书馆顶层的隐秘角落里发现了闪着金光的","徒弟修炼走火入魔，为师立刻掏出了","在大山中唱山歌，隔壁的阿妹跑来了，带着","隔壁家的孩子数学考了满分，都是因为看了","隔壁家的孩子英语考了满分，都是因为看了","小米研发了全新一代MIX手机，据说灵感","修炼渡劫成功，还好提前看了","库克坐上了苹果CEO的宝座，因为他面试的时候看了","阿里巴巴大喊芝麻开门，映入眼帘的就是","师傅说练武要先炼心，然后让我好生研读","科考队在南极大陆发现了被冰封的","飞机窗户似乎被一张纸糊上了，仔细一看是","历史上满写的仁义道德四个字，透过字缝里却全是","十几年前的录音机似乎还能够使用，插上电发现正在播的是","新版语文书拟增加一篇熟读并背诵的","经调查，99%的受访者都没有背诵过","今年的高考满分作文是","唐僧揭开了佛祖压在五指山上的","科学家发现能够解决衰老的秘密，就是每日研读","英特尔发布了全新的至强处理器，其芯片的制造原理都是","新的iPhone产能很足，新的进货渠道是","今年亩产突破了八千万斤，多亏了","陆隐一统天上宗，在无数祖境高手的目光下宣读了","黑钻风跟白钻风说道，吃了唐僧肉能长生不老，他知道是因为看了","上卫生间没带纸，直接提裤跑路也不愿意玷污手中","种下一篇文章就会产生很多很多文章，我种下了","三十年河东，三十年河西，莫欺我没有看过","踏破铁血无觅处，得来全靠","今日双色球中了两千万，预测全靠","因为卷子上没写名字，老师罚抄","为了抗议世间的不公，割破手指写下了","在艺术大街上被贴满了相同的纸，走近一看是","这区区迷阵岂能难得住我？其实能走出来多亏了","今日被一篇文章顶上了微博热搜，它是","你送给乞丐一个暴富秘籍，它是","UZI一个走A拿下五杀，在事后采访时说他当时回想起了","科学家解刨了第一个感染丧尸病毒的人，发现丧尸抗体存在于","如果你有梦想的话，就要努力去看","决定我们成为什么样人的，不是我们的能力，而是是否看过","有信心不一定会成功，没信心就去看","你真正是谁并不重要，重要的是你看没看过","玄天境重要的是锻体，为师赠你此书，好好修炼去吧，这是","上百祖境高手在天威湖大战三天三夜为了抢夺","这化仙池水乃上古真仙对后人的考校，要求熟读并背诵","庆氏三千年根基差点竟被你小子毁于一旦，能够被我拯救全是因为我看了","我就是神奇宝贝大师！我这只皮卡丘可是","我就是神奇宝贝大师！我这只小火龙可是","我就是神奇宝贝大师！我这只可达鸭可是","我就是神奇宝贝大师！我这只杰尼龟可是","上古遗迹中写道，只要习得此书，便得成功。你定睛一看，原来是","奶奶的，玩阴的是吧，我就是双料特工代号穿山甲，","你的背景太假了，我的就逼真多了，学到这个技术全是因为看了","我是云南的，云南怒江的，怒江芦水市，芦水市六库，六库傈僳族，傈僳族是","我真的栓Q了，我真的会谢如果你看","你已经习得退退退神功，接下来的心法已经被记录在","人生无常大肠包小肠，小肠包住了","你抽到了普通文章，它是","你收到了稀有文章，它是","你抽到了金色普通文章，它是","你抽到了金色稀有文章，它是","你抽到了传说文章！它是","哇！金色传说！你抽到了金色传说文章，它是","报告！侦察兵说在前往300米有一个男子在偷偷看一本书，上面赫然写着","芷莲姑娘大摆擂台，谁若是能读完此书，便可娶了她。然后从背后掏出了","请问你的梦想是什么？我的梦想是能读到","读什么才能增智慧？当然是读","纳兰嫣然掏出了退婚书，可是发现出门带错了，结果拿出了一本","你要尽全力保护你的梦想。那些嘲笑你的人，他们必定会失败，他们想把你变成和他们一样的人。如果你有梦想的话，就要努力去读","走人生的路就像爬山一样，看起来走了许多冤枉的路，崎岖的路，但终究需要读完","游戏的规则就是这么的简单，你听懂了吗？管你听没听懂，快去看"],randomPostClick=0;function fetchRandomPost(){var e,t,n,s;0==randomPostWorking&&document.getElementById("random-post")&&(randomPostWorking=!0,e=randomPostTips[Math.floor(Math.random()*randomPostTips.length)],"",t=1e4<randomPostTimes?"愿者上钩":1e3<randomPostTimes?"俯览天下":1e3<randomPostTimes?"超越神了":100<randomPostTimes?"绝世渔夫":75<randomPostTimes?"钓鱼王者":50<randomPostTimes?"钓鱼宗师":20<randomPostTimes?"钓鱼专家":5<randomPostTimes?"钓鱼高手":"钓鱼新手",document.getElementById("random-post").innerHTML=5<=randomPostTimes?"钓鱼中... （Lv."+randomPostTimes+" 当前称号："+t+"）":"钓鱼中...",n=randomNum(1e3,3e3),0==randomPostTimes&&(n=0),document.querySelector(".random-post-start").style.opacity="0.2",randomPostClick*frdata.hungryFish+frdata.defaultFish<randomPostTimes&&0==Math.round(Math.random())?document.getElementById("random-post").innerHTML="因为只钓鱼不吃鱼，过分饥饿导致本次钓鱼失败...(点击任意一篇钓鱼获得的文章即可恢复）":(s=frdata.apiurl+"randompost",fetch(s).then((function(e){return e.json()})).then((function(t){var s=t.title,o=t.link,i=t.author;document.querySelector("#random-post")&&window.setTimeout((function(){document.getElementById("random-post").innerHTML=e+"来自友链 <b>"+i+'</b> 的文章：<a class="random-friends-post" onclick="randomClickLink()" target="_blank" href="'+o+'" rel="external nofollow">'+s+"</a>",randomPostTimes+=1,localStorage.setItem("randomPostTimes",randomPostTimes),document.querySelector(".random-post-start").style.opacity="1"}),n)}))),randomPostWorking=!1)}function initRandomPost(){document.querySelector(".random-post-start")&&localStorage.randomPostTimes&&(randomPostTimes=parseInt(localStorage.randomPostTimes),randomPostClick=parseInt(localStorage.randomPostClick),document.querySelector(".random-post-start").style.transitionDuration="0.3s",document.querySelector(".random-post-start").style.transform="rotate("+360*randomPostTimes+"deg)"),fetchRandomPost()}function randomClickLink(){randomPostClick+=1,localStorage.setItem("randomPostClick",randomPostClick)}function randomNum(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}initRandomPost();