import { fetchLibrarySearch } from './fetch&pagination';
import { renderAdditionalContent } from './loadmorecontent';
import { onResponseCheck } from './ckeckresponse';
import { galleryContainer, loadMoreBtn } from './refs';
import Notiflix from 'notiflix';

let elValue = null;
let currentPage = 1;

function onFormSubmit(event) {
  event.preventDefault();
  elValue = event.target.searchQuery.value.toLowerCase().trim();
  if (!elValue) {
    galleryContainer.innerHTML = '';
    loadMoreBtn.classList.add('hide');
    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again'
    );
  } else {
    galleryContainer.innerHTML = '';
    fetchLibrarySearch(elValue, currentPage)
      .then(onResponseCheck)
      .catch(error => error);
  }
}

function onLoadMore() {
  currentPage += 1;
  fetchLibrarySearch(elValue, currentPage)
    .then(response => renderAdditionalContent(response, currentPage))
    .catch(error => error);
}

export { onFormSubmit, onLoadMore };
