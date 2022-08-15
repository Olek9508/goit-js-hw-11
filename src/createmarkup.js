import { galleryContainer } from './refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const createSmallCardsMarkup = array => {
  galleryContainer.innerHTML = '';
  const arrayRender = array.reduce(
    (
      acc,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) =>
      acc +
      `<a href = "${largeImageURL}">
      <div class="photo-card">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes: ${likes}
</b>
        </p>
        <p class="info-item">
          <b>Views:${views}
 </b>
        </p>
        <p class="info-item">
          <b>Comments:${comments}
</b>
        </p>
        <p class="info-item">
          <b>Downloads:${downloads}
</b>
        </p>
      </div>
    </div>
    </a>`,
    ''
  );
  galleryContainer.innerHTML = arrayRender;
  const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    animationSpeed: 250,
  });

  lightBox.refresh();
};

export { createSmallCardsMarkup };
