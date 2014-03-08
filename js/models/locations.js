var locationModel = (function()
{
	function publicPrintLocationsList()
	{
		api.getLocations(api.currentEvent, function( locations )
		{
			privateSortLocations(locations);

			$("#response").html("<ul id='location-list'></ul>");
			$.each(locations, function(index, location)
			{
				$("#location-list").append("<li><a data-tag='city' href='" + location.city + "'>" + location.city + " " + location.state + " " + location.country + "</a></li>");
			});
			listItem.registerEventListeners();
		});
	}

	function privateSortLocations(locations)
	{
		locations.sort(function(x, y) 
		{
		   	if(x.state > y.state)
		   	{       
		    	return 1;
		   	}
		   	else if (x.state < y.state)
		   	{
		    	return -1;
		   	}
		   	else if (x.city > y.city)
		   	{
		    	return 1;
		   	}
		   	else if (x.city < y.city)
		   	{
		    	return -1;
		   	}
		   	else
		   	{
		    	return 0;
		   	}
		});
	}

	return {
		printLocationsList : publicPrintLocationsList
	}
})();