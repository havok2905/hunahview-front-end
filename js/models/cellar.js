var cellarModel = (function()
{
	publicCheckins = null;

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
		privateSortBeers(beers);

		$("#response").html("<ul id='beer-list'></ul>");
		$.each(beers, function(index, beer)
		{
			beer.beerNotes == null ? beerNotes = "&nbsp;" : beerNotes = beer.beerNotes;
			beerName = privateSpliceBeerName(beer.beer);

			beerItem = $("<li></li>");
			beerItem.append("<a data-tag='beer' href='" + beer.beerId + "'>" + beerName + "</a>");

			button = "<div class='circle'><span>0</span></div>";
			count = 0;

			$.each(cellarModel.checkins, function(index, checkin)
			{
				if (beer.beerId == checkin.beerId)
				{
					count++;
				}
			});

			if(count > 0)
			{
				button = "<div class='circle selected'><span>" + count + "</span></div>";
			}

			beerItem.append(button);
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

	function privateSortBeers(beers)
	{
		beers.sort(function(x, y)
		{
				if(x.beer > y.beer)
				{
					return 1;
				}
				else if (x.beer < y.beer)
				{
					return -1;
				}
				else
				{
					return 0;
				}
		});
	}

	function publicSortCheckins(checkins)
	{
		checkins.sort(function(x, y)
		{
				if(x.beerId > y.beerId)
				{
					return 1;
				}
				else if (x.beerId < y.beerId)
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
		printBeerList : publicPrintBeerList,
		printBeerListByLocation : publicPrintBeerListByLocation,
		printBeerListByBrewery : publicPrintBeerListByBrewery,
		sortCheckins : publicSortCheckins,
		checkins : publicCheckins
	}
})();
