require('babel-polyfill');

module.exports = {
    context: __dirname + '/src',
    entry: {
        js: './js/app.react.js',
        html: './index.html'
    },

    module: {
        loaders: [
            {
                test: /\.react.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=react,presets[]=es2015'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
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
        path: __dirname + '/dist'
    }
};
