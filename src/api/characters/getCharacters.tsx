import { CharacterData } from '../../types/types';

export const getCharacterData = async (character: string | number): Promise<CharacterData> => {
  const url = `https://swapi.dev/api/people/${character}/`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('error to fetch pjs data');
    }

    const data: CharacterData = await response.json();

    const characterData: CharacterData = {
      name: data.name,
      height: data.height,
      mass: data.mass,
      hair_color: data.hair_color,
      skin_color: data.skin_color,
      eye_color: data.eye_color,
      birth_year: data.birth_year,
      gender: data.gender,
      homeworld: data.homeworld,
      films: data.films,
      species: data.species,
      vehicles: data.vehicles,
      starships: data.starships,
      created: data.created,
      edited: data.edited,
      url: data.url,
    };

    return characterData;
  } catch (err) {
    console.error('error fetching sw pj data:', err);
    throw err;
  }
};
