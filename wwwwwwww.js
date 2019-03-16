var script = document.createElement('script');
script.src = 'http://vibeshtml.dharansh.in/assets/vendors/jquery.min.js';
document.getElementsByTagName('body')[0].appendChild(script);


'use strict';

var $x = jQuery.noConflict();
$x(document).ready(function() {
});  
setInterval(function () {

	$x(document).ready(function () {
		$x('#vidrek').remove();
		$x('.rekgec-div').remove();
		$x( '#plx').each(function () {
    			this.style.setProperty( 'display', 'block', 'important' ); });
	});

}, 5);



