var cellar = (function()
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

	function publicPrintBeerList(beers)
	{
		$("#response").html("<ul id='beer-list'></ul>");
		$.each(beers, function(index, beer)
		{
			beer.beerNotes == null ? beerNotes = "N/A" : beerNotes = beer.beerNotes;
			$("#beer-list").append("<li><a data-tag='beer' href='" + beer.beer + "'>" + beer.beer + "</a><div class='circle'></div><p>" + beerNotes + "</p></li>");
		});
		listItem.registerEventListeners();
	}

	return {
		setStoredBeer : publicSetStoredBeer,
		getStoredBeer : publicGetStoredBeers,
		removeStoredBeer : publicRemoveStoredBeer,
		printBeerList : publicPrintBeerList
	}
})();