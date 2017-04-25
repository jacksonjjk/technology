var {REGISTER} = require('../constants/counterConstant.js');

//增加
exports.register = function(){
	return {
		type: REGISTER
	}
}
