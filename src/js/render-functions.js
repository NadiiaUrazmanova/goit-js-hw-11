const gallery = document.querySelector(".gallery")
import '../css/styles_loader.css';

export function createGallery(images) {
    const markup = images.map((image) => { 
        return `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
      loading="lazy"
    />
  </a>
  <div class="gallery-info">
    <p>Likes: ${image.likes} </p>
    <p>Views: ${image.views}</p>
    <p>Comments: ${image.comments}</p>
    <p>Downloads: ${image.downloads}</p>
  </div>
</li>`
    })

gallery.innerHTML = markup.join('');
const lightbox = new SimpleLightbox('.gallery');


}

export function clearGallery() {
    gallery.innerHTML = '';
};


const loaderWrapper = document.querySelector('.loader-wrapper');

export function showLoader() {
  loaderWrapper.style.display = 'flex'; 
}

export function hideLoader() {
  loaderWrapper.style.display = 'none';
}
