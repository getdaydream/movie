/**
 * Created by Maple on 17/3/9.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Home from '../components/Home';
import MovieCardGridContainer from '../components/containers/MovieCardGridContainer';

export const routes = (
    <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='explore' component={MovieCardGridContainer}/>
    </Route>
);