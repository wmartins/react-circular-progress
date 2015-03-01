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
            dashOffset = dashArray - dashArray * this.props.percentage / 100;

        return (
            <svg
                className="CircularProgress"
                width={this.props.r * 2}
                height={this.props.r * 2}
                viewBox={viewBox}>
                <circle
                    className="CircularProgress-Bg"
                    cx={this.props.r}
                    cy={this.props.r}
                    r={this.state.r}
                    strokeWidth={this.props.strokeWidth + "px"} />
                <circle
                    className="CircularProgress-Fg"
                    cx={this.props.r}
                    cy={this.props.r}
                    r={this.state.r}
                    strokeWidth={this.props.strokeWidth + "px"}
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }} />
                    <text
                        className="CircularProgress-Text"
                        x={this.props.r}
                        y={this.props.r}
                        dy=".4em"
                        textAnchor="middle">{this.props.percentage + "%"}</text>
            </svg>
        );
    }
});
