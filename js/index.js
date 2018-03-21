
$(function () {



	$('#myCarousel').carousel({
		interval : 233333
	});














	$(window).load(function () {
		$('.text').eq(0).css('margin-top', ($('.auto').eq(0).height() - $('.text').eq(0).height() - 33) / 2 + 'px');
		$('.text').eq(1).css('margin-top', ($('.auto').eq(1).height() - $('.text').eq(1).height() - 33) / 2 + 'px');
	});
	
	$(window).resize(function () {
		$('.text').eq(0).css('margin-top', ($('.auto').eq(1).height() - $('.text').eq(0).height() - 33) / 2 + 'px');
		$('.text').eq(1).css('margin-top', ($('.auto').eq(1).height() - $('.text').eq(1).height() - 33) / 2 + 'px');
	});




}); 