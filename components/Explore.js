/**
 * Created by Maple on 17/3/13.
 */
import React from 'react';
import Selector from './Selector';
import MovieCard from './MovieCard';

const style = {
    mainDiv: {

    },
    selectorDiv: {

    },
    movieCardDiv: {
        width: '100%',
        height: '100%',

        backgroundColor: 'rgb(235, 235, 235)',

        display: '-webkit-flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around'
    }
};

export default class Explore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieDataArray: []
        }
    }


    componentDidMount() {
        fetch('http://localhost:3000/tag/TV').then((response) => {
            if (response.ok) {
                response.json().then(movieDataArray => {
                    this.setState({
                        movieDataArray: movieDataArray
                    })
                })
            }
        })
    }

    //TODO conditional rendering
    // Warning: Each child in an array or iterator should have a unique "key" prop.
    render() {
        return (
            <div style={style.mainDiv}>
                <div style={style.selectorDiv}>
                    <Selector/>
                </div>
                <div style={style.movieCardDiv}>
                    {/*注意fetch数据前在此传递参数时this.state.movieDataArray中的各项还是undefined，直接传给子元素渲染会失败*/}
                    {this.state.movieDataArray.length != 0 &&
                    this.state.movieDataArray.map(function (movieData, index) {
                        return (
                            <MovieCard
                                key={index}
                                movieData={movieData}
                            />
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}