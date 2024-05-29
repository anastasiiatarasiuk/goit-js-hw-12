import{a as S,S as q,i as l}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();async function p(e,r){const c="https://pixabay.com/api/",a={key:"44012525-f6ee3715003c9db0af32c6494",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:r};try{return(await S.get(c,{params:a})).data}catch(t){throw new Error(t.message)}}const v=document.querySelector(".images-container");let u;function B(e){return`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img 
        class="gallery-image" 
        src="${e.webformatURL}" 
        alt="${e.tags}" 
      />
    </a>
    <div class="img-details-box">
      <p class="detail-item"><b class="detail-title">Likes:</b> ${e.likes}</p>
      <p class="detail-item"><b class="detail-title">Views:</b> ${e.views}</p>
      <p class="detail-item"><b class="detail-title">Comments:</b> ${e.comments}</p>
      <p class="detail-item"><b class="detail-title">Downloads:</b> ${e.downloads}</p>
    </div>
    </li>
  `}function M(e){return e.map(B).join("")}function f(e){const r=M(e);v.insertAdjacentHTML("beforeend",r),u?u.refresh():u=new q(".images-container a",{captionsData:"alt",captionDelay:250})}const y=document.querySelector(".form"),R=document.querySelector(".images-container"),g=document.querySelector(".loader"),m=document.querySelector(".load-more-btn");y.addEventListener("submit",$);m.addEventListener("click",E);let s,b,i;async function $(e){if(e.preventDefault(),h(),R.innerHTML="",w(),i=e.target.elements.query.value.trim(),!i){l.error({message:"Search field is empty",position:"topRight"}),n();return}try{s=1;const r=await p(i,s);if(r&&r.hits&&r.hits.length)n(),b=Math.ceil(r.totalHits/15),L(),f(r.hits);else throw Error("Sorry, there are no images matching your search query. Please try again!")}catch{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{n()}y.reset()}async function E(){w(),h();try{s+=1;const e=await p(i,s);if(e&&e.hits&&e.hits.length){L(),f(e.hits);const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"});return}else throw new Error("We're sorry, there are no more posts to load")}catch{l.error({message:"We're sorry, there are no more posts to load",position:"topRight"})}finally{n()}}function L(){b>s?P():(h(),l.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}function w(){g.style.display="inline-block"}function n(){g.style.display="none"}function P(){m.classList.remove("hidden")}function h(){m.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
