var React = require('react'),
    ReactDOM = require('react-dom'),
    CircularProgress = require('./components/CircularProgress.react');

require('../css/main.css');

var InputDemo = React.createClass({
    getInitialState: function() {
        return {
            percentage: 0
        };
    },
    _onPercentageKeyUp: function() {
        var domNode = this.refs.percentage.getDOMNode(),
            value = parseInt(domNode.value, 10) || 0;

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
    },
    render: function() {
        return (
            <div className="Demo">
                <CircularProgress
                    strokeWidth="10"
                    r="80"
                    percentage={this.state.percentage}/>
                <div>
                    <input
                        type="number"
                        ref="percentage"
                        onKeyUp={this._onPercentageKeyUp}/>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <InputDemo/>,
    document.getElementById('container')
);
