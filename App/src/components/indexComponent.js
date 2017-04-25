var React = require('react');
var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

var indexComponent = React.createClass({

	render: function(){
		return (
			<div>
				<div>
					<ul>
						<li><Link to="/">主页</Link></li>
						<li><Link to="/class">分类</Link></li>
						<li><Link to="/cart">购物车</Link></li>
						<li><Link to="/my">我</Link></li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = indexComponent;

