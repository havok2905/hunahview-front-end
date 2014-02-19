/*
	
	API Wrapper Module

*/

api = function()
{
	privateGetRequest = function(path, callback)
	{
		$.ajax({
			url  : path,
			dataType : "json",
			async : true
		}).complete(function(data)
		{
			callback( data.responseJSON );
		});
	};

	publicGetEvents = function(callback)
	{
		path = "http://tmclean.net/hunahview/services/api/events";
		//path = "js/json/events.json";
		privateGetRequest(path, callback);
	};

	publicGetLocations = function(event, callback)
	{
		path = "http://tmclean.net/hunahview/services/api/" + event + "/locations";
		//path = "js/json/locations.json";
		privateGetRequest(path, callback);
	};

	publicGetBeers = function(event, callback)
	{
		path = "http://tmclean.net/hunahview/services/api/" + event + "/beers/";
		//path = "js/json/beers.json";
		privateGetRequest(path, callback);
	};

	publicGetBeersByLocation = function(event, location, callback)
	{
		path = "http://tmclean.net/hunahview/services/api/" + event + "/beers/" + location;
		privateGetRequest(path, callback);
	};

	publicGetBeersByBrewery = function(event, brewery, callback)
	{

	};

	publicGetBreweries = function(event, callback)
	{
		//path = "http://tmclean.net/hunahview/services/api/" + event + "/breweries/";
		path = "js/json/breweries.json";
		privateGetRequest(path, callback);
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