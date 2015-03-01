var React = require('react'),
    CircularProgress = require('./components/CircularProgress.react');

React.render(
    <CircularProgress
        strokeWidth="10"
        r="80"
        percentage="30" />,
    document.getElementById('container')
);
