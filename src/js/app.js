var React = require('react'),
    CircularProgress = require('./components/CircularProgress.react');

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

React.render(
    <InputDemo/>,
    document.getElementById('container')
);
