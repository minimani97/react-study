const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        histpryApiFallback: true
    }
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: './client'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {browsers: ['last 2 chrome version']},
                        debug: true
                    }],
                    '@babel/preset-react'
                ],
                plugins: [
                    'react-hot-loader/babel',
                    '@babel/plugin-proposal-class-properties'
                ]
            }
        }]
    },
    plugins: [],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    }
}