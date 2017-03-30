/**
 * Created by Maple on 17/3/9.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Content from '../components/Content';
import Home from '../components/Home';
import SelectorContainer from '../components/containers/SelectorContainer';
import MovieCardGridContainer from '../components/containers/MovieCardGridContainer';
import MovieBarContainer from '../components/containers/MovieBarContainer';
import MovieContainer from '../components/containers/MovieContainer';

//named component 参数为components
export const routes = (
    <Route path='/' component={App} >
        <IndexRoute component={Home}/>
        <Route path='explore' component={Content}>
            <IndexRoute components={{
                barContent: SelectorContainer,
                mainContent: MovieCardGridContainer
            }}/>
            <Route path='movie/:id' components={{
                barContent: MovieBarContainer,
                mainContent: MovieContainer
            }}/>
        </Route>
    </Route>
);