// JavaScript Document
$(document).ready(function(){

	$("header").load("header.html");
	$("footer").load("footer.html");

	$(window).resize(function(){
		location.reload();
	});

	$(".menu").click(function(){
		$("nav").slideToggle();
	});

	//group

	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	//single
	$("#s2").fancybox({
        openEffect	: 'elastic', //彈出
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });

});