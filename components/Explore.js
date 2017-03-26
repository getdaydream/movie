/**
 * Created by Maple on 17/3/13.
 */
import React from 'react';
import SelectorContainer from './containers/SelectorContainer';
import MovieCardGridContainer from './containers/MovieCardGridContainer';
import style from './Explore.css';

export default class Explore extends React.Component {

    //TODO conditional rendering
    render() {
        return (
            <div className={style.root}>
                <div className={style.selector}>
                    <SelectorContainer/>
                </div>
                <div className={style.cardGrid}>
                    <MovieCardGridContainer/>
                </div>
            </div>
        )
    }
}