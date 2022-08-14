import Notiflix from 'notiflix';
import { galleryContainer, loadMoreBtn } from './refs';
import { createSmallCardsMarkup } from './createmarkup';

function onResponseCheck(response) {
  const dataRef = response.data.hits;
  const createHits = response.data.totalHits;
  const checkAmount = 40;
  if (createHits > checkAmount) {
    loadMoreBtn.classList.remove('hide');
  } else {
    loadMoreBtn.classList.add('hide');
  }
  if (createHits !== 0) {
    Notiflix.Notify.success(`Hooray! We found ${createHits} images`);
    createSmallCardsMarkup(dataRef);
  } else {
    galleryContainer.innerHTML = '';
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again'
    );
  }
}

export { onResponseCheck };
