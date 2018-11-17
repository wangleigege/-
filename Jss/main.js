;$(function()
{
	


	var sider=$('.sider'),
	    mask=$('.mask'),
	    sider_trigger=$(".sider_trigger"),
	    backbutton=$('.backbutton');

	    sider_trigger.on("click",function(){

	    	mask.fadeIn();
	    	sider.css('right',0);
	    })

	    mask.on("click",function(){
	    	mask.fadeOut();
	    	sider.css("right",-sider.width())
	    })

	    backbutton.on("click",function(){

	    	 $('html,body').animate({
	    	scrollTop:0
	    },1000)
	    })

	    $(window).on('scroll',function()
	    {
	    	if($(window).scrollTop()>$(window).height())
	    		backbutton.fadeIn();
	    	else
	    		backbutton.fadeOut();
	    })
	    
	   $(window).trigger('scroll');
});