/*
	
	API Wrapper Module

	

*/

var api = (function()
{
	publicCurrentEvent = "hunahpu2014";

	function privateGetRequest(path, callback)
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

	function publicGetEvents(callback)
	{
		path = "http://tmclean.net/hunahview/services/api/events";
		//path = "js/json/events.json";
		privateGetRequest(path, callback);
	};

	function publicGetLocations(event, callback)
	{
		path = "http://tmclean.net/hunahview/services/api/" + event + "/locations";
		//path = "js/json/locations.json";
		privateGetRequest(path, callback);
	}

	function publicGetBeers(event, callback)
	{
		path = "http://tmclean.net/hunahview/services/api/" + event + "/beers/";
		//path = "js/json/beers.json";
		privateGetRequest(path, callback);
	}

 	function publicGetBeersByLocation(event, location, callback)
	{
		path = "http://tmclean.net/hunahview/services/api/" + event + "/beers/" + location;
		privateGetRequest(path, callback);
	}

 	function publicGetBeersByBrewery(event, brewery, callback)
	{
		path = "http://tmclean.net/hunahview/services/api/" + event + "/beers?brewery=" + brewery;
		privateGetRequest(path, callback);
	}

	function publicGetBreweries(event, callback)
	{
		path = "http://tmclean.net/hunahview/services/api/" + event + "/breweries/";
		//path = "js/json/breweries.json";
		privateGetRequest(path, callback);
	}

	return {
		getEvents : publicGetEvents,
		getLocations : publicGetLocations,
		getBeers : publicGetBeers,
		getBeersByLocation : publicGetBeersByLocation,
		getBeersByBrewery : publicGetBeersByBrewery,
		getBreweries : publicGetBreweries,
		currentEvent : publicCurrentEvent
	}
})();
