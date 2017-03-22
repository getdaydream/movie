/**
 * Created by Maple on 17/3/21.
 */
import { Map } from 'immutable';

const initialState = Map({count: 0});

const sum = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SUM':
            return state.set('count', state.get('count') + 1);
            break;
        default:
            return state
    }
};

export default sum;