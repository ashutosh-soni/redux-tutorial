import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./store/index.js";
import update_person from "./store/actions/personActions.js";
import update_game from "./store/actions/gameActions.js";
import {connect} from "react-redux";
import fetch_user from './store/actions/usersActions.js';


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
            Users: <button onClick= {props.fetchUsers}> Fetch Users</button>
            <br/>
            {
                props.users.length === 0 ? <p>No User Found</p>:
                props.users.map(user => <p> {user.id} - {user.first_name} - {user.email}</p>)

            }
            
          </div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        game: state.game,
        person: state.person,
        users:state.users
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateGame: () =>{dispatch(update_game);},
        updatePerson: () => {dispatch(update_person);},
        fetchUsers: () => {dispatch(fetch_user);}
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
