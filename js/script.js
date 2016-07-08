$('.rating span.star').click(function () {
            	var total=$(this).parent().children().length;
            	var clickedIndex=$(this).index();
            	$('.rating span.star').removeClass('filled');
            	for(var i=clickedIndex;i<total;i++){
	            	$('.rating span.star').eq(i).addClass('filled');
            	}
            });
$('#menu li').on('click', function(){
    $('li.active').removeClass('active');
    $(this).addClass('active');
});