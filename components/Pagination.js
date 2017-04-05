/**
 * Created by Maple on 17/4/5.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import TextField from 'material-ui/TextField';
import style from './Pagination.css';

const inlineStyle = {
   textField: {
        width: '35px',
    },
};

export default class Pagination extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            inputPage: 1
        }
    }

    handleChange = (event) => {
       this.setState({
           inputPage: event.target.value,
       });
    };

    handleEnter = () => {
        const { pageCount } =this.props;
        const re = /^[0-9]*[1-9][0-9]*$/ ;
        if (re.test(event.target.value)) {
            if (inputPage > 0 && inputPage < pageCount + 1) {
                this.setState({
                    currentPage: event.target.value,
                });
            } else if (inputPage > pageCount) {
                this.setState({
                    currentPage: pageCount,
                });
            }
        } else {
            this.setState({
                currentPage: 1
            })
        }
    };

    render() {
        const {
            pageCount
        } = this.props;

        switch (pageCount) {
            case 0:
            case 1:
                return (
                    <div>

                    </div>
                );
                break;
            default:
                return (
                    <div className={style.root}>
                        <RaisedButton
                            label='上一页'
                            icon={<NavigateBefore/>}
                        />
                        <RaisedButton
                            label='下一页'
                            labelPosition='before'
                            icon={<NavigateNext/>}
                        />
                        <span>
                            {`共${pageCount}页`}
                        </span>
                        <span>
                            到第
                        </span>
                        <TextField
                            style={inlineStyle.textField}
                            inputStyle={{textAlign: 'center'}}
                            id='page-count-input'
                            value={this.state.inputPage}
                            onChange={this.handleChange}
                        />
                        <span>
                            页
                        </span>
                        <RaisedButton
                            label='确定'
                        />
                    </div>
                )
        }
    }
}