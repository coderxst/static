class RandomVideo{#e="https://v.api.aa1.cn/api/api-girl-11-02/index.php?type=json";#t="上一个";#n="下一个";#i="点击打开休闲视频";#s="关闭视频";#o="连续: 开";#r="连续: 关";#a="循环: 开";#d="循环: 关";#l="当前浏览器不支持使用video播放视频, 请升级或者更换浏览器播放视频!";#h=null;#c=null;#E=null;#u=!0;#O=!1;#v=!1;#p=null;#m=[];#C=-1;constructor(e){this.#h=e,this.#h&&(this.#L(),this.render())}bindRootEl(e){this.#h=e??this.#h}async#_(){const e=await fetch(this.#e),t=await e.json();return t.mp4?t.mp4:""}#P(){const e=document.createElement("div");e.className="btns";return[{className:"btn continuous",innerText:this.#o,eventHandleFn:this.continuousBtnClick},{className:"btn loop",innerText:this.#d,eventHandleFn:this.loopBtnClick},{className:"btn previous",innerText:this.#t,eventHandleFn:this.previousBtnClick},{className:"btn next",innerText:this.#n,eventHandleFn:this.nextBtnClick}].forEach((t=>{const n=this.#N(t);e.appendChild(n)})),e}#S(){return this.#N({className:"open-close",innerText:this.#i,eventHandleFn:this.openAndCloseBtnClick})}#N(e){const t=document.createElement("button");return t.className=e.className,t.innerText=e.innerText,t.addEventListener("click",(t=>{e.eventHandleFn.call(this,t)})),t}continuousBtnClick(e){if(this.#u)e.target.innerText=this.#r;else{this.#c.querySelector(".loop").innerText=this.#d,this.#v=!1,e.target.innerText=this.#o}this.#u=!this.#u}loopBtnClick(e){if(this.#v)e.target.innerText=this.#d;else{this.#c.querySelector(".continuous").innerText=this.#r,this.#u=!1,e.target.innerText=this.#a}this.#v=!this.#v}previousBtnClick(){if(0===this.#C)return this.#m[this.#C];this.#E.src=this.#m[--this.#C],this.#E.play()}async nextBtnClick(){let e="";this.#C<this.#m.length-1?e=this.#m[this.#C+1]:(e=await this.#_(),this.#m.push(e)),this.#E.src=e,this.#E.play(),this.#C++}openAndCloseBtnClick(e){if(e.observer&&!this.#O)return;const t=this.#c.querySelector(".content");this.#O?(t.classList.remove("open"),this.#E.pause(),e.target.innerText=this.#i):(t.classList.add("open"),this.#E.play(),e.target.innerText=this.#s),this.#O=!this.#O}async#x(){const e=document.createElement("div");e.className="video-box";let t=0;const n=await this.#_();return this.#m.push(n),this.#C++,this.#E=document.createElement("video"),this.#E.controls=!0,this.#E.src=n,this.#E.innerText=this.#l,this.#E.onloadeddata=e=>{t=Math.floor(e.target.duration),e.target.style.height="auto";const n=globalThis.getComputedStyle(e.target,null).height;e.target.style.height=n},this.#E.addEventListener("timeupdate",(e=>{Math.floor(e.target.currentTime)===t&&(this.#u?this.nextBtnClick():this.#v&&this.#E.play())})),this.#p.observe(this.#E),e.appendChild(this.#E),e}#L(){this.#p=new IntersectionObserver((e=>{e[0].isIntersecting||this.openAndCloseBtnClick({target:this.#c.querySelector(".open-close"),observer:!0})}),{threshold:.6})}async render(){if(!this.#h)return;this.#c=document.createElement("div"),this.#c.id="random-video-container";const e=document.createElement("div");e.className="content",e.append(await this.#x(),this.#P()),this.#c.append(e,this.#S()),this.#h.appendChild(this.#c)}consumer(e){e(this)}}new RandomVideo(document.querySelector("#card-random-video .item-content")).consumer((e=>{document.addEventListener("pjax:complete",(()=>{e.bindRootEl(document.querySelector("#card-random-video .item-content")),e.render()}))}));