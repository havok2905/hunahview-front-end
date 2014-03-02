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
		api.getBeers(api.currentEvent, function( beers ){

			cellar.printBeerList(beers);
		});
	};

	function privateHandleLocationButton()
	{
		api.getLocations(api.currentEvent, function( locations ){

			$("#response").html("<ul id='location-list'></ul>");

			$.each(locations, function(index, location)
			{
				$("#location-list").append("<li><a data-tag='city' href='" + location.city + "'>" + location.city + " " + location.state + " " + location.country + "</a></li>");
			});

			listItem.registerEventListeners();

		});

	}

	function privateHandleBreweryButton ()
	{
		breweries = api.getBreweries(api.currentEvent, function( breweries ){

			$("#response").html("<ul id='brewery-list'></ul>");
			
			$.each(breweries, function(index, brewery)
			{
				$("#brewery-list").append("<li><a data-tag='brewery' href='" + brewery.name + "'>" + brewery.name + "</a></li>")
			});

			listItem.registerEventListeners();
		});

	}

	return {
		registerEventListeners : publicRegisterEventListeners
	}
})();
