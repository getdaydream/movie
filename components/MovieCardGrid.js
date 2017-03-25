/**
 * Created by Maple on 17/3/15.
 */
import React from 'react';
import MovieCard from './MovieCard';
import styles from './MovieCardGrid.css';

export default class MovieCardGrid extends React.Component {
    render() {
        const {items} = this.props;

        return (
            <div className={styles.root}>
                {items.size !== 0 && items.map((item, index) => {
                    const data = {
                        doubanId: item.get('doubanId'),
                        rating: item.get('doubanRating').get('ratingValue'),
                        rating_count: item.get('doubanRating').get('ratingSum'),
                        title: item.get('name'),
                        year: item.get('year')
                    };
                    return <MovieCard
                        key={index}
                        {...data}
                    />
                })}
            </div>
        )

    }
}
