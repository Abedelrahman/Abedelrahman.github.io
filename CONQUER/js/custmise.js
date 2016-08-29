/*global $,alart, console */
$(function () {
	"use strict";
//    smoth scroll div
    $('.nav-justified li').click(function () {
        $('html, body').animate({
            scrollTop: $("#" + $(this).data('value')).offset().top - 125
        }, 2000);
    });
    $('.nav-justified li a').click(function () {
        $(this).parents('li').addClass('active').siblings().removeClass('active');
    });

   	//Check to see if the window is top if not then display button
    $(window).scroll(function(){
		if ($(this).scrollTop() > 150) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() < 940) {
        		$('.nav-justified #ho').addClass('active').siblings().removeClass('active');
		}
		if ($(this).scrollTop() > 500) {
        		$('.nav-justified #ab').addClass('active').siblings().removeClass('active');
		}
		if ($(this).scrollTop() > 1725) {
    		$('.nav-justified #ser').addClass('active').siblings().removeClass('active');
		}
		if ($(this).scrollTop() > 3580) {
    		$('.nav-justified #con').addClass('active').siblings().removeClass('active');
		} 
	});
});
