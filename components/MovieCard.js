/**
 * Created by Maple on 17/3/25.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import Star from 'material-ui/svg-icons/toggle/star';
import StarHalf from 'material-ui/svg-icons/toggle/star-half';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const style = {
    mainDiv: {
        height: '292px',
        width: '180px',
        margin: '10px 12px'
    },
    paper: {
        height: '100%',
        borderRadius: '12px',
    },
    movieDataDiv: {
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
    },
    movieImgDiv: {
        height: '252px',
        position: 'relative'
    },
    movieImg: {
        height: '252px',
        width: '180px',
        borderRadius: '8px 8px 0 0',
        objectFit: 'cover',
    },
    ratingDiv: {
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        width: '70px',
        height: '80px',
        border: '1.8px solid #fff',
        borderRadius: '6px',
        background: 'rgba(0, 0, 0, 0.3)',
        color: '#fff',
        textAlign: 'center',
    },
    ratingValueDiv: {
        fontSize: '27px'
    },
    ratingValueP: {
        margin: '0 0 0 0'
    },
    star: {
        width: '13px',
        height: '13px',
        color: 'rgb(255, 172 ,45)'
    },
    ratingSumP: {
        margin: '0',
        fontSize: '12px',
    },
    movieNameDiv: {
        height: '40px',
        textAlign: 'center',

        display: '-webkit-flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    movieNameP: {
        padding: '0 1px',
        color: '#37a',
        fontSize: '10px',
    }
};

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
        return [rating, rating, rating, rating, rating].map((rating, index) => {
            if (rating >= 2 + index * 2) {
                return <Star key={index} style={style.star}/>
            } else if (rating < index * 2) {
                return <StarBorder key={index} style={style.star}/>
            } else return <StarHalf key={index} style={style.star}/>
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
            <div style={style.mainDiv}>
                <Paper
                    style={style.paper}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                    zDepth={this.state.shadow}
                >
                    <div style={style.movieDataDiv}>
                        <div style={style.movieImgDiv}>
                            <img
                                style={style.movieImg}
                                src={'http://localhost:3000/img/' + doubanId + '.jpg'}
                                alt='img'
                            />
                            <div style={style.ratingDiv}>
                                <div style={style.ratingValueDiv}>
                                    <p style={style.ratingValueP}>
                                        {rating.toFixed(1)}
                                    </p>
                                </div>
                                <div>
                                    {this.renderStars(rating)}
                                </div>
                                <div>
                                    <p style={style.ratingSumP}>
                                        {rating_count}人
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={style.movieNameDiv}>
                            <p style={style.movieNameP}>
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