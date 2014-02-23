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
			$("#beer-list").append("<li><a data-tag='beer' href='" + beer.beer + "'>" + beer.beer + "</a><div class='circle'></div><p>" + beer.beerNotes + "</p></li>");
		});
	}

	return {
		setStoredBeer : publicSetStoredBeer,
		getStoredBeer : publicGetStoredBeers,
		removeStoredBeer : publicRemoveStoredBeer,
		printBeerList : publicPrintBeerList
	}
})();