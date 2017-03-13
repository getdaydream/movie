/**
 * Created by Maple on 17/3/13.
 */
import React from 'react';

export default class Explore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: 'movie',
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/explore').then((response) => {
            if (response.ok) {
                response.json().then(data => {
                    console.log(data);
                    this.setState({
                        category: data.title
                    })
                })
            }
        })
    }

    render() {
        return (
            <p>
                it's explore {this.state.category}!
            </p>
        )
    }
}