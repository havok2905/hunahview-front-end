/*
	
	Button Module

*/

var buttons = (function()
{
	function publicRegisterEventListeners()
	{
		$("#beer-button").click(function(event)
		{
			event.preventDefault();
			privateHandleBeerButton();
		});

		$("#location-button").click(function(event)
		{
			event.preventDefault();
			privateHandleLocationButton();
		});

		$("#brewery-button").click(function(event)
		{
			event.preventDefault();
			privateHandleBreweryButton();
		});
	};

 	function privateHandleBeerButton()
	{
		history.pushState({"state" : "beers"}, "beers", null);
		cellarModel.printBeerList();
	};

	function privateHandleLocationButton()
	{
		history.pushState({"state" : "locations"}, "locations", null);
		locationModel.printLocationsList();
	}

	function privateHandleBreweryButton ()
	{
		history.pushState({"state" : "breweries"}, "breweries", null);
		breweryModel.printBreweriesList();
	}

	return {
		registerEventListeners : publicRegisterEventListeners
	}
})();
