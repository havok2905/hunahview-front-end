localStorage.beers = {}
history.pushState({"state" : "beers"}, "beers", null);

window.onpopstate = function(event)
{
	event.preventDefault();
	switch(history.state.state)
	{
		case "beers" :
			cellarModel.printBeerList();
			break;
		case "locations" :
			locationModel.printLocationsList();
			break;
		case "breweries" :
			breweryModel.printBreweriesList();
			break;
	}
};


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