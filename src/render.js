import { refs } from './index';

const render = array => {
  refs.containerEls.innerHTML = '';
  refs.listEls.innerHTML = '';
  const arrayBox = array.reduce(
    (acc, { name, capital, population, flags, languages }) =>
      acc +
      `
      <div class = "container-little">    <img src = "${
        flags.svg
      }" alt = "" width = "40">
    <h1 class = "list-headline">${name.official}</h1></div>
    <ul>
    <li><b>Capital:</b><p>${capital}</p></li>
    <li><b>Population:</b><p>${population}</p></li>
    <li><b>Language:</b><p>${Object.values(languages)}</p></li>
    </ul>
    `,
    ''
  );
  return (refs.containerEls.innerHTML = arrayBox);
};

const createMarkup = array => {
  refs.containerEls.innerHTML = '';
  refs.listEls.innerHTML = '';
  const arrayBox = array.reduce(
    (acc, { name, flags }) =>
      acc +
      `<li> <img src = "${flags.svg}" alt = "${name.official}" width = "40" height = "auto"><b Country:><p>${name.official}</p></b></li> `,
    ''
  );
  return (refs.listEls.innerHTML = arrayBox);
};

export { render, createMarkup };
