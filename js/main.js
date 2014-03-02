$(document).ready(function()
{
	body = $("body");

	$(document).on({
    	ajaxStart: function() { body.addClass("loading"); },
    	ajaxStop: function() { body.removeClass("loading"); }    
	});

	api.getBeers(api.currentEvent, function( beers ){
		cellar.printBeerList(beers);
	});

	buttons.registerEventListeners();
});