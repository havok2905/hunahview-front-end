/*
	
	API Wrapper Module

*/

api = function()
{
	privateGetRequest = function(path)
	{
		result = null;

		$.ajax({
			url  : path,
			dataType : "text",
			async : false
		}).complete(function(data)
		{
			result = $.parseJSON(data.responseText);
		});

		return result;
	};

	publicGetEvents = function()
	{
		//path = "http://tmclean.net/hunahview/services/api/events";
		path = "js/json/events.json";
		return privateGetRequest(path);
	};

	publicGetLocations = function(event)
	{
		//path = "http://tmclean.net/hunahview/services/api/" + event + "/locations";
		path = "js/json/locations.json";
		return privateGetRequest(path);
	};

	publicGetBeers = function(event)
	{
		//path = "http://tmclean.net/hunahview/services/api/" + event + "/beers/";
		path = "js/json/beers.json";
		return privateGetRequest(path);
	};

	publicGetBeersByLocation = function(event, location)
	{
		path = "http://tmclean.net/hunahview/services/api/" + event + "/beers/" + location;
		return privateGetRequest(path);
	};

	publicGetBeersByBrewery = function(event, brewery)
	{

	};

	publicGetBreweries = function(event)
	{
		//path = "http://tmclean.net/hunahview/services/api/" + event + "/breweries/";
		path = "js/json/breweries.json";
		return privateGetRequest(path);
	};

	return {
		getEvents : publicGetEvents,
		getLocations : publicGetLocations,
		getBeers : publicGetBeers,
		getBeersByLocation : publicGetBeersByLocation,
		getBeersByBrewery : publicGetBeersByBrewery,
		getBreweries : publicGetBreweries
	}
}();