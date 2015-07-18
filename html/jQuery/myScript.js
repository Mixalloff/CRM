$(document).ready(function() {
	$(".profile-border").click(function() {
		if ($(this).next().css("display")=="none")
		{
			$(".pass").css("display","none");
			$(this).next().css("display","block");
		}
		else 
		{
			$(this).next().css("display","none");
		}
	});

		$(".filter-item i").click(function() {
		var el = $(this);
			if (el.attr('class')=="fa fa-caret-right")
			{
				el.removeClass("fa fa-caret-right");
				el.addClass("fa fa-caret-down");
				el.siblings("div").css("display","block");
			}
			else
			{
				el.removeClass("fa fa-caret-down");
				el.addClass("fa fa-caret-right");
				el.siblings("div").css("display","none");
			}
	});
	
	var owl = $(".carousel");
	owl.owlCarousel({
		items : owl.attr("data-count"),
		autoHeight : true
	});

	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});


	$(".right-step").click(function() {
		owl.trigger("owl.next");
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});

	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});
	$(".left-step").click(function() {
		owl.trigger("owl.prev");
	});


	$("#menu li").click(function() {
		$(this).siblings().find("a").css("color","black");
		$(this).siblings().find("a i").css("color","black");
		$(this).children("a:first").css({"color":"white","textDecoration":"none"}).children("i:first").css("color","white");
	});

$("#from,#till").datepicker();
	
});