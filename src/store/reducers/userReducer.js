import {UPDATE_USERS} from '../actions/usersActions.js';

const userReducer = (state={}, {type, payload}) =>{
    switch (type){

    case UPDATE_USERS:
        return payload;

    default:
        return state;};
};

export default userReducer;
