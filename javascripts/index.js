$(document).ready(function(){
	$('body').scrollspy({ target: '#main-navbar' })

	var $controller = new ScrollMagic.Controller();

	function getElementHeight(element){
		return element.outerHeight();
	};

	// Header Scenes
	var goDownHeaderScene = new ScrollMagic.Scene({
		triggerElement: "#about", offset: 75, duration: 200
	})
	.setTween("#header-go-down", 0.5, {opacity: 0})
	// .addIndicators({name: "1 (duration: 0)"})
	.addTo($controller);

	// Section ABOUT Scenes
	var aboutHeaderScene = new ScrollMagic.Scene({
		triggerElement: "#about", offset: 75
	})
	.setTween("#about-header", 0.5, {scale: 1.5})
	// .addIndicators({name: "1 (duration: 0)"})
	.setClassToggle("#back-to-top", "about-active")
	.addTo($controller);

	// Section EXPERIENCE Scenes
	var experienceHeaderScene = new ScrollMagic.Scene({
		triggerElement: "#experience", offset: 75
	})
	.setTween("#experience-header", 0.5, {scale: 1.5})
	// .addIndicators({name: "1 (duration: 0)"})
	.setClassToggle("#back-to-top", "experience-active")
	.addTo($controller);

	// Section CONTACT Scenes
	var contactHeaderScene = new ScrollMagic.Scene({
		triggerElement: "#contact", offset: 75
	})
	.setTween("#contact-header", 0.5, {scale: 1.5})
	// .addIndicators({name: "1 (duration: 0)"})
	.setClassToggle("#back-to-top", "contact-active")
	.addTo($controller);

	// Footer Scenes
	var otherNavScene = new ScrollMagic.Scene({
		triggerElement: "#footer-navbar", triggerHook: 'onEnter'
	})
	.setTween("#footer-nav-content", 0.5, {opacity: 1})
	// .addIndicators({name: "1 (duration: 0)"})
	.addTo($controller);

	// Back-to-top Scenes
	var backToTopScene = new ScrollMagic.Scene({
		triggerElement: "#about", duration: 150, offset: 75
	})
	.setTween("#back-to-top", 0.5, {opacity: 1, display: "block"})
	// .addIndicators({name: "1 (duration: 0)"})
	.addTo($controller);

    var $root = $('html, body');
    var $currentHash = "";
	$('a[href*=#]').click(function() {
	    var href = $.attr(this, 'href');
	    if(href == "#"){
			$root.animate({
		        scrollTop: 0
		    }, 250);
	    } else {
		    $root.animate({
		        scrollTop: $(href).offset().top
		    }, 500);
		}
	    return false;
	});

	$(window).on('activate.bs.scrollspy', function(e) {
	  var $hash, $node;
	  $hash = $("a[href^='#']", e.target).attr("href").replace(/^#/, '');
	  $node = $('#' + $hash);
	  if ($node.length) {
	    $node.attr('id', '');
	  }
	  window.location.hash = $hash;
	  if ($node.length) {
	    return $node.attr('id', $hash);
	  }
	});
});

function expandCard(id, clickedEl){
	var elementToToggle = $("#" + id);
	var iconEl = $(clickedEl).find(".expand-icon").first();

	elementToToggle.slideToggle("slow", "swing", function(){
		if(iconEl.hasClass("fa-ellipsis-h")){
			iconEl.removeClass("fa-ellipsis-h");
			iconEl.removeClass("fa-2x");
			iconEl.addClass("fa-chevron-up");
			iconEl.addClass("fa-lg");
			iconEl.css("margin-top", "5px");
		} else {
			iconEl.removeClass("fa-lg");
			iconEl.removeClass("fa-chevron-up");
			iconEl.addClass("fa-ellipsis-h");
			iconEl.addClass("fa-2x");
			iconEl.css("margin-top","0px");
		}
	});
}