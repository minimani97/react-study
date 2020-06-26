const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const WordRelay = require('./WordRelay_hooks');

const Hot = hot(WordRelay);

ReactDom.render(<Hot />, document.querySelector('#root'));