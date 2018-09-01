// 点击checkbox  添加背景图 选中
count = 0;
$('.checkbox1').click(function(){
	count++;
	if(count % 2 != 0){
	$(this).css('background','url(images/bg1.png) no-repeat -330px -92px');
	}else{
		$(this).css('background','#fff');
	}
})

//点击获取验证码  得出验证码  发到后台

$('.verification').click(function(){
	alert(1);
	 var arr = [];
	 for(var i = 0; i< 4;i++){
		 var temp = parseInt(Math.random()*10)
		 arr.push(temp);
	 }
	 ty = arr.join();
	console.log(arr.join());
		
})

			$(".input1 #username").blur(function() {
			phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if($(this).val() == "") {
				
				$('.false').css("display", "block").html("手机号码不能为空!");
				$('.false').css('color','#d00')
				return;
			} else if(!phoneReg.test($(this).val())) {
				
				$('.false').css("display", "block").html("请输入正确的手机号码!");
				$('.false').css('color','#d00')
			} else {
				
				$('.false').empty();
			}
			});
			
				// 注册界面验证码栏失去焦点	
					$(".input2 #input2").blur(function() {
			reg = /^[A-Za-z0-9]{4}$/;
			if($(this).val() == "") {
				
				$('.false').css("display", "block").html("验证码不能为空！");
				$('.false').css('color','#d00')
				return;
			} else if(!reg.test($(this).val())) {
				
				$('.false').css("display", "block").html("验证码输入有误！");
				$('.false').css('color','#d00')
			} else {
				$('.false').empty();
				
			}
		});
		// 注册界面密码栏失去焦点
		$(".input3 #password").blur(function() {
			reg = /^[A-Za-z0-9]{6}$/
			if(($(this).val())==""){
				
				$('.false').css("display", "block").html("密码不能为空！");
				$('.false').css('color','#d00')
				console.log("登录界面的密码是不是为空了？？？");
			}else if(!reg.test($(this).val())) {
				$('.false').css("display", "block").html("请输入6位包含数字或字母的密码！");
				$('.false').css('color','#d00')
			} else {
				$('.false').empty();
			}
		});