import React from 'react';
import ReactDOM from 'react-dom';
import CircularProgress from './components/CircularProgress.react';

require('../css/main.css');

class InputDemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            percentage: 0
        };

        this.onPercentageKeyUp = this.onPercentageKeyUp.bind(this);
    }

    onPercentageKeyUp() {
        var percentageDOMNode = this.refs.percentage,
            value = parseInt(percentageDOMNode.value, 10) || 0;

        if(value < 0) {
            value = 0;
            domNode.value = value;
        }

        if(value > 100) {
            value = 100;
            domNode.value = value;
        }

        this.setState({
            percentage: value
        });
    }

    render() {
        return (
            <div className="Demo">
                <CircularProgress
                    strokeWidth="10"
                    radius="80"
                    percentage={this.state.percentage}/>
                <div>
                    <input
                        type="number"
                        ref="percentage"
                        onChange={this.onPercentageKeyUp}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <InputDemo/>,
    document.getElementById('container')
);
