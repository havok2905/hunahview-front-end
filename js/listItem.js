var listItem = (function()
{
	function publicRegisterEventListeners()
	{

		$("#location-list a, #brewery-list a").click(function(event)
		{	
			event.preventDefault();
			anchor = {
				val : $(this).text(),
				tag : $(this).attr("data-tag")
			};
			privateHandleAnchor(anchor);
		});

		$("#beer-list li").click(function(event)
		{
			$(".circle", this).toggleClass("selected");
			event.preventDefault();
		});
	}

	function privateHandleAnchor(anchor)
	{
		switch(anchor.tag)
		{
			case "city":
			case "state":
			case "country":
				api.getBeersByLocation(api.currentEvent, anchor.val, function( beers )
				{
					privatePrintBeerList(beers);
					publicRegisterEventListeners();
				});
				break;
			case "brewery":
				api.getBeersByBrewery(api.currentEvent, anchor.val, function( beers )
				{
					console.log(beers);
					privatePrintBeerList(beers);
					publicRegisterEventListeners();
				});
				break;
		}
	}

	function privatePrintBeerList(beers)
	{
		$("#response").html("<ul id='beer-list'></ul>");
		$.each(beers, function(index, beer)
		{
			$("#beer-list").append("<li><a data-tag='beer' href='" + beer.beer + "'>" + beer.beer + "</a><div class='circle'></div><p>" + beer.beerNotes + "</p></li>");
		});	
	}

	return {
		registerEventListeners : publicRegisterEventListeners
	}
})();