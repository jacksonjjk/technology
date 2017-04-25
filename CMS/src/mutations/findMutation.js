import $ from 'jquery'
import {baseUrl} from '../../libs/baseURL.js'
export default function(state,value){
	$.ajax({
		url:baseUrl+'Fruits/serverPHP/DAL/Find/Find.php',
		dataType:'jsonp',
		jsonpCallback:'demo',
		success:function(res){
			state.findAjax = JSON.parse(res)
			return state
		}
	})
}