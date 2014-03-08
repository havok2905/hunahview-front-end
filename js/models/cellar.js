var cellarModel = (function()
{
	publicBeerCellar = {beers: {}};

	function publicPrintBeerList()
	{
		api.getBeers(api.currentEvent, function( beers )
		{
			privatePrintBeerPartial(beers);
		});
	}

	function publicPrintBeerListByBrewery(brewery)
	{
		api.getBeersByBrewery(api.currentEvent, brewery, function( beers )
		{
			privatePrintBeerPartial(beers);
		});
	}

	function publicPrintBeerListByLocation(location)
	{
		api.getBeersByLocation(api.currentEvent, location, function( beers )
		{
			privatePrintBeerPartial(beers);
		});
	}

	function privatePrintBeerPartial(beers)
	{
		$("#response").html("<ul id='beer-list'></ul>");
		$.each(beers, function(index, beer)
		{
			beer.beerNotes == null ? beerNotes = "&nbsp;" : beerNotes = beer.beerNotes;
			beerName = privateSpliceBeerName(beer.beer);

			beerItem = $("<li></li>");
			beerItem.append("<a data-tag='beer' href='" + beer.beer + "'>" + beerName + "</a>");

			if(beer.beer in publicBeerCellar)
			{
				beerItem.append("<div class='circle selected'></div>");
			}
			else
			{
				beerItem.append("<div class='circle'></div>");
			}

			beerItem.append("<p>" + beer.breweries[0].name + "</p>");
			beerItem.append("<p>" + beer.breweries[0].location.city + ", " + beer.breweries[0].location.state + "</p>");
			beerItem.append("<p>" + beerNotes + "</p>")

			$("#beer-list").append(beerItem);
		});
		listItem.registerEventListeners();
	}

	function privateSpliceBeerName(beerName)
	{
		if(beerName.length >= 30)
		{
			beerName = beerName.substring(0,25);
			beerName += "...";
		}

		return beerName;
	}

	return {
		printBeerList : publicPrintBeerList,
		printBeerListByLocation : publicPrintBeerListByLocation,
		printBeerListByBrewery : publicPrintBeerListByBrewery,
		beerCellar : publicBeerCellar
	}
})();
