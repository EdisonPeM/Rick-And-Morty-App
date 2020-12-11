import Client from './HTTPClient';

export const BASE_URL = 'https://rickandmortyapi.com/api/';
const RickApi = new Client(BASE_URL);

export function getCharacters(page) {
  return RickApi.get(`character?page=${page}`);
}
