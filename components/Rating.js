/**
 * Created by Maple on 17/4/11.
 */
import React from 'react';
import Star from 'material-ui/svg-icons/toggle/star';
import StarHalf from 'material-ui/svg-icons/toggle/star-half';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import style from './Rating.css';

export default class Rating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: new Array(5).fill('star-border')
        }
    }

    handleMouseOver = (index) => {

        const newRating = new Array(index + 1).fill('star').concat(new Array(4 - index).fill('star-border'));

        this.setState({
            rating: newRating
        });
    };

    handleMouseOut = () => {
        const newRating = new Array(5).fill('star-border');

        console.log('haha');

        this.setState({
            rating: newRating
        })
    };

    render() {
        return (
            <div className={style.root}>
                {this.state.rating.map((v, index) => {
                    switch (v) {
                        case 'star-border':
                            return <StarBorder
                                key={index}
                                onMouseOver={() => this.handleMouseOver(index)}
                                onMouseOut={this.handleMouseOut}
                            />;
                            break;
                        case 'star-half':
                            return <StarHalf
                                key={index}
                            />;
                            break;
                        case 'star':
                            return <Star
                                key={index}
                            />;
                            break;
                        default:
                    }
                })}
            </div>
        )
    }
}

