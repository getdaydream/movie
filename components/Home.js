/**
 * Created by Maple on 17/3/9.
 */
import React from 'react';
import style from './Home.css';

export default class Home extends React.Component {

    render() {
        return (
            <div className={style.root}>
                <div className={style.textMain}>
                    <div className={style.textBox}>
                        <p className={style.quote}>
                            人如果不知道自己身处在何处，是无法前进的。
                        </p>
                        <div className={style.reference}>
                            <span className={style.span}>
                                ——
                            </span>
                            <a
                                className={style.title}
                                href="https://movie.douban.com/subject/26602304/"
                                target="_blank">
                                《重版出来！》
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}