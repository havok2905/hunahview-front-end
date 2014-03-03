var cellarModel = (function()
{
	function publicGetStoredBeers()
	{

	}

	function publicSetStoredBeer()
	{

	}

	function publicRemoveStoredBeer()
	{

	}

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
		console.log("publicPrintBeerListByLocation : " + location);
		api.getBeersByLocation(api.currentEvent, location, function( beers )
		{
			privatePrintBeerPartial(beers);
		});
	}

	function privatePrintBeerPartial(beers)
	{
		console.log(beers);
		$("#response").html("<ul id='beer-list'></ul>");
		$.each(beers, function(index, beer)
		{
			beer.beerNotes == null ? beerNotes = "N/A" : beerNotes = beer.beerNotes;
			beerName = privateSpliceBeerName(beer.beer);
			$("#beer-list").append("<li><a data-tag='beer' href='" + beer.beer + "'>" + beerName + "</a><div class='circle'></div><p>" + beerNotes + "</p></li>");
		});
		listItem.registerEventListeners();
	}

	function privateSpliceBeerName(beerName)
	{
		if(beerName.length >= 30)
		{
			beerName = beerName.substring(0,30);
			beerName += "...";
		}

		return beerName;
	}

	return {
		setStoredBeer : publicSetStoredBeer,
		getStoredBeer : publicGetStoredBeers,
		removeStoredBeer : publicRemoveStoredBeer,
		printBeerList : publicPrintBeerList,
		printBeerListByLocation : publicPrintBeerListByLocation,
		printBeerListByBrewery : publicPrintBeerListByBrewery,
	}
})();