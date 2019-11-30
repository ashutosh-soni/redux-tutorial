import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import gameReducer from "./reducers/gameReducer.js";
import personReducer from "./reducers/personReducer.js";
import userReducer from "./reducers/userReducer.js";
import thunk from "redux-thunk";

const AllReducers = combineReducers({game:gameReducer,
                                     person:personReducer,
                                     users:userReducer});

const InitialStates = {
    game: {name: "Football"},
    person: {name: "Ashutosh Soni", email:"viknat1994@gmail.com"},
    users: []
};

const middleware = [thunk];


const store= createStore(AllReducers,
                         InitialStates,
                         compose(applyMiddleware(...middleware),
                                 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
