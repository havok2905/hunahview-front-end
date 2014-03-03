var locationModel = (function()
{
	function publicPrintLocationsList(locations)
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

	return {
		printLocationsList : publicPrintLocationsList
	}
})();