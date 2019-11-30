import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./store/index.js";
import update_person from "./store/actions/personActions.js";
import update_game from "./store/actions/gameActions.js";


let updatePerson = () => {
    return store.dispatch(update_person);
}

let updateGame = () =>{
    return store.dispatch(update_game);
}

function App() {
  return (
    <div className="App">
      <div>
        <h1> Redux Tutorial </h1>
        Person Name: {store.getState().person.name}
        <button onClick={updatePerson}>Update Person </button>
        <br/>
        game Name: {store.getState().game.name}
        <button onClick={updateGame}>Update Game </button>
        <br/>
        
      </div>
      
    </div>
  );
}

export default App;
