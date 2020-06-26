const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',      // production일 때는 hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js']
    },

    entry: {
        app: './client',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: []
            }
        }]
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    }
};