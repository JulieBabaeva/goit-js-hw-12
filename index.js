import{a as d,S as f,i}from"./assets/vendor-CxFKIfsH.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function m(t){return d.get("https://pixabay.com/api/",{params:{key:"55690336-89d3439cb4fd8c4c20b1d93a7",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data).catch(o=>console.log(o))}const g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const o=document.querySelector(".gallery"),s=t.map(({webformatURL:n,largeImageURL:e,tags:r,likes:a,views:c,comments:u,downloads:p})=>`<li class="gallery-item">
  <a href='${e}'>
    <img class="gallery-image" src='${n}' alt ='${r}'>    
  </a>
  <div class="info">
  <p><span class="label">Likes:</span> ${a}</p>
  <p><span class="label">Views:</span> ${c}</p>
  <p><span class="label">Comments:</span> ${u}</p>
  <p><span class="label">Downloads:</span> ${p}</p>
</div>
</li>`).join("");o.innerHTML=s,g.refresh()}function y(){document.querySelector(".gallery").innerHTML=""}function L(){const t=document.querySelector(".loader");t&&t.classList.remove("is-hidden")}function b(){const t=document.querySelector(".loader");t&&t.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",t=>{t.preventDefault();const o=t.currentTarget.elements["search-text"].value.trim();if(o===""){i.error({message:"Please enter a search term",position:"topRight"});return}y(),L(),m(o).then(s=>{if(s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(s.hits),l.reset()}).catch(s=>{console.log(s),i.error({message:"Something went wrong!",position:"topRight"})}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
