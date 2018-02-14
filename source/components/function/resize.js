export default function rsM() {
	scroll(0, 0);
	let header 					= $(".header:visible");
	let content 				= $(".content:visible");
	let viewport_height = $(window).height();
	let content_height 	= viewport_height - header.outerHeight();
	// content_height -= (content.outerHeight() - content.height());
	// content.height(content_height);
	$("#map_canvas").height(content_height);
}