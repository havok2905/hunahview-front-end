var breweryModel = (function()
{
	function publicPrintBreweriesList()
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
		printBreweriesList : publicPrintBreweriesList
	}
})();