// import Notiflix from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { createList } from './createlist';
// import { render, createMarkup } from './render';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
  listEls: document.querySelector('.country-list'),
  containerEls: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener(
  'input',
  debounce(onSearchCountries, DEBOUNCE_DELAY)
);

function onSearchCountries(event) {
  const target = event.target.value;
  const targetValue = target.toLowerCase().trim();

  fetchCountries(targetValue)
    .then(createList)
    .catch(error => console.log(error));
}

export { refs };
