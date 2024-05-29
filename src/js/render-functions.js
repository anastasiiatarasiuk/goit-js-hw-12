import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.images-container');

let lightbox;

function imageTemplate(image) {
  return `<li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
      <img 
        class="gallery-image" 
        src="${image.webformatURL}" 
        alt="${image.tags}" 
      />
    </a>
    <div class="img-details-box">
      <p class="detail-item"><b class="detail-title">Likes:</b> ${image.likes}</p>
      <p class="detail-item"><b class="detail-title">Views:</b> ${image.views}</p>
      <p class="detail-item"><b class="detail-title">Comments:</b> ${image.comments}</p>
      <p class="detail-item"><b class="detail-title">Downloads:</b> ${image.downloads}</p>
    </div>
    </li>
  `;
}

function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}

export function renderImages(images) {
  const markup = imagesTemplate(images);
  gallery.insertAdjacentHTML('beforeend', markup);
  if (!lightbox) {
    lightbox = new SimpleLightbox('.images-container a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}
