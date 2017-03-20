/**
 * Created by Maple on 17/3/13.
 */
import React from 'react';
import Selector from './Selector';
import MovieCard from './MovieCard';

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

    updateCardGridOnTagChanged() {
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

    handleOnClickCategoryButton(tag) {
        //setState执行是异步的，执行后并不能马上获得下一状态
        this.setState({
            currentCategoryTag: tag,
        }, function () {
            this.updateCardGridOnTagChanged();
        });
        // 这时的 currentCategoryTag 并不会马上改变
        // console.log(this.state.currentCategoryTag);
    }

    handleOnClickCountryButton(tag) {
        this.setState({
            currentCountryTag: tag
        }, function () {
            this.updateCardGridOnTagChanged();
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
                <div style={style.CardGridWrapperDiv}>
                    <div style={style.CardGridDiv}>
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
            </div>
        )
    }
}