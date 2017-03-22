/**
 * Created by Maple on 17/3/22.
 */
import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class TestButton extends React.Component {

    render() {


        const { value, onClickAdd } = this.props;
        console.log(value);

        return (
            <div>
                <FlatButton
                    label={value.get('count').toString()}
                    onClick={() => onClickAdd()}
                />
            </div>
        )
    }
}
