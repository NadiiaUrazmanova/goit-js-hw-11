import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api'
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';



const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');


function createGalleryByQuery() {
    formEl.addEventListener('submit', function (e) {
        e.preventDefault();

        const query = inputEl.value.trim();

        if (query.trim() === '') {
            iziToast.error({
                title: 'Error',
                message: 'Please enter search images name',
                position: 'topRight',
            });
            return;
        }
        clearGallery();
        showLoader();

        getImagesByQuery(query)
            .then(data => {
                
            if(data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
        }
            else {
                createGallery(data.hits);
            }
            })
        .catch(error => {
        console.error(error);
   })
      .finally(() => {
        hideLoader();
      });
  });
}
createGalleryByQuery();