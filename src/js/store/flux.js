
const URL = 'https://swapi.tech/api';

const getPeople = () => {
  return fetch(`${URL}/people`)
    .then(response => response.json())
    .then(data => data.results)
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
};

const getVehicles = () => {
  return fetch(`${URL}/vehicles`)
    .then(response => response.json())
    .then(data => data.results)
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
};

const getPlanets = () => {
  return fetch(`${URL}/planets`)
    .then(response => response.json())
    .then(data => data.results)
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
};

export default {
  getPeople,
  getVehicles,
  getPlanets
};
