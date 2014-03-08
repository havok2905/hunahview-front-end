/*
	API Wrapper Module
*/

var api = (function()
{
	publicCurrentEvent = null;
	publicUsername = getURLParameter( 'username' );

	console.log( publicUsername );

	function getURLParameter(name) {
	    return decodeURI(
	        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
	    );
	}

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
		path = "http://54.196.60.48:80/hunahview/services/api/events";
		//path = "js/json/events.json";
		privateGetRequest(path, callback);
	};

	function publicGetLocations(event, callback)
	{
		path = "http://54.196.60.48:80/hunahview/services/api/" + event + "/locations";
		//path = "js/json/locations.json";
		privateGetRequest(path, callback);
	}

	function publicGetBeers(event, callback)
	{
		path = "http://54.196.60.48:80/hunahview/services/api/" + event + "/beers/";
		//path = "js/json/beers.json";
		privateGetRequest(path, callback);
	}

 	function publicGetBeersByLocation(event, location, callback)
	{
		path = "http://54.196.60.48:80/hunahview/services/api/" + event + "/beers/" + location;
		privateGetRequest(path, callback);
	}

 	function publicGetBeersByBrewery(event, brewery, callback)
	{
		path = "http://54.196.60.48:80/hunahview/services/api/" + event + "/beers?brewery=" + brewery;
		privateGetRequest(path, callback);
	}

	function publicGetBreweries(event, callback)
	{
		path = "http://54.196.60.48:80/hunahview/services/api/" + event + "/breweries/";
		//path = "js/json/breweries.json";
		privateGetRequest(path, callback);
	}

	function publicGetCheckins(event, username, callback)
	{
		path = "http://54.196.60.48:80/hunahview/services/api/" + event + "/myCheckins?username=" + username;
		privateGetRequest(path, callback);
	}

	function publicSetCheckin(event, beerId, username, callback)
	{
		path = "http://54.196.60.48:80/hunahview/services/api/" + event + "/" + beerId + "/checkin?username=" + username;
		privateGetRequest(path, callback);
	}

	return {
		getEvents : publicGetEvents,
		getLocations : publicGetLocations,
		getBeers : publicGetBeers,
		getBeersByLocation : publicGetBeersByLocation,
		getBeersByBrewery : publicGetBeersByBrewery,
		getBreweries : publicGetBreweries,
		setCheckin : publicSetCheckin,
		getCheckins : publicGetCheckins,
		currentEvent : publicCurrentEvent,
		username : publicUsername
	}
})();
