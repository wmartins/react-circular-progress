var React = require('react');

module.exports = React.createClass({
    getDefaultProps: function() {
        return {
            r: 50,
            percentage: 50,
            strokeWidth: 1
        };
    },
    getInitialState: function() {
        return {
            percentage: parseInt(this.props.percentage, 10),
            r: this.props.r - this.props.strokeWidth / 2
        };
    },
    render: function() {
        var width = this.props.r * 2,
            height = this.props.r * 2,
            viewBox = "0 0 " + width + " " + height,
            dashArray = this.state.r * Math.PI * 2,
            dashOffset = dashArray - dashArray * this.state.percentage / 100;

        return (
            <svg
                width={this.props.r * 2}
                height={this.props.r * 2}
                viewBox={viewBox}>
                <circle
                    cx={this.props.r}
                    cy={this.props.r}
                    r={this.state.r}
                    stroke="red"
                    strokeWidth={this.props.strokeWidth + "px"}
                    fill="transparent"
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }} />
            </svg>
        );
    }
});
