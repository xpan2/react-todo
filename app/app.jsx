var React = require('react');
var ReactDOM = require('react-dom');
// es6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// es5
//var Route = require('react-router').Route;

// loading foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>React Boilerplate</p>,
  document.getElementById('app')
);
