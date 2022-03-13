import axios from 'axios';
export const starships_url = 'https://swapi.dev/api/starships';

export const getAllStarships = async () => {
  return await axios.get(starships_url);
};
