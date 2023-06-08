const URL = 'https://swapi.tech/api';

export const getPeople = () => {

  return fetch(`${URL}/people`)
    .then(response => response.json())
    .then(data => data.results)
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
};

export const getVehicles = () => {

    return fetch(`${URL}/vehicles`)
      .then(response => response.json())
      .then(data => data.results)
      .catch(error => {
        console.error('Error:', error);
        return [];
      });
  };

  export const getPlanets = () => {

    return fetch(`${URL}/planets`)
      .then(response => response.json())
      .then(data => data.results)
      .catch(error => {
        console.error('Error:', error);
        return [];
      });
  };