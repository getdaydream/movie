/**
 * Created by Maple on 17/3/21.
 */
import { List } from 'immutable';

const initialState = List.of('全部', '全部');

const tags = (state = initialState , action) => {
  switch (action.type) {
      case 'CHANGE_DEFAULT_TAG':
          return state.set(action.index, action.tag);
          break;
      default:
          return state
  }
};

export default tags;