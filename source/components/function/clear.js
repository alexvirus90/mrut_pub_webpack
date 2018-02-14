export default function clear() {
	$('#search_query').on('input',() => {
		if($('#search_query').val() !== '') {
			$('.closed').show();
			$('.button-state').hide();
		}
	});
	$('.closed').click(() => {
		$('.button-state').show();
		$('.closed').hide();
		$('#search_query').val('');
	});
}