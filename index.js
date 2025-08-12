import{a as f,i as a,S as p}from"./assets/vendor-BK_rxH-O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();function y(i){const o=new URLSearchParams({key:"51651971-b67330e54672f93571a43cb22",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return f.get(`https://pixabay.com/api/?${o}`).then(e=>e.data).catch(e=>{throw a.error({title:"Error",message:`Error: ${e}`,position:"topRight"}),e})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");let n;function d(i){const o=i.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          loading="lazy"
        />
      </a>
      <div class="gallery-info">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </li>
  `).join("");c.innerHTML=o,n?n.refresh():n=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function m(){c.innerHTML=""}function h(){u.style.display="flex"}function g(){u.style.display="none"}const L=document.querySelector(".form"),b=document.querySelector(".input");function w(){L.addEventListener("submit",function(i){i.preventDefault();const o=b.value.trim();if(o.trim()===""){a.error({title:"Error",message:"Please enter search images name",position:"topRight"});return}m(),h(),y(o).then(e=>{e.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):d(e.hits)}).catch(e=>{console.error(e)}).finally(()=>{g()})})}w();
//# sourceMappingURL=index.js.map
