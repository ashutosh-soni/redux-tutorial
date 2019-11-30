import {UPDATE_PERSON} from '../actions/personActions.js';

const personReducer = (state={}, {type, payload}) =>{
    switch (type){

    case UPDATE_PERSON:
        return {name:payload};

    default:
        return state;};
};

export default personReducer;
