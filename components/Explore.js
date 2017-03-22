/**
 * Created by Maple on 17/3/13.
 */
import React from 'react';
import MovieCard from './MovieCard';
import SelectorContainer from '../containers/SelectorContainer';

const style = {
    mainDiv: {
        position: 'relative',
        width: '100%'
    },
    selectorDiv: {
        position: 'relative',
        top: '6px',
        margin: '6px 12px 12px'
    },
    CardGridWrapperDiv: {
        width: '100%'
    },
    CardGridDiv: {
        width: 'fit-content',
        margin: 'auto',

        display: '-webkit-flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
    }
};

export default class Explore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieDataArray: [],
        }
    }

    componentDidMount() {
        const url = 'http://localhost:3000/tag/' + this.state.currentCategoryTag + '/' + this.state.currentCountryTag;


        fetch(url).then((response) => {
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
                    <SelectorContainer/>
                </div>
                <div style={style.CardGridWrapperDiv}>
                    <div style={style.CardGridDiv}>
                        {/*注意fetch数据前在此传递参数时this.state.movieDataArray中的各项还是undefined，直接传给子元素渲染会失败*/}
                        {this.state.movieDataArray.length !== 0 &&
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
            </div>
        )
    }
}