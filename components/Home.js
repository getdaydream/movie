/**
 * Created by Maple on 17/3/9.
 */
import React from 'react';

const style = {
    mainDiv: {
        width: '100%',
        position: 'relative'
    },
        img: {
        width: "100%",
        objectFit: "cover"
    },
    p: {
        position: 'absolute',
        bottom: 0,
        margin: 0,
        //p本身有margin
        height: '100px',
        zIndex: 2,
        backgroundColor: 'rgb(255, 255, 255)'
    }
 };

export default class Home extends React.Component {

    render() {
        return (
            <div style={style.mainDiv}>
                <img
                    style={style.img}
                    src="../src/img/p1835.jpg"/>
                <div>
                    <p
                        style={style.p}>
                        人如果不知道自己身处在何处，是无法前进的。
                    </p>
                    <p>
                        《重版出来！》
                    </p>
                </div>

            </div>
        )
    }
}