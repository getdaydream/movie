/**
 * Created by Maple on 17/3/5.
 */
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, hashHistory } from 'react-router';

import {routes} from './routes';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const content = (
    <Router history={hashHistory} routes={routes} />
);

const renderRoot = () => ReactDOM.render(
    <AppContainer>{content}</AppContainer>,
    document.getElementById('root')
);

renderRoot();


if (module.hot) {
    module.hot.accept('./routes', renderRoot());
}