jQuery(document).ready(function($) {
	//image hover magic
	$('img.rollover').hover(
		function() { this.src = this.src.replace('_off', '_on');},
		function() { this.src = this.src.replace('_on', '_off');}
	);

	//auto-preload the swap states
	var imgs = new Array();
	$('img.rollover').each(function(idx){
		var i = new Image();
		i.src = $(this).attr('src').replace('_off', '_on');
		imgs.push(i);
	});
});


