!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(2),e.exports=n(1)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);document.body.innerHTML='\n  <app-gem-puzzle class="main-container">\n    <div class="info-block">\n      <p class="info-block__timer-wrapper">\n        <span class="info-block__title-timer">Прошло времени</span>\n        <span class="info-block__show-timer" id="show-timer">00:00</span>\n      </p>\n      <p class="info-block__steps-wrapper">\n        <span class="info-block__title-steps">Количество ходов:</span>\n        <span class="info-block__show-steps" id="steps">0</span>\n      </p>\n    </div>\n    <div class="control" id="control">\n      <input type="button" name="start" value="Перемешать и начать">\n      <input type="button" name="pause" value="Пауза">\n      <input type="button" name="save" value="Сохранить">\n      <input type="button" name="score" value="Результаты">\n    </div>\n    <div class="hover-wrap">\n      <div class="hover-start" id="hover-start">\n        <p class="hover-start__wrap">\n          <span class="hover-start__text">Выбери размер игрового поля и нажми кнопку "Перемешать и начать"</span><br>\n          <span>либо</span><br>\n          <button class="hover-start__repair" id="repair">Воостановить сохраненную игру</button>\n        </p>\n      </div>\n      <div class="hover-pause" id="hover-pause">\n        <p class="hover-pause__wrap">\n          <span class="hover-pause__text">П А У З А</span>\n        </p>\n      </div>\n      <div class="hover-result" id="hover-result">\n        <div class="block-hover" id="block-hover"></div>\n        <p class="hover-result__wrap">\n          <span class="hover-result__text">1.</span>\n          <span class="hover-result__text">2.</span>\n          <span class="hover-result__text">3.</span>\n          <span class="hover-result__text">4.</span>\n          <span class="hover-result__text">5.</span>\n          <span class="hover-result__text">6.</span>\n          <span class="hover-result__text">7.</span>\n          <span class="hover-result__text">8.</span>\n          <span class="hover-result__text">9.</span>\n          <span class="hover-result__text">10.</span>\n        </p>\n      </div>\n      <div class="hover-win" id="hover-win">\n        <p class="hover-win__wrap">\n          <span class="hover-win__text">\n          Поздравляем! Вы решили \n          <span id="mode">"3 x 3"</span> \n          головоломку за <span id="min">00:22</span> времени и <span id="steps">10</span> шагов</span>\n        </p>\n        <button class="close-win" id="close-win">ЗАКРЫТЬ</button>\n      </div>\n      <div class="main-game start" id="main-game">\n        <input type="button" class="draggable" value="1">\n        <input type="button" class="draggable" value="2">\n        <input type="button" class="draggable" value="3">\n        <input type="button" class="draggable" value="4">\n        <input type="button" class="draggable" value="5">\n        <input type="button" class="draggable" value="6">\n        <input type="button" class="draggable" value="7">\n        <input type="button" class="draggable" value="8">\n        <input type="button" class="draggable" value="9">\n        <input type="button" class="draggable" value="10">\n        <input type="button" class="draggable" value="11">\n        <input type="button" class="draggable" value="12">\n        <input type="button" class="draggable" value="13">\n        <input type="button" class="draggable" value="14">\n        <input type="button" class="draggable" value="15">\n        <input type="button" class="empty" value="">\n      </div>\n    </div>\n    <div class="game-mode" id="game-mode">\n      <div class="game-mode__info-mode">\n        <span>Изменить размер игрового поля:</span>\n      </div>\n      <div class="game-mode__change-mode">\n        <input type="button" value="3 x 3">\n        <input type="button" value="4 x 4">\n        <input type="button" value="5 x 5">\n        <input type="button" value="6 x 6">\n        <input type="button" value="7 x 7">\n        <input type="button" value="8 x 8">\n      </div>\n    </div>\n  <div class="saved" id="saved">\n    <span class="saved__info">Сохранено...</span>\n  </div>\n  </app-gem-puzzle>\n  ';const s=document.getElementById("main-game"),a=/iPad|iPhone|mobile|android|webos|ios|iPod/i.test(navigator.userAgent);let l=!1,o=!0;const r=e=>""===e.value?1:Math.random()-.5,i=[...s.getElementsByTagName("input")].sort(r);s.append(...i);const c=document.getElementById("game-mode"),u=document.getElementById("control"),p=document.getElementById("hover-pause"),d=document.getElementById("show-timer"),v=document.getElementById("steps"),m=document.getElementById("hover-win"),y=document.getElementById("repair"),g=document.getElementById("hover-result"),b=g.querySelectorAll("span");let f=!1;d.innerHTML="00:00";let h,_=1,I=0,x=null;const L=document.getElementById("hover-start"),M=(e,t)=>(I=t||I,_=e||_,setInterval(()=>{60===_&&(_=0,I++),h=_++,d.innerHTML=`${I<10?"0":""}${I}:${h<10?"0":""}${h} `},1e3)),S=()=>{x&&(clearInterval(x),x=null),d.innerHTML="00:00",v.innerHTML="0",x=M("1","0")};let T=[15,""];const w=(e,t)=>{const n=[];T=[e,t];for(let t=e;t--;)n.push(`<input type="button" class="draggable" value="${t+1}">`);const a=n.sort(r);a.push('<input type="button" class="empty" value="">'),s.innerHTML=a.join(""),s.className=`main-game ${t}`,L.style.display&&S()},E=e=>{if(setTimeout(()=>{l=!1},150),l)return;const t=e.target;if(!t.classList.contains("draggable"))return;t.ondragstart=()=>!1,a&&(document.body.style.overflow="hidden"),e.preventDefault();const n=[...s.getElementsByTagName("input")],r=n.map(e=>e.value),i=r.findIndex(e=>t.value===e),c=r.length,u=Math.sqrt(c),p=t.offsetWidth,y=t.offsetHeight,g=(n,s,l,o,r)=>{const i=performance.now(),c=()=>{t.style.transition="all 0s",t.style.top="0",t.style.left="0"};c();const u=t.getBoundingClientRect().left,p=t.getBoundingClientRect().top,d=(e.clientX||e.touches[0].clientX)-u,v=(e.clientY||e.touches[0].clientY)-p,m=(e,n)=>{t.style.transition="",t.style.top=`${e}px`,t.style.left=`${n}px`,setTimeout(c,100)};t.style.position="relative",t.style.zIndex="0";const y=(e,a)=>{let r=n?e-u-d:0,i=s?a-p-v:0;n&&(r=r<=l?l:r,r=r>=o?o:r),s&&(i=i<=l?l:i,i=i>=o?o:i),t.style.left=`${r}px`,t.style.top=`${i}px`};let g=a?e.touches[0].clientX:e.clientX,b=a?e.touches[0].clientY:e.clientY;y(g,b);const f=e=>{g=a?e.touches[0].clientX:e.clientX,b=a?e.touches[0].clientY:e.clientY,y(g,b)},h=()=>{r(performance.now()-i,m),a?(document.removeEventListener("touchmove",f),document.removeEventListener("touchend",h),document.body.style.overflow=""):(document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",h))};a?(document.addEventListener("touchmove",f),document.addEventListener("touchend",h)):(document.addEventListener("mousemove",f),document.addEventListener("mouseup",h))},b=e=>{setTimeout(()=>{[n[i],n[i-e]]=[n[i-e],n[i]],s.append(...n),l=!1,t.removeAttribute("style");const a=[...s.getElementsByTagName("input")],r=a.map(e=>e.value).sort((e,t)=>e-t).join().slice(1),c=a.map(e=>e.value).join().slice(0,-1);let u=+v.innerHTML;if(v.innerHTML=`${++u}`,c===r){o=!0,m.style.display="flex";const e=m.querySelector("#close-win"),t=m.querySelector("#mode"),n=m.querySelector("#min"),s=m.querySelector("#steps"),l=Math.sqrt(a.length);t.innerHTML=`"${l} x ${l}"`,n.innerHTML=d.innerHTML,s.innerHTML=v.innerHTML;const r=`${t.innerHTML} игра - за ${n.innerHTML.trim()} время и ${s.innerHTML} шагов`;let i=localStorage.getItem("listResults");i?(i=JSON.parse(i),i.push(r)):(i=[],i.push(r)),localStorage.setItem("listResults",JSON.stringify(i)),clearInterval(x),x=null,e.onclick=()=>{m.style.display="none",L.style.display="flex"}}},100)};!n[i-1]||n[i-1].value?!n[i-u]||n[i-u].value?!n[i+u]||n[i+u].value?n[i+1]&&!n[i+1].value&&(()=>{l=!0;g(!0,!1,0,p,(e,n)=>{if(e<150)n(0,p),b(-1);else{Math.abs(parseInt(t.style.left,10))<p/2?n(0,0):(n(0,p),b(-1))}})})():(()=>{l=!0;g(!1,!0,0,y,(e,n)=>{if(e<150)n(y,0),b(-u);else{Math.abs(parseInt(t.style.top,10))<y/2?n(0,0):(n(y,0),b(-u))}})})():(()=>{l=!0;g(!1,!0,-y,0,(e,n)=>{if(e<150)n(-y,0),b(u);else{Math.abs(parseInt(t.style.top,10))<y/2?n(0,0):(n(-y,0),b(u))}})})():(()=>{l=!0;g(!0,!1,-p,0,(e,n)=>{if(e<150)n(0,-p),b(1);else{Math.abs(parseInt(t.style.left,10))<p/2?n(0,0):(n(0,-p),b(1))}})})()};c.addEventListener("click",e=>{if(p.style.display)return;const t=e.target;if("INPUT"===t.tagName)switch(t.value){case"3 x 3":w(8,"three");break;case"4 x 4":w(15,"");break;case"5 x 5":w(24,"five");break;case"6 x 6":w(35,"six");break;case"7 x 7":w(48,"seven");break;case"8 x 8":w(63,"eight")}}),u.addEventListener("click",e=>{const t=e.target;if("INPUT"!==t.tagName)return;switch(t.name){case"start":p.style.display||(L.style.display="none",w(...T),S(),o=!1);break;case"pause":(()=>{const e=d.innerHTML;if(L.style.display&&!p.style.display){if(o)return;const[t,n]=e.split(":");localStorage.setItem("minutes",parseInt(t,10)),localStorage.setItem("seconds",parseInt(n,10)),clearInterval(x),x=null,p.style.display="flex"}else{if(o)return;p.style.display="";const e=+localStorage.getItem("seconds")+1,t=localStorage.getItem("minutes");x=M(e,t)}})();break;case"save":(()=>{if(!x)return;const e=document.getElementById("saved");e.style.display="flex",setTimeout(()=>{e.style.display=""},1500);const t=d.innerHTML,[n,a]=t.split(":");localStorage.setItem("savedMin",parseInt(n,10)),localStorage.setItem("savedSec",parseInt(a,10)),localStorage.setItem("savedSteps",v.innerHTML),localStorage.setItem("save",s.innerHTML),localStorage.setItem("time",t),localStorage.setItem("class",s.className)})();break;case"score":(()=>{if(f)return f=!1,t.style.zIndex="",void(g.style.display="");let e=localStorage.getItem("listResults");e&&(e=JSON.parse(e),e=e.slice(-10),e.forEach((e,t)=>{b[t].innerHTML=`${t+1}. ${e}`})),t.style.zIndex="110",g.style.display="flex",f=!0})()}}),y.addEventListener("click",()=>{const e=localStorage.getItem("save"),t=localStorage.getItem("class");if(e){L.style.display="none",s.className=t,s.innerHTML=e.trim();const n=+localStorage.getItem("savedSec")+1,a=localStorage.getItem("savedMin");d.innerHTML=localStorage.getItem("time"),v.innerHTML=localStorage.getItem("savedSteps"),x=M(n,a)}else y.innerHTML="Нет сохраненной игры",y.disabled=!0}),a?s.addEventListener("touchstart",E):s.addEventListener("mousedown",E)}]);