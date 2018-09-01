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


$(function () {
ajax({
url: 'json/index.json',
success: function(data){
	var oshowName = document.getElementsByClassName('showName')[0];
	 var ogoodName = document.getElementsByClassName('goodname')[0];
	ogoodName.innerHTML = $.cookie('p');
	oshowName.innerHTML = $.cookie('p');
	var ogoodPrice = document.getElementsByClassName('price')[0];
	ogoodPrice.innerHTML = $.cookie('price');
	var oImgsrc = document.getElementsByClassName('imgShow')[0];
	var oImgsrc2 = document.getElementsByClassName('imgShow2')[0];
	oImgsrc.src = $.cookie('img');
	oImgsrc2.src = $.cookie('img');
	
	},
	
	})
	})
	
	
	// 绑定鼠标移入原图窗口事件
        $('.showImgbox').mouseover(function(e){
                $('.amplification').css('display','block');
                $('.showdow').css('display','block');

        })
        //绑定鼠标在原图窗口移动的事件
        $('.showImgbox').mousemove(function(e){

                // 获取鼠标当前的位置
                var x=e.clientX;
                var y=e.clientY;
                // 获取原图窗口距离文档的偏移位置
                var sX=$('.showImgbox').offset().left;
                var sY=$('.showImgbox').offset().top;

                // 计算鼠标的相对位置（相对于原图窗口的偏移距离）
                var mx=x-sX;
                var my=y-sY;

                // 获取小框框的宽高
                var mw=$('.showdow').width()/2;
                var mh=$('.showdow').height()/2;

                // 鼠标移动后小框框的移动距离
                $('.showdow').css({left:mx - mw +'px',top:my -mh +'px'});

                // 获取小框框的偏移位置
                    var lw=$('.showdow').position().left;
                    var lh=$('.showdow').position().top;


                // 判断边界（小框框只能在原图窗口范围内移动）
                    var maxW=$('.showImgbox').width()-$('.showdow').width()
                    var maxH=$('.showImgbox').height()-$('.showdow').height()
                    // 左边界
                    if(lw<=0){$('.showdow').css('left','0px');}
                    // 右边界
                    if(lw>=maxW){
                        $('.showdow').css('left',maxW+'px');
                    }
                    // 上边界
                    if(lh<=0){$('.showdow').css('top','0px');}
                    // 下边界
                    if(lh>=maxH){
                        $('.showdow').css('top',maxH+'px');
                    }

                    // 获取小框框的偏移位置

                // 计算鼠标在小图里的位置  *1.8计算大图移动的比例
                    var newX=lw*1.8;
                    var newY=lh*1.8;



                $('.amplification img').css({left:-newX+'px',top:-newY+'px'});
        })
        //绑定鼠标离开原图窗口事件
        $('.showImgbox').mouseout(function(){
                $('.amplification').css('display','none');
                $('.showdow').css('display','none');
        })
		$('.numberAdd').click(function(e){
			e.preventDefault
		var sum = 	parseInt($('#input1').val());
			$('#input1').val(sum + 1);
			
			
		});
		
		$('#input1').blur(function(){
			var pattern = /^\d+$/;
				if(!pattern.test($(this).val()) || $('#input1').val() < 0){
					$(this).val("1");
			}
		});
		
		$('.numberMinus').click(function(e){
			e.preventDefault
		var sum = 	parseInt($('#input1').val());
			$('#input1').val(sum - 1);
			
		})
		
		$('.buy').click(function(e){
			e.preventDefault;
			$.cookie('id');
			var oInput = $('#input1').val();
			alert(oInput);
			$.cookie('number',oInput,{expires: 7, path: 'wangyikaola'});
			location.href = 'cart.html'
		})
		
		
		
	
	
	 