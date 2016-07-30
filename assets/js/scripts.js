$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

$(".fancybox").fancybox({
	openEffect  : "fade",
	closeEffect : "fade",
	type : "image",
	'cyclic' : true,
	'showNavArrows' : true
});