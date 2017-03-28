/**
 * Created by Maple on 17/3/28.
 */
export const path = (state = 'Home', action) => {
    switch (action.type) {
        case 'CHANGE_PATH':
            return action.path;
        break;
        default:
            return state;
    }
};