/**
 * Created by Maple on 17/3/25.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import Star from 'material-ui/svg-icons/toggle/star';
import StarHalf from 'material-ui/svg-icons/toggle/star-half';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import style from './MovieCard.css';

export default class MovieCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shadow: 1
        }
    }

    onMouseOver = () => {
        this.setState({shadow: 3});
    };

    onMouseOut = () => {
        this.setState({shadow: 1});
    };

    renderStars = (rating) => {
        return new Array(5).fill(rating).map((rating, index) => {
            if (rating >= 2 + index * 2) {
                return <Star key={index} style={{width: '13px', height: '13px', color: '#FFAC2D'}}/>
            } else if (rating < index * 2) {
                return <StarBorder key={index} style={{width: '13px', height: '13px', color: '#FFAC2D'}}/>
            } else return <StarHalf key={index} style={{width: '13px', height: '13px', color: '#FFAC2D'}}/>
        });
    };

    render() {

        const {
            doubanId,
            rating,
            rating_count,
            title,
            year
        } = this.props;

        return (
            <div className={style.root}>
                <Paper
                    style={{height: '100%', borderRadius: '12px',}}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                    zDepth={this.state.shadow}
                >
                    <div className={style.movieData}>
                        <div className={style.movieImgDiv}>
                            <img
                               className={style.movieImg}
                                src={'http://localhost:3000/img/' + doubanId + '.jpg'}
                                alt='img'
                            />
                            <div className={style.ratingData}>
                                <div style={style.ratingValueDiv}>
                                    <p className={style.ratingText}>
                                        {rating.toFixed(1)}
                                    </p>
                                </div>
                                <div>
                                    {this.renderStars(rating)}
                                </div>
                                <div>
                                    <p className={style.ratingCountText}>
                                        {rating_count}人
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.movieNameDiv}>
                            <p className={style.movieNameText}>
                                {title.split(' ')[0]}
                                { year ? '(' + year + ')' : ''}
                            </p>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}