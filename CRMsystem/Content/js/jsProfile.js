$(document).ready(function() {


	$(".profile-border").click(function() {
		$(".pass").fadeOut();
		$(this).next().fadeToggle();	
	});
	var owl = $(".carousel");

	$.each(owl, function() {

		var parent_id = "#"+$(this).parent().parent().attr("id");
		$(this).owlCarousel({
			items : $(this).attr("data-count"),
			autoHeight : true,
			rewindNav:false,
			callbacks:true,
			afterMove: function() {
				var owl = $(parent_id+" .owl-carousel").data('owlCarousel');
				var left = $(parent_id+" .quantity-left-users");
				var right = $(parent_id+" .quantity-right-users");
				left.text(owl.currentItem);
				right.text(owl.itemsAmount - owl.currentItem -   $(parent_id+" .owl-carousel").attr("data-count"));
				checkActive(left, right);
			}
		});

		var self=$(this);
		$(parent_id+" .right-user").click(function() {
			self.trigger("owl.next");
		});

		$(parent_id+" .left-user").click(function() {
			self.trigger("owl.prev");
		});

		var right = $(parent_id+" .quantity-right-users");
		var left = $(parent_id+" .quantity-left-users");
		right.text($(parent_id+" .owl-carousel").data('owlCarousel').itemsAmount - $(this).attr("data-count"));
		checkActive(left, right);
		
	});
function checkActive(left, right) {
	changeDisable(left);
	changeDisable(right);
}

function changeDisable(el) {
	if (el.text()==0)
	{
		el.parent().addClass("disabled");
	}
	else
	{
		el.parent().removeClass("disabled");
	}	
}

});