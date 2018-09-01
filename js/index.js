//头部，移入手机

$('#QR-con1').mouseenter(function(){
	$('.QR1').css("display","block");
})
// // 移出,消失
$('#QR-con1').mouseleave(function(){
	$('.QR1').css("display","none");
})

//移入top 显示下拉菜单

$('.top-right li').mouseenter(function(){
	
	$(this).find('.down-con').css('display','block');
	
	$(this).children().first().css('background','#fff');
	// $('.spin').css('borderColor','#ff2856 transparent transparent transparent')
})
$('.top-right li').mouseleave(function(){
	$(this).find('.down-con').css('display','none');
	$(this).children().first().css('background','#000');
} )

//点击购物车 跳转
$('.shopping').click(function(){
	location.href = 'cart.html';
});


$('.spin').mouseenter(function(){
	$(this).find('span').css('borderColor','#ff2856 transparent transparent transparent');
}).mouseleave(function(){
	$(this).find('span').css('border-color','#999 transparent transparent transparent');;
} )
//移入所有分类，弹出分类框
$('.nav-left').mouseenter(function(){
	$(".nav-left ul").css('display','block')
})
$('.nav-left').mouseleave(function(){
	$(".nav-left ul").css('display','none')
})
//移入侧边栏  颜色变化弹出遮罩
$('.nav-left').find('li').mouseenter(function(){
	$(this).css('background','#fff');
	$(this).css('color','#ff1e32');
	// alert($(this).index());
	$('.imgcolor2').eq($(this).index()).css('display','inline-block');
	$('.imgcolor1').eq($(this).index()).css('display','none');
	$('.shade').eq($(this).index()).css('display','block');
	
})
$('.nav-left').find('li').mouseleave(function(){
	$(this).css('background','linear-gradient(90deg,red,#ff3264');
	$(this).css('color','#fff');
	$('.imgcolor2').css('display','none');
	$('.imgcolor1').css('display','inline-block');
	$('.shade').eq($(this).index()).css('display','none');
})



//ajax 传二级菜单数据
$(function () {
ajax({
url: 'json/index.json',
success: function(data){
	var arr = JSON.parse(data);
	
	var oDiv1 = document.getElementsByClassName('shade-box1')[0]
	var oDiv2 = document.getElementsByClassName('shade-box2')[0]
	var oDiv3 = document.getElementsByClassName('shade-box3')[0]
	var oDiv4 = document.getElementsByClassName('shade-box4')[0]
	var oDiv5 = document.getElementsByClassName('shade-box5')[0]
	var oDiv6 = document.getElementsByClassName('shade-box6')[0]
	var oDiv7 = document.getElementsByClassName('shade-img1')[0];
	var oDiv8 = document.getElementsByClassName('shade-img2')[0];
	for(var i = 0 ; i< 65; i++){
		var oA = document.createElement('a');
		oA.innerHTML = arr[0].commodity[i];
		
	if(i<=20){
		oDiv1.appendChild(oA);
	}else if(i > 20 && i <= 35){
		oDiv2.appendChild(oA);
	}else if(i > 35 && i <= 45){
		oDiv3.appendChild(oA);
		
	}else if(i >45 && i<=57){
		oDiv4.appendChild(oA);
		
	}else if(i > 57 && i <=61){
			oDiv5.appendChild(oA);
	}else{
		oDiv6.appendChild(oA);
	}
	}
	for(var j = 0; j < 7; j++){
		
		var oA = document.createElement('a');
		oDiv7.appendChild(oA);
	var oImg = document.createElement('img');
	oA.appendChild(oImg)
	oImg.src = arr[0].img[j];
	if(j <=5 ){
		oA.appendChild(oImg);
	}else{
		oA.appendChild(oImg);
	}
	
	}
}
})
})

//商品数据
$(function () {
ajax({
url: 'json/index.json',
success: function(data){
	var arr = JSON.parse(data);
	
	var oDiv3 = document.getElementById('discounts');
	
	for(var j =0; j < 7; j++){
		var oDiv1 = document.getElementsByClassName('hot-cen')[j];
		
	for(var i = 0; i < 10; i++){
		var oLi = document.createElement('li');
		oLi.id = arr[1].id[i];
		oDiv1.appendChild(oLi);

		var oImg = document.createElement('img');
		var oDiv2 = document.createElement('div');
		oLi.appendChild(oImg);
		oLi.appendChild(oDiv2);
		var oP = document.createElement('p');
		var oEm = document.createElement('em');
		var oB = document.createElement('b');
		var oSpan = document.createElement('span');
		var oPrice = document.createElement('i');
		var oA = document.createElement('a');
		oDiv2.appendChild(oP);
		oDiv2.appendChild(oEm);
		oDiv2.appendChild(oB);
		oDiv2.appendChild(oSpan); 
		oDiv2.appendChild(oPrice);
		oDiv2.appendChild(oA);
		
		
		
		oImg.src = arr[1].img[i];
		oP.innerHTML = arr[1].p[i];
		oEm.innerHTML = arr[1].em[i];
		oB.innerHTML = arr[1].b[i];
		oSpan.innerHTML = '包邮';
		oPrice.innerHTML = arr[1].price[i];
		oA.innerHTML = '立即购买'; 
		
	}
	
	}
	$('.hot-cen').find('li').find('a').click(function(){
				var oP = $(this).siblings('p').html();
				var oImgsrc = $(this).parent().prev().attr('src');
				var oPrice = $(this).siblings('i').html();
				var oID = $(this).parent().parent().attr('id');
				
				$.cookie('img',oImgsrc,{expires: 7, path: 'wangyikaola'});
				$.cookie('p',oP,{expires: 7, path: 'wangyikaola'});
				$.cookie('price',oPrice,{expires: 7, path: 'wangyikaola'});
				$.cookie('id',oID,{expires: 7, path: 'wangyikaola'});
				location.href = 'detail.html'
			})
			
	}
	
	
	})
	  
    })




		