import { formEls, loadMoreBtn } from './refs';
import { onFormSubmit, onLoadMore } from './addeventlisteners';

formEls.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);
