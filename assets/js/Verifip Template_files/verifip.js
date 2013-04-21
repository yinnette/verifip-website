
$(function() { 
	$(".learn-more").click(function() {
		$(".level-2").toggleClass("active"); 
	});
	$(".feature-link").click(function() {
	     $('html, body').animate({
	         scrollTop: $("#features").offset().top
	     }, 1000);
	 });
	$(".social-link").click(function() {
	     $('html, body').animate({
	         scrollTop: $("#social").offset().top
	     }, 1500);
	 });
	$(".alerts-link").click(function() {
	     $('html, body').animate({
	         scrollTop: $("#alerts").offset().top
	     }, 2000);
	 });
	$(".brands-link").click(function() {
	     $('html, body').animate({
	         scrollTop: $("#brands").offset().top
	     }, 2500);
	 });
	$(".contact-link").click(function() {
	     $('html, body').animate({
	         scrollTop: $("#contact").offset().top
	     }, 3000);
	 });
	$(".return-link, .back-up").click(function() {
	     $('html, body').animate({
	         scrollTop: $("#home").offset().top
	     }, 1000);
	 });
});
