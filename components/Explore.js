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
            movieDataArray: [],
            currentCategoryTag: '全部',
            currentCountryTag: '全部',
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

    updateViewOnTagChanged() {
        // const url = 'http://localhost:3000/tag/' + this.state.currentCategoryTag + '/' + this.state.currentCountryTag;

        const url = 'http://localhost:3000/tag/TV/日本';

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

    handleOnClickCategoryButton(tag) {
        //此方法是异步的异步，执行后并不能马上获得下一状态
        this.setState({
            currentCategoryTag: tag,
        });
        // 这时的 currentCategoryTag 并不会马上改变
        // console.log(this.state.currentCategoryTag);
    }

    handleOnClickCountryButton(tag) {
        this.setState({
            currentCountryTag: tag
        });
    }

    //TODO conditional rendering
    // Warning: Each child in an array or iterator should have a unique "key" prop.
    render() {
        return (
            <div style={style.mainDiv}>
                <div style={style.selectorDiv}>
                    <Selector
                        currentCategoryTag={this.state.currentCategoryTag}
                        currentCountryTag={this.state.currentCountryTag}
                        handleOnClickCategoryButton={(tag) => this.handleOnClickCategoryButton(tag)}
                        handleOnClickCountryButton={(tag) => this.handleOnClickCountryButton(tag)}
                    />
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