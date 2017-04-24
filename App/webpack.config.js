var path = require('path');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
//css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [//唯一入口文件
		'webpack/hot/only-dev-server',
		'./index.js'
	],
	output: {//输出目录
		path: path.resolve(__dirname, './dist'),//打包后的js文件存放的地方
		filename: 'bundle.js',//打包后输出的js的文件名
		publicPath: '/dist/'
	},
	module: {
		//loaders加载器
		loaders: [{
			test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
			exclude: '/node_modules/', //屏蔽不需要处理的文件（文件夹）（可选）
			loaders: ['babel-loader?presets[]=react']//loader的名称（必须）
		},{
			test: /\.css$/,
			exclude: '/node_modules/',
			loader: 'style-loader!css-loader?sourceMap',
			// loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
		},{
		  test: /\.scss$/,
		  exclude: /node_modules/,
		  loader: 'raw-loader!sass-loader',
		  // loader: ExtractTextPlugin.extract({fallback: 'raw-loader!sass-loader', use: 'raw-loader!sass-loader'}) //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
		},{
		  test: /\.html$/,
		  exclude: /node_modules/,
		  loader: 'raw-loader'
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ProgressBarPlugin(),
		new ExtractTextPlugin("style.css"), //提取出来的样式放在style.css文件中
		new webpack.DefinePlugin({
	  		'process.env': {
		    	'NODE_ENV': '"production"'
	  		}
		})    
	],
	devServer: {
		stats: 'errors-only'
	}	
};