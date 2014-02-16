/*
	
	Button Module

*/

buttons = function()
{
	privateEvent = "hunahpu2014";

	publicRegisterEventListeners = function()
	{
		$(".beer-button").click(function(event)
		{
			event.preventDefault();
			privateHandleBeerButton();
		});

		$(".location-button").click(function(event)
		{
			event.preventDefault();
			privateHandleLocationButton();
		});

		$(".brewery-button").click(function(event)
		{
			event.preventDefault();
			privateHandleBreweryButton();
		});
	};

	privateHandleBeerButton = function()
	{
		beers = api.getBeers(privateEvent).beers;
		$("#response").html("<ul id='beer-list'></ul>");
		$.each(beers, function(index, beer)
		{
			$("#beer-list").append("<li><input type='checkbox'/><span>" + beer.beer + "</span></li>")
		});
	};

	privateHandleLocationButton = function()
	{
		locations = api.getLocations(privateEvent).locations;
		$("#response").html("<ul id='location-list'></ul>");
		$.each(locations, function(index, location)
		{
			$("#location-list").append("<li>" + location.city + "</li>")
		});
	};

	privateHandleBreweryButton = function()
	{
		breweries = api.getBreweries(privateEvent).breweries;
		console.log(breweries);
		$("#response").html("<ul id='brewery-list'></ul>");
		$.each(breweries, function(index, brewery)
		{
			$("#brewery-list").append("<li>" + brewery.name + "</li>")
		});
	};

	return {
		registerEventListeners : publicRegisterEventListeners
	}
}();