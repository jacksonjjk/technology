//自己的算法
import $ from "jquery";
import {baseUrl} from '../../libs/baseURL.js'
export default function(state, value) {
	console.log(value);
	var arr = [];
	$.ajax({
		type: "GET",
		url: baseUrl+"Fruits/serverPHP/DAL/main/main.php?val=" + value,
		dataType: "jsonp",
		async: 'false',
		success: function(res) {
			state.data2 = JSON.parse(res);
			//			console.log(state.data1);
			return state
		}
	});
	return state
}