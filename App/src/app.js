import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import router from './router/route.jsx';
// import indexReducer from './redux/reducer/indexReducer.jsx'
// var redux = require('redux');

var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

// import {Provider} from 'react-redux';
 //路由配置
// import store from './Redux/Store/Store';

ReactDOM.render(
	<div>
		{router}

	</div>
	, document.querySelector('#content')
);
