/**
 * Created by Maple on 17/3/9.
 */
import React from 'react';

const style = {
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
 };

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <img
                    style={style.img}
                    src="../src/img/p1835.jpg"
                />
            </div>
        )
    }
}