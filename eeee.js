


'use strict';

setInterval(function () {

	$(document).ready(function () {
		$('#vidrek').remove();
		$('.rekgec-div').remove();
		$( '#plx').each(function () {
    			this.style.setProperty( 'display', 'block', 'important' ); });
	});

}, 5);



