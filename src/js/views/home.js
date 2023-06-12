import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(()=> {
		actions.getPeople();
		actions.getVehicles();
		actions.getPlanets();
	},[]);

   return(
	<div className="text-center mt-5">
	{console.log(store.people, store.vehicles, store.planets)}	
	</div>
	)
};
