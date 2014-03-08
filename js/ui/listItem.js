var listItem = (function()
{
	function publicRegisterEventListeners()
	{

		$("#location-list li, #brewery-list li").click(function(event)
		{
			anchor = {
				val : $("a", this).attr("href"),
				tag : $("a", this).attr("data-tag")
			};
			privateHandleAnchor(anchor);
		});

		$("#response a").click(function(event)
		{
			event.preventDefault();
		});

		$("#beer-list-li").click(function(event)
		{

		});

		$("#beer-list li").click(function(event)
		{
			beer = $("a",this).attr("href");
			count = $(".circle span", this).text();
			count = parseInt(count);

			count++;
			$(".circle", this).html("<span>" + count + "</span>");
			$(".circle", this).addClass("selected");

			api.setCheckin(api.currentEvent, beer, api.username, function(checkin)
			{
			});


		});
	}

	function privateHandleAnchor(anchor)
	{
		history.pushState({"state" : "beers"}, "beers", null);
		switch(anchor.tag)
		{
			case "city":
			case "state":
			case "country":
				cellarModel.printBeerListByLocation(anchor.val);
				break;
			case "brewery":
				cellarModel.printBeerListByBrewery(anchor.val);
				break;
		}
	}

	return {
		registerEventListeners : publicRegisterEventListeners
	}
})();
