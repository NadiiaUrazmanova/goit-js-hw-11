import{a as u,i as a}from"./assets/vendor-Cl-WcV8j.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();function p(s){const o=new URLSearchParams({key:"51651971-b67330e54672f93571a43cb22",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(`https://pixabay.com/api/?${o}`).then(e=>e.data.hits).catch(e=>{throw a.error({title:"Error",message:`Error: ${e}`,position:"topRight"}),e})}const l=document.querySelector(".gallery");function f(s){const o=s.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
      loading="lazy"
    />
  </a>
  <div class="gallery-info">
    <p>Likes: ${e.likes} </p>
    <p>Views: ${e.views}</p>
    <p>Comments: ${e.comments}</p>
    <p>Downloads: ${e.downloads}</p>
  </div>
</li>`);l.innerHTML=o.join(""),new SimpleLightbox(".gallery")}function d(){l.innerHTML=""}const c=document.querySelector(".loader-wrapper");function m(){c.style.display="flex"}function y(){c.style.display="none"}const g=document.querySelector(".form"),h=document.querySelector(".input");function L(){g.addEventListener("submit",function(s){s.preventDefault();const o=h.value.trim();if(o.trim()===""){a.error({title:"Error",message:"Please enter search images name",position:"topRight"});return}d(),m(),p(o).then(e=>{const i=e.hits;i.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):f(i)}).catch(e=>{console.error(e)}).finally(()=>{y()})})}L();
//# sourceMappingURL=index.js.map
