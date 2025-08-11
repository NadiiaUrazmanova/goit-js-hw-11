import '../css/styles_loader.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");
const loaderWrapper = document.querySelector('.loader-wrapper');
let lightbox; // объявляем сразу, чтобы было видно всем функциям

export function createGallery(images) {
  const markup = images.map(image => `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          class="gallery-image"
          src="${image.webformatURL}"
          alt="${image.tags}"
          loading="lazy"
        />
      </a>
      <div class="gallery-info">
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
      </div>
    </li>
  `).join('');

  galleryEl.innerHTML = markup; // можно заменить на insertAdjacentHTML для добавления

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderWrapper.style.display = 'flex';
}

export function hideLoader() {
  loaderWrapper.style.display = 'none';
}
