$(document).ready(function() {

$("#add-in-menu").click(function() {
	$(".list").fadeToggle();
});
$(":checkbox[name='selectAllContacts']").click(function() {
	$(":checkbox[name='contactCheckBox']").prop('checked',this.checked);
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
		autoHeight : true,
		rewindNav:false,
		});
	
	$(".next_button,.right-step,.right-user").click(function() {
		owl.trigger("owl.next");
	});

	$(".prev_button,.left-step,.left-user").click(function() {
		owl.trigger("owl.prev");
	});
	
	$("#menu li").click(function() {
		$(this).siblings().find("a").css("color","black");
		$(this).siblings().find("a i").css("color","black");
		$(this).children("a:first").css({"color":"white","textDecoration":"none"}).children("i:first").css("color","white");
	});

$("#from,#till").datepicker();
	
});