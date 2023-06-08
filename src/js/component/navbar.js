import React from "react";
import { Link } from "react-router-dom";
import logoStarWars from '../../img/logo.starWars.png';


export const Navbar = ({ text, botonClick }) => {



  return (
    <nav className="navbar navbar-light bg-light mb-3">

        <img className='logo-star-wars'
	           src={logoStarWars}
	           alt='Logo Star Wars'/>
			   
			   <button className={`${botonClick} btn btn-primary`} onClick={botonClick}>
            {text}
          </button>
        
     
    </nav>
  );
};

