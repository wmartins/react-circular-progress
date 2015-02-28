var React = require('react'),
    CircularProgress = require('./components/CircularProgress.react');

React.render(
    <CircularProgress
        strokeWidth="4"
        percentage="95" />,
    document.getElementById('container')
);
