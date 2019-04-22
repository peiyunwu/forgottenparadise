$(document).ready(function() {
	// load
	$("footer").load("footer.html");

});


$(document).on("scroll", function() {

	if($(document).scrollTop()>500) {
		$(".navigation .hamburger-menu").addClass("menu-bg");
	} else {
		$(".navigation .hamburger-menu").removeClass("menu-bg");
	}
});


