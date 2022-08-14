import axios from 'axios';

async function fetchLibrarySearch(searchValue, currentPage) {
  const BASE_URL = 'https://pixabay.com/api';
  const API_KEY = '29244012-a3c66d184bfa690c232ef78cc';
  const URL = `${BASE_URL}/?key=${API_KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${currentPage}`;
  const response = await axios.get(URL);
  return response;
}

export { fetchLibrarySearch };
