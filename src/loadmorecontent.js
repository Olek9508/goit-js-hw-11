import Notiflix from 'notiflix';
import { galleryContainer } from './refs';
import { infiniteScroll } from './infinitescroll';
import { createSmallCardsMarkup } from './createmarkup';

function renderAdditionalContent(response, currentPage) {
  const dataRef = response.data.hits;
  const createHits = response.data.totalHits;
  const totalPages = createHits / checkAmount;
  if (currentPage > totalPages) {
    Notiflix.Notify.failure(
      'We are sorry, but you have reached the end of search results'
    );
  }
  createSmallCardsMarkup(dataRef);
  infiniteScroll(galleryContainer);
}

export { renderAdditionalContent };
