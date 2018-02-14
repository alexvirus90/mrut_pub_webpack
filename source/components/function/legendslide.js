export default function legendslide() {
	//Legend  touchstart touchend
	$(".legend").on('mouseover touchstart',(e) => {
		if (e.type != "touchstart"){
			$(".legend").removeClass('legendHide');
			e.stopPropagation();
		} else {
			let hasCl = $('.legend').hasClass('legendHide');
			if (hasCl) {
				$(".legend").removeClass('legendHide');
				e.stopPropagation();
			} else {
				$(".legend").addClass('legendHide');
				e.stopPropagation();
			}
		}
	});
	$('.legend').on('mouseout touchstart', (e) => {
		if (e.type == "touchstart"){
			$('#map_canvas').on('touchstart', (e) => {
				$(".legend").addClass('legendHide');
				e.stopPropagation();
			});
		} else {
			$(".legend").addClass('legendHide');
			e.stopPropagation();
		}
	});
}