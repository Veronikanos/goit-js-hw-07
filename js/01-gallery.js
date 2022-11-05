import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map((item) => {
	return `
	<div class="gallery__item">
		<a class="gallery__link" href="${item.original}">
		<img 
			class="gallery__image" 
			src="${item.preview}"
			data-source="${item.original}"
			alt="${item.description}"/>
		</a>
	</div>
`;
});

galleryList.innerHTML = galleryMarkup.join('');

galleryList.addEventListener('click', onPictureClick);

function onPictureClick(e) {
	e.preventDefault();
	if (e.target.nodeName !== 'IMG') {
		return;
	}

	const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`);
	instance.show();

	galleryList.addEventListener('keydown', onEscBtnPress);

	function onEscBtnPress(e) {
		if (e.code === 'Escape') {
			instance.close();
		}
	}
}
