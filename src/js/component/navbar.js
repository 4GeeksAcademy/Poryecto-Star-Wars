import React from "react";
import { Link } from "react-router-dom";
import logoStarWars from '../../img/logo.starWars.png';


export const Navbar = ({ botonClick }) => {



  return (
    <nav className="navbar navbar-light bg-light mb-3">

      <img className='logo-star-wars'
        src={logoStarWars}
        alt='Logo Star Wars' />

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Favorites
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>


    </nav>
  );
};

