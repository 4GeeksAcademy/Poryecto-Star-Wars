const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			people: null,
			vehicles: null,
			planets: null,

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
      favorites: [
         
      ]
		},
		actions: {

			getPeople: () => {

				return fetch(`${URL}/people`)
				  .then(response => response.json())
				  .then(data => setStore({people: data.results}))
				  .catch(error => {
					console.error('Error:', error);
					
				  });
			  },

			  getVehicles: () => {

				return fetch(`${URL}/vehicles`)
				  .then(response => response.json())
				  .then(data => setStore({vehicles: data.results}))
				  .catch(error => {
					console.error('Error:', error);
					
				  });
			  },

			  getPlanets: () => {

				return fetch(`${URL}/planets`)
				  .then(response => response.json())
				  .then(data => setStore({planets: data.results}))
				  .catch(error => {
					console.error('Error:', error);
					
				  });
			  },

      addFavorite: (favorite) => {
       const store = getStore();
       setStore({favorites: [...store.favorites, favorite]});
      },
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;


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


