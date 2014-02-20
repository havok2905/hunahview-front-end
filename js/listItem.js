var listItem = (function(elements)
{
	publicJqueryElements = elements;

	function publicRegisterEventListeners(publicJqueryElements)
	{

		$("#location-list a, #brewery-list a").click(function(event)
		{	
			event.preventDefault();
			anchor = {
				val : $(this).text(),
				tag : $(this).attr("data-tag")
			};
			console.log(anchor);
			privateHandleAnchor(anchor);
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
				});
				break;
			case "brewery":
				api.getBeersByBrewery(api.currentEvent, anchor.val, function( beers )
				{
					console.log(beers);
					privatePrintBeerList(beers);
				});
				break;
		}
	}

	function privatePrintBeerList(beers)
	{
		$("#response").html("<ul id='beer-list'></ul>");
		$.each(beers, function(index, beer)
		{
			$("#beer-list").append("<li><label class='checkbox'><input type='checkbox'/><span>" + beer.beer + "</span></label></li>");
		});	
	}

	return {
		jqueryElements : publicJqueryElements,
		registerEventListeners : publicRegisterEventListeners
	}
})();