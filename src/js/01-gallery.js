// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
// with  node_modules\simplelightbox
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryConteiner = document.querySelector('.gallery');
const picturesMarkup = createPicturesCardsMarkup(galleryItems);

galleryConteiner.insertAdjacentHTML('beforeend', picturesMarkup);

function createPicturesCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
		<a class="gallery__item" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				alt="${description}"
			/>
		</a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: '250',
});
