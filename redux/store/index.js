/**
 * Created by Maple on 17/3/29.
 */
import configureStore from './configureStore';

//配置redux-dev-tool
const initialState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//使用redux-thunk处理异步action
const store = configureStore(initialState);
export default store;