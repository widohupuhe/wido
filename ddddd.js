var script = document.createElement('script');
script.src = 'http://vibeshtml.dharansh.in/assets/vendors/jquery.min.js';
document.getElementsByTagName('body')[0].appendChild(script);


'use strict';

setTimeout(function () {
	$(document).ready(function () {
		$('#vidrek').remove();
		$('.rekgec-div').remove();
		$('.plx').css("display", "block!important");
	});
}, 3000);
