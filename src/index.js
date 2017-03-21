/**
 * Created by Maple on 17/3/5.
 */
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, browserHistory } from 'react-router';
import {routes} from './routes';

// Needed for onTouchTap
//material-ui所需要的插件
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


//使用redux-thunk处理异步action
const store = configureStore();

const root = (
    <Router history={browserHistory} routes={routes}/>
);

const renderRoot = () => ReactDOM.render(
    <Provider store={store}>
        <AppContainer>{root}</AppContainer>
    </Provider>,
    document.getElementById('root')
);

renderRoot();


if (module.hot) {
    module.hot.accept('./routes', renderRoot());
}