export default function nsScrl() {
	let info 				= $('.aside').innerHeight();
	let asideHeader = info - $('.aside-header').innerHeight();
	let navTab 			= asideHeader - $('.nav-tabs').innerHeight();
	let max_height  = {
		"max-height": navTab - 15 + 'px',
	};
	$('.feedEkList').css(max_height);
	$('#contact').css(max_height);
}