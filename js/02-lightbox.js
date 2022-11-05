import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map((item) => {
	return `
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
`;
});

galleryList.innerHTML = galleryMarkup.join('');

console.log(galleryList);

const lightbox = new SimpleLightbox('.gallery__item', {
	captionsData: 'alt',
	captionDelay: 250,
});
