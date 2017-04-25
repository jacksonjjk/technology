   export default {
   	    REGISTER:function(state, value){
            state.messages=value
        },
        RANDOM:function(state){
        	console.log(state,1)
        	var arrNum=[];
        	for(var i=0;i<4;i++){
        		arrNum.push(parseInt(Math.random()*10))
        	}
            var arrString =  arrNum.join('')
        	state.random=arrString;
        },
        USERSIGNIN:function(state,value){
        	var phoneNums = JSON.parse(value).phone;
        	var psw = JSON.parse(value).psw;
        	state.phoneNum=phoneNums;
        	state.psw=psw;
        },
        CHANGE:function(state){
        	state.phoneNum=""
        }
  }    
