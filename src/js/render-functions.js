import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
  <a href='${largeImageURL}'>
    <img class="gallery-image" src='${webformatURL}' alt ='${tags}'>    
  </a>
  <div class="info">
  <p><span class="label">Likes:</span> ${likes}</p>
  <p><span class="label">Views:</span> ${views}</p>
  <p><span class="label">Comments:</span> ${comments}</p>
  <p><span class="label">Downloads:</span> ${downloads}</p>
</div>
</li>`
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
}
export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('is-hidden');
  }
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('is-hidden');
  }
}
