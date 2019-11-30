import {createStore, combineReducers} from "redux";
import gameReducer from "./reducers/gameReducer.js";
import personReducer from "./reducers/personReducer.js";

const AllReducers = combineReducers({game:gameReducer, person:personReducer});

const InitialStates = {
    game: {name: "Football"},
    person: {name: "Sarthak"}
};

const store= createStore(AllReducers, InitialStates,
                         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;