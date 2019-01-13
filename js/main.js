// JavaScript Document
$(document).ready(function(){

	$("footer").load("footer.html");

	$(window).resize(function(){
		location.reload();
	});

	$(".menu").click(function(){
		$("nav").slideToggle();
	});

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topbut").style.display = "block";
  } else {
    document.getElementById("topbut").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}