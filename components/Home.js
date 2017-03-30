/**
 * Created by Maple on 17/3/9.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import style from './Home.css';

const inlineStyle = {
    appBar: {
        position: 'fixed',
        top: 0,
        backgroundColor: '#fff',
    }
};

export default class Home extends React.Component {

    render() {
        return (
            <div className={style.root}>
                <AppBar
                    style={inlineStyle.appBar}
                />
                <div className={style.mainContent}>
                    <div className={style.background}>
                        <div className={style.textBoxRoot}>
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
                </div>
            </div>
        )
    }
}