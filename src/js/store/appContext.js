import React, { useState, useEffect } from "react";
import {  getPeople, getPlanets, getVehicles} from "./flux.js";

import getState from "./flux.js";
import  Card  from "../component/card";
import { Footer } from "./component/footer";
import { Navbar } from "./component/navbar";
import { ScrollToTop } from "./component/scrollToTop";


export const Context = React.createContext(null);

const injectContext = PassedComponent => {
  const StoreWrapper = props => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions }
          })
      })
    );

    const [planets, setPlanets] = useState();
    const [vehicles, setVehicles] = useState();
    const [people, setPeople] = useState();

    useEffect(() => {
      const botonClick = () => {
       
      };
    }, []);

    return (
      <div className="App">
        <Navbar text="Favorites" botonClick={botonClick} />
        <PassedComponent {...props} />
      </div>
    );
  };
  return StoreWrapper;
};

export default injectContext;
