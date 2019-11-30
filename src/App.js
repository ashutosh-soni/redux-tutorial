import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./store/index.js";
import update_person from "./store/actions/personActions.js";
import update_game from "./store/actions/gameActions.js";
import {connect} from "react-redux";


function App(props) {
    return (
        <div className="App">
          <div>
            <h1> Redux Tutorial </h1>
            Person Name: {props.person.name}
            <button onClick={props.updatePerson}>Update Person </button>
            <br/>
            game Name: {props.game.name}
            <button onClick={props.updateGame}>Update Game </button>
            <br/>

          </div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        game: state.game,
        person: state.person
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateGame: () =>{dispatch(update_game);},
        updatePerson: () => {dispatch(update_person);}
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
