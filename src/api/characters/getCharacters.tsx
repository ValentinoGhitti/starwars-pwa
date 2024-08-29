import { FetchResponse  } from '../../types/types';

export const getCharacterData = async (page: number = 1): Promise<FetchResponse> => {
  const url = `https://swapi.dev/api/people/?page=${page}`;

  try {
    const response = await fetch(url);
    const data: FetchResponse = await response.json();
    return data;
  } catch (err) {
    console.error('error gettin pj data', err);
    throw err;
  }
};
