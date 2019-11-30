import personReducer from './personReducer.js';
import {UPDATE_PERSON} from '../actions/personActions.js';

describe('reducer',()=>{
    it('should update person name only', ()=> {
        expect(
            personReducer({}, {
                type: UPDATE_PERSON,
                payload: 'bitfumes'
            })
        )
            .toEqual({name:'bitfumes'});
    });
});
