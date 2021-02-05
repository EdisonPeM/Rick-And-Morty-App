import Client from './HTTPClient';

export const BASE_URL = 'https://rickandmortyapi.com/api/';
const RickApi = new Client(BASE_URL);

export function getCharacters({
  page = '', // Valores por defecto
  name = '', // cuando no se pasa la vriable tomará el valor por defecto
  status = '',
  species = '',
  gender = '',
}) {
  const URL_PARAMS = new URLSearchParams({
    page,
    name,
    status,
    species,
    gender,
  });

  return RickApi.get(`character?${URL_PARAMS}`);
}

export function getCharacterById({ id = 0 }) {
  return RickApi.get(`character/${id}`);
}

export function getLocations(params) {
  const URL_PARAMS = new URLSearchParams(params);
  return RickApi.get(`locations?${URL_PARAMS}`);
}

export function getEpisodes(params) {
  const URL_PARAMS = new URLSearchParams(params);
  return RickApi.get(`episodes?${URL_PARAMS}`);
}
