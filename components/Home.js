/**
 * Created by Maple on 17/3/9.
 */
import React from 'react';

const style = {
    movieCardDiv: {
        width: '100%',
        height: '100%',
        backgroundImage: 'url(../src/img/p1835.jpg)',
        backgroundSize: 'cover',
        position: 'relative',
    },
    //TODO: layout refine
    textMainDiv: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingBottom: '40px',
        paddingTop: '3rem',

        color: '#000',
        backgroundColor: '#fff',
        fontFamily: 'STFangsong,Fangsong,FangSong_GB2312,STSong,serif',
        textAlign: 'center'
    },
    textBoxDiv: {
        maxWidth: '1024px',
        padding: '0 1.5rem',
        margin: '0 auto'
    },
    quoteP: {
        margin: 0,
        //p本身有margin
        fontSize: 'calc(1.7rem + 3 * (100vw - 414px) / 952)',
        textAlign: 'center',
        lineHeight: 1.5,
    },
    aDiv: {
        width: '100%',
        textAlign: 'right',
        fontSize: 'calc(1.0rem + 2.7 * (100vw - 414px) / 952)',
        marginTop: '1.5rem',
    },
    span: {
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'
    },
    deriveA: {
        width: '100%',
        margin: 0,
        color: 'inherit',
        textDecoration: 'none',
        // cursor: 'auto'
    }
 };

export default class Home extends React.Component {

    render() {
        return (
            <div style={style.movieCardDiv}>
                <div style={style.textMainDiv}>
                    <div style={style.textBoxDiv}>
                        <p style={style.quoteP}>
                            人如果不知道自己身处在何处，是无法前进的。
                        </p>
                        <div style={style.aDiv}>
                            <span style={style.span}>
                                ——
                            </span>
                            <a style={style.deriveA}
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