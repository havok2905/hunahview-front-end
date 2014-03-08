history.pushState({"state" : "beers"}, "beers", null);

api.getEvents( function( events )
{
	api.currentEvent = events[0];

	$(document).ready(function()
	{
		body = $("body");

		$(document).on({
				ajaxStart: function() { body.addClass("loading"); },
				ajaxStop: function() { body.removeClass("loading"); }
		});

		api.getBeers(api.currentEvent, function( beers ){
			cellarModel.printBeerList(beers);
		});

		buttons.registerEventListeners();
	});
});
