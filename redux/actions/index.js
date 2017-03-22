/**
 * Created by Maple on 17/3/21.
 */
import * as types from '../../constants/ActionTypes';

export const changeDefaultTag = (index, tag) => {
    return {
        type: types.CHANGE_DEFAULT_TAG,
        index,
        tag
    }
};

export const clickButtonAndAdd = () => {
    console.log('haha ');
    return {
      type: 'ADD_SUM'
    }
};