/**
 * Created by Maple on 17/3/13.
 */
import React from 'react';
import MovieCard from './MovieCard';

export default class Explore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieData: {}
        }
    }


    componentDidMount() {
        fetch('http://localhost:3000/explore').then((response) => {
            if (response.ok) {
                response.json().then(movieData => {
                    console.log(movieData);
                    this.setState({
                        movieData: movieData
                    })
                })
            }
        })
    }

    render() {
        return (
            <MovieCard movieData={this.state.movieData}/>
        )
    }
}