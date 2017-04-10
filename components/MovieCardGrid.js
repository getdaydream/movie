/**
 * Created by Maple on 17/3/15.
 */
import React from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import style from './MovieCardGrid.css';

export default class MovieCardGrid extends React.Component {

    render() {
        const {items, selectMovie, count, pageIndex, pageSize } = this.props;

        return (
            <div className={style.root}>
                <div className={style.container}>
                    { items && items.map((item, index) => {
                        const data = {
                            id: item.get('id'),
                            rating: item.get('rating_data').get('rating'),
                            rating_count: item.get('rating_data').get('rating_count'),
                            title: item.get('title'),
                            year: item.get('year'),
                            selectMovie: selectMovie
                        };
                        return <MovieCard
                            key={index}
                            {...data}
                        />
                    })}
                    <Pagination
                        count={count}
                        pageSize={pageSize}
                        pageIndex={pageIndex}
                    />
                </div>
            </div>
        )

    }
}
