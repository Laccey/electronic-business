$(function(){
   $("#subnav_box>dl").hover(function(){
		$(this).addClass('hover').find(".subnav").show();
	},function(){
		$(this).removeClass('hover').find(".subnav").hide();
	});

/* 首页大屏广告效果 */

   var $imgrolls = $("#banner div a");
    var len  = $imgrolls.length;
	var index = 0;
	var adTimer = null;
	$imgrolls.mouseover(function(){
		index = $imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();	
	//滑入 停止动画，滑出开始动画.
	$('#banner').hover(function(){
			if(adTimer){ 
				clearInterval(adTimer);
			}
		 },function(){
			adTimer = setInterval(function(){
			    showImg(index);
				index++;
				if(index==len){index=0;}
			} , 3000);
	}).trigger("mouseleave");

	$("a.active_left img").hover(function(){
		$(this).stop().animate({left:"45px"},200);
	},function(){
		$(this).stop().animate({left:"52px"},200);
	})

	$(".right").hover(function(){
		$(this).stop().animate({right:"12px"},200);
	},function(){
		$(this).stop().animate({right:"5px"},200);
	})

	$("a.active_last img").hover(function(){
		$(this).stop().animate({left:"60px"},200);
	},function(){
		$(this).stop().animate({left:"65px"},200);
	})

	$("a.left_box").hover(function(){
		$(this).addClass('left_hover');
	},function(){
		$(this).removeClass('left_hover');
	})

	$(".middle_box a").hover(function(){
		$(this).stop().animate({left:"82px"},200);
	},function(){
		$(this).stop().animate({left:"89px"},200);
	})

	$(".right_box a").hover(function(){
		$(this).stop().animate({left:"133px"},200);
	},function(){
		$(this).stop().animate({left:"140px"},200);
	})

	// window.onscroll = function(){
	// 	if(document.documentElement.scrollTop(500px) || document.body.scrollTop(500px)){
	// 		$("#aside_nav").css("display","block");
	// 	}
	// }
})

//显示不同的幻灯片
function showImg(index){
	var $rollobj = $("#banner");
	var $rolllist = $rollobj.find("div a");
	var newhref = $rolllist.eq(index).attr("href");
	$("#banner_img").attr("href",newhref)
			 .find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	$rolllist.removeClass("choose").eq(index).addClass("choose");
}