import { refs } from './index';
import Notiflix from 'notiflix';
import { render, createMarkup } from './render';

function createList(list) {
  if (list.length > 10) {
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (list.length > 1 && list.length <= 10) {
    refs.containerEls.innerHTML = '';
    refs.listEls.innerHTML = '';
    return createMarkup(list);
  } else {
    refs.containerEls.innerHTML = '';
    refs.listEls.innerHTML = '';
    render(list);
  }
}

export { createList };
