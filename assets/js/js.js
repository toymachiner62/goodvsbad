$(function() {
	var toms_element = $('#toms_total').html();
	var jasons_element = $('#jasons_total').html();
	var toms_total = parseInt(toms_element);
	var jasons_total = parseInt(jasons_element);
	

	if(toms_total > jasons_total) {
		$('#toms_total').addClass('green-circle');
		$('#jasons_total').addClass('red-circle');
	} else if(jasons_total > toms_total) {
		$('#toms_total').addClass('red-circle');
		$('#jasons_total').addClass('green-circle');
	} else {
		$('#toms_total').addClass('yellow-circle');
		$('#jasons_total').addClass('yellow-circle');
	}
});