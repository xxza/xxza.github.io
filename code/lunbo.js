$(function(){

	var num=0;

	$("#div1").mouseover(function(){

		$(".left").css("opacity",0.5);
		$(".right").css("opacity",0.5);
	});
	$("#div1").mouseout(function(){

		$("#left").css("opacity",0);
		$("#right").css("opacity",0);
	});

	$("#left").mouseover(function(){
		$("#left").css("opacity",1);
		$("#right").css("opacity",0.5);

		event.stopPropagation();

	});

	$("#right").mouseover(function(){
		$("#left").css("opacity",0.5);
		$("#right").css("opacity",1);

		event.stopPropagation();

	});

	$("#right").click(function(e){

		num++;
		if(num>4){num=0;}
		$("#ul1").animate({left:num*(-520)},400);
		$("#ol1").find("li").eq(num).addClass("current").siblings().removeClass();

	});

	$("#left").click(function(e) {
		num--;
		if(num<0){num=4;}
		$("#ul1").animate({left:num*(-520)},400);
		$("#ol1").find("li").eq(num).addClass("current").siblings().removeClass();

	});

	$("#ol1").find("li").click(function(){

		$("#ol1").find("li").eq($(this).index()).addClass("current").siblings().removeClass();
		//alert($(this).index());
		$("#ul1").animate({left:$(this).index()*(-520)},400);

	});

 

})