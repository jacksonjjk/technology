// JavaScript Document
//支持Enter键登录
		document.onkeydown = function(e){
			if($(".bac").length==0)
			{
				if(!e) e = window.event;
				if((e.keyCode || e.which) == 13){
					var obtnLogin=document.getElementById("submit_btn")
					obtnLogin.focus();
				}
			}
		}

    	$(function(){
			//提交表单
			$('#submit_btn').click(function(){
				show_loading();
				// var myReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //邮件正则
				if($('#email').val() == ''){
					show_err_msg('邮箱还没填呢！');	
					$('#email').focus();
				}else if($('#password').val() == ''){
					show_err_msg('密码还没填呢！');
					$('#password').focus();
				}else{
					$.get("http://localhost/technology/CMS/php/login.php",function(res){
	                var res = JSON.parse(res);
	                for(var i=0;i<res.length;i++){
	                	if(res[i].username==$('#email').val()&&res[i].password==$('#password').val()){
	                		
					     show_msg('登录成功咯！  正在为您跳转...','http://localhost:8080');	
	                	}else{
	                		show_err_msg('账户密码有误！');
	                		$('#email').focus();
	                	}
	                }
	                })
					//ajax提交表单，#login_form为表单的ID。 如：$('#login_form').ajaxSubmit(function(data) { ... });
				}
			});
		});