/**
 * Created by Maple on 17/3/21.
 */

const tags = (state = {currentTags: ['电影', '电影']}, action) => {
  switch (action.type) {
      case 'CHANGE_DEFAULT_TAG':
          return Object.assign([0, 0], state.currentTags);
          break;
      default:
          return state
  }
};

export default tags;