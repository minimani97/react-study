const path = require('path');
const webpack = require('webpack');

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
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'], // browserlist 에서 설정 문자열 확인 가능
                        },
                        debug: true,
                    }], 
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel'
                ]
            }
        }]
    },
    plugins: [],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    }
};