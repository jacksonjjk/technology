import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
//zm
import findGetters from '../getters/findGetter.js'
import findDetailGetters from '../getters/findDetaliGetter.js'
import findMutation from '../mutations/findMutation.js'
import findDetailMutation from '../mutations/findDetailMutation.js'
//dh
import gettersDh from '../getters/gettersDh.js'
import mutationDh from '../mutations/mutationDh.js'
//zb
import mutationDemo from '../mutations/mutationDemo.js'
import zzbmutation1 from '../mutations/zzbmutation1.js'
import zzbmutation2 from '../mutations/zzbmutation2.js'
import zzbmutation3 from '../mutations/zzbmutation3.js'
import zzbmutation4 from '../mutations/zzbmutation4.js'
import zzbmutation5 from '../mutations/zzbmutation5.js'
import zzbmutation6 from '../mutations/zzbmutation6.js'
import zzbgetters from '../getters/zzbgetters.js'
// tw
import ClassifyGetters from '../getters/ClassifyGetters.js'

import ClassifyMutations from '../mutations/ClassifyMutations.js'
//yw
import lisMutations from '../mutations/lis-mutations.js'
import lisGetters from '../getters/lis-getters.js'
Vue.use(Vuex)
const state = {
	count: 1,
	findAjax: 0,
	findDetailAjax: 0,
	count: 1,
	data: [],
	num: '',
	data1:'',
	data2:'',
	data3:'',
	data4:'',
	data5:'',
	data6:'',
	random:'',
	phoneNum:'',
	psw:''
};
const mutations = {
	findGetdata(state, value) {
		findMutation(state, value)
	},
	findDetailGetdata(state, value) {
		findDetailMutation(state, value)
	},
	ADDNUM(state, value) {
		mutationDh.addCount(state, value)
	},
	DECNUM(state, value) {
		mutationDh.decCount(state, value)
	},
	GETDATA(state, value) {
		mutationDh.getAjax(state, value)
	},
	BUY(state, value) {
		mutationDh.getnum(state, "#txtProductCount")
	},
	ajax1(state,value){
   		zzbmutation1(state,value)
   },
   ajax2(state,value){
   		zzbmutation2(state,value)
   },
   ajax3(state,value){
   		zzbmutation3(state,value)
   },
   ajax4(state,value){
   		zzbmutation4(state,value)
   },
   ajax5(state,value){
   		zzbmutation5(state,value)
   },
   ajax6(state,value){
   		zzbmutation6(state,value)
   },
   TwgetAjxa(state, value){
    ClassifyMutations(state,value)
  },
  ClassHref(state, value){
    location.href = "http://localhost/Fruits/fruits/src/components/classify/reg.html"
  },
  TwHref(state, value){
    location.href = "http://localhost:8080/#/classify/"
  },
      RANDOM(state,value){
        lisMutations.RANDOM(state)
    },
    REGISTER(state,value){
    	lisMutations.REGISTER(state,value)
    },
    USERSIGNIN(state,value){
        lisMutations.USERSIGNIN(state,value)
    },
    CHANGE(state){
        lisMutations.CHANGE(state)
    }
};
const actions = {
	findgetdata({
		commit
	}, value) {
		commit("findGetdata", value)
	},
	finddetailgetdata({
		commit
	}, value) {
		commit("findDetailGetdata", value)
	},
	correctNum({
		commit
	}, value) {
		commit("ADDNUM", value)
	},
	decNum({
		commit
	}, value) {
		commit("DECNUM", value)
	},
	upData({
		commit
	}, value) {
		commit("GETDATA", value)
	},
	buyNum({
		commit
	}, value) {
		commit("BUY", value)
	},
	ajax1({commit},value){
    	commit("ajax1",value)
    },
    ajax2({commit},value){
    	commit("ajax2",value)
    },
    ajax3({commit},value){
    	commit("ajax3",value)
    },
    ajax4({commit},value){
    	commit("ajax4",value)
    },
    ajax5({commit},value){
    	commit("ajax5",value)
    },
    ajax6({commit},value){
    	commit("ajax6",value)
    },
    tw({commit},value){
      commit("TwgetAjxa",value)
    },
    twtiao({commit},value){
      commit("TwHref",value)
    },
    twhref({commit},value){
      commit("ClassHref",value)
    },
    correctNum({commit}, value){
        commit("ADDNUM",value)
    },
        change({commit}){
        commit('CHANGE')
    },
    userSignin({commit},value){
        	console.log(value,'go')
        	var url = 'http://localhost/FruitsProject/Fruits/serverPHP/DAL/Login/Login.php';  
	        $.ajax(url, {  
	        	type:'GET', 
		        data:value,
		        async:false,
		        dataType:"jsonp",
		        success:function(data) {  
		             console.log(data)
		             commit("USERSIGNIN",data)
		        }
	        });
    },
    getNum(state,value){
    	if(value==""){
        	     $('.layermmain').show();
        }else{
                 $('#delivery-date').show();
        }       
    },
    send({commit},value){ 
        var url = 'http://localhost/FruitsProject/Fruits/serverPHP/DAL/register/register.php';  
        console.log(JSON.stringify(value))
        $.ajax(url, {  
        	type:'GET', 
	        dataType:"jsonp",
	        data:value,
	        success: function(data) {  
	             console.log(data)
//	             commit("SEND",data)
	        }
        });
    },
    random({commit},value){
    	commit("RANDOM",value)
    },
    message({commit}, value){
         commit("REGISTER",value)
    },
    sure({commit}){
        commit('SURE')
    }
};
const getters = {
	findData: findGetters.findData,
	findDetailData: findDetailGetters.findDetailData,
	counta: gettersDh.counta,
	detailObj: gettersDh.detailObj,
	buy: gettersDh.num,
	zzbcounta1:zzbgetters.data1,
	zzbcounta2:zzbgetters.data2,
	zzbcounta3:zzbgetters.data3,
	zzbcounta4:zzbgetters.data4,
	zzbcounta5:zzbgetters.data5,
	zzbcounta6:zzbgetters.data6,
    Adata:ClassifyGetters.data,
  	arrString:lisGetters.arrString(state),
    phoneNum:lisGetters.phoneNum(state),
    psw:lisGetters.psw(state)
};

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
