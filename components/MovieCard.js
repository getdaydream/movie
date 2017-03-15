/**
 * Created by Maple on 17/3/15.
 */
import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    mainDiv: {
        width: '50%'
    },
    paper: {

    },
    imgDiv: {
        maxWidth: '155px',
    },
    img: {
        width: '100%',
        objectFit: 'cover'
    }
};

export default class MovieCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div style={style.mainDiv}>
                <Paper style={style.paper}>
                    <p>
                        {this.props.movieData.name}
                        {this.props.movieData.year}
                    </p>
                    <div style={style.imgDiv}>
                        <img
                            style={style.img}
                            src={'http://localhost:3000/img/' + this.props.movieData.doubanId + '.jpg'}
                            alt='batman'
                        />
                    </div>

                </Paper>
            </div>
        )
    }
}

MovieCard.defaultProps = {

};