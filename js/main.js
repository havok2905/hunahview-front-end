$(document).ready(function()
{
	$body = $("body");

	$(document).on({
    	ajaxStart: function() { $body.addClass("loading");    },
    	ajaxStop: function() { $body.removeClass("loading"); }    
	});

    $('#nav-wrapper').height($(".nav").height());
    
    $('.nav').affix({
        offset: { top: $('.nav').offset().top }
    });

	buttons.registerEventListeners();
});