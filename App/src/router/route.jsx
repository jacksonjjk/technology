import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
import indexComponent from '../components/indexComponent.js'
import classComponent from '../components/classComponent.js'
import myComponent from '../components/myComponent.js'
import cartComponent from '../components/cartComponent.js'

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={indexComponent}/>
        <Route path="/class" component={classComponent}/>
        <Route path="/my" component={myComponent}/>
        <Route path="/cart" component={cartComponent}/>

    </Router>
);

export default RouteConfig;