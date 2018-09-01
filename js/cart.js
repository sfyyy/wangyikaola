$(function(){
	
	ajax({
		url: 'json/index.json',
		success: function(data){
			if($.cookie('id')){
				$('.cart-box').css('display','block');
				$('cart-null').css('display','none');
					var arr = JSON.parse(data);
						
					var oNumber = $.cookie('number');
					var oId = $.cookie('id');
					
					var oImgsrc = arr[1].img[oId -1];
					var ogoodName = arr[1].p[oId -1];
					var oPrice =arr[1].price[oId -1];
				
					var oNew = oPrice.slice(1);
					
					var str = 
						'<div class="good-con" id ="' + oId +  '">' +
							'<div class="good-img">' +
								'<img src="'+ oImgsrc + '" alt="">' +
							'</div>' +
							'<div class="good-name">' +
								'<p>'+ ogoodName +'</p>' +
							'</div>' + 
							'<div class="good-price">' + 
								'<span>'+ oPrice +'</span>' + 
							'</div>' + 
							'<div class="good-num">' + 
								'<span class = "numberMinus">'+ '-' +'</span>' + 
								'<input type="text" value="'+ oNumber + '" id="input1">' +
								'<span class = "numberAdd">' + " + " + '</span>' + 
							'</div>' + 
							'<div class="good-sumprice">' + 
								'<span class="sumprice2">' + "￥" + oNew* oNumber + '</span>' + 
							'</div>' + 
							'<div class="good-del">' + 
								'<span class="del">  删除 </span>' + 
							'</div>'+ 
						'</div>';
					//将上面的结构添加到cart-box中去
					$(str).appendTo(".good-big");
					
					$('.numberAdd').click(function(e){
						e.preventDefault
					var sum = 	parseInt($('#input1').val());
						$('#input1').val(sum + 1);
						var sum = $('#input1').val()*oNew;
						$('.sumprice2').html('￥' + sum)
						$('.sumprice').html($('.sumprice2').html());
					});
					
					$('#input1').blur(function(){
						var pattern = /^\d+$/;
							if(!pattern.test($(this).val()) || $('#input1').val() < 0){
								$(this).val(1);
						}
					});
					
					$('.numberMinus').click(function(e){
						e.preventDefault
						var pattern = /^\d+$/;
							if(!pattern.test($('#input1').val()) || $('#input1').val() < 1){
								$('#input1').val(1);
						}
					var sum = 	parseInt($('#input1').val());
						$('#input1').val(sum - 1);
						var sum = $('#input1').val()*oNew;
						$('.sumprice2').html('￥' + sum);
						$('.sumprice').html($('.sumprice2').html());
					})
					$('.sumprice').html($('.sumprice2').html());
					
					$('.del').click(function() {
					//在页面上将商品信息删除，顺便获取一个该商品的id
					var id = $(this).parents('.good-del').parent().remove().attr("id");
			})
			}else{
				$('.cart-box').css('display','none');
				$('.cart-null').css('display','block');
			}
			
			
			
			
			
		
			},
			})
		
			
			
			
			
			
			
			
			
	})
	
	
	
	
	
	
	
