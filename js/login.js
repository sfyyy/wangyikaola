$('.register-top').find('span').click(function(){
	
	if($(this).index() == 0){
		$('.email-con').css('display','none');
		
		$('.phone-login').css('color','#e31436');
		$('.email-login').css('color','#666');
		
		
	}else if($(this).index() == 2){
		$('.email-con').css('display','block');
		$('.email-login').css('color','#e31436');
		$('.phone-login').css('color','#666');
		
	}
})

$('.res-footer').find('span').mouseenter(function(){
	$(this).find('i').css("display",'block');
}).mouseleave(function(){
	$(this).find('i').css("display",'none');
})



//登录界面账户输入框失去焦点

		$(".input1 #username").blur(function() {
			accountReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if($(this).val() == "" || $(this).val() == "请输入您的账号（即手机号）") {
				
				$('.false').css("display", "block").html("账号不能为空！");
				$('.false').css('color','#d00')
				console.log("账号不能为空");
				return;
			} else if(!accountReg.test($(".input1 #username").val())) {
				
				$('.false').css("display", "block").html("账号格式错误!");
				$('.false').css('color','#d00')
			} else {
				
				$('.false').empty();
			}
		});
		
				// 登录界面密码输入框失去焦点
		$(".input3 #password").blur(function() {
			reg = /^[A-Za-z0-9]{6,12}$/
			alert($('#password').val())
			if($(this).val() == "") {
				
				$('.false').css("display", "block").html("密码不能为空！");
				$('.false').css('color','#d00')
			} else if(!reg.test($("#password").val())) {
				$('.false').css("display", "block").html("密码格式错误！");
				$('.false').css('color','#d00');
			} else {
				
				$('.false').empty();
			}
		});
		$(".email-con #username").blur(function() {
			accountReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
			if($(this).val() == "") {
				$('.false').css("display", "block").html("账号不能为空！");
				$('.false').css('color','#d00')
				console.log("账号不能为空");
				return;
			} else if(!accountReg.test($(".input1 #username").val())) {
				
				$('.false').css("display", "block").html("账号格式错误");
				$('.false').css('color','#d00')
			} else {
				
				$('.false').empty();
			}
		});
		
		
			