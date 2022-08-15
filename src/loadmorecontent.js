import Notiflix from 'notiflix';
import { galleryContainer, loadMoreBtn } from './refs';
import { infiniteScroll } from './infinitescroll';
import { createSmallCardsMarkup } from './createmarkup';

function renderAdditionalContent(response, currentPage) {
  const checkAmount = 40;
  const dataRef = response.data.hits;
  const createHits = response.data.totalHits;
  const totalPages = createHits / checkAmount;
  if (currentPage > totalPages) {
    loadMoreBtn.classList.add('hide');
    Notiflix.Notify.info(
      'We are sorry, but you have reached the end of search results'
    );
  }
  createSmallCardsMarkup(dataRef);
  infiniteScroll(galleryContainer);
}

export { renderAdditionalContent };
