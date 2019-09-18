// Check
$('ul').on('click', 'li', function() {
	$(this).toggleClass('checked');
});

// Delete
$('ul').on('click', 'span', function(event) {
	$(this)
		.parent()
		.fadeOut(500, function() {
			$(this).remove();
		});
	event.stopPropagation();
});

//Add
$('input').on('keypress', function(event) {
	if (event.which === 13) {
		var todo = $(this).val();
		$('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${todo}</li>`);
		$(this).val('');
	}
});

//Toggle input
$('.fa-plus').on('click', function() {
	$('input').fadeToggle();
});
