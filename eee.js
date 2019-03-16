var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';
document.getElementsByTagName('body')[0].appendChild(script);


'use strict';

setInterval(function () {

	$(document).ready(function () {
		$('#vidrek').remove();
		$('.rekgec-div').remove();
		$( '#plx').each(function () {
    			this.style.setProperty( 'display', 'block', 'important' ); });
	});

}, 5);



