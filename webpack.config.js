require('babel-polyfill');

module.exports = {
    context: __dirname + '/src',

    entry: {
        js: './js/app.jsx.js',
        html: './index.html'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!cssnext-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },

    output: {
        filename: 'app.js',
        path: __dirname
    }
};
