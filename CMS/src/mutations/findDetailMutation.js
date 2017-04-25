import $ from 'jquery'
import {
	baseUrl
} from '../../libs/baseURL.js'
export default function(state, value) {
	$.ajax({
		url: baseUrl + 'Fruits/serverPHP/DAL/FindDetail/FindDetail.php',
		type: "get",
		dataType: 'jsonp',
		success: function(res) {
			var newArr = [];
			$.ajax({
				url: baseUrl + 'Fruits/serverPHP/DAL/Find/Find.php',
				dataType: 'jsonp',
				jsonpCallback: 'demo',
				success: function(res) {
					var arrimg = JSON.parse(res);
					for(var k = 0; k < arrimg.length; k++) {
						if(arrimg[k].goodsId == value) {
							newArr.unshift(arrimg[k])
						}
					}
				}
			})

			var arr = JSON.parse(res);
			for(var i = 0; i < arr.length; i++) {
				if(arr[i].goodsType == value) {
					newArr.push(arr[i])
				}
			}
			state.findDetailAjax = newArr
			return state
		}
	})
}