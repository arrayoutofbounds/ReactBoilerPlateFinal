var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory} = require('react-router');

// load Foundation
// need to use css loader as require cannot load in css file.
// need to use style loaded to inject css in to html
//require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation(); // fire off foundation

// app css load it after doing sass followed by css and style loaders
require('style!css!sass!applicationStyles');

// render the component
// weather component nested in main because we want to shown main when weather component is shown
// nest about component because we want to show main when we shoud about

// just home route will render main and index Route
// if its is /about then it will render main and then about component

// index route is rendered in main, if nothing else is rendered. Since timer is a child,
// it will be shown under main
ReactDOM.render(
  <p>boiler plate 3 project </p>,
  document.getElementById('app')
);
