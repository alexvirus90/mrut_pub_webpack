'use strict';

import './map.sass';
import 'jquery-ui/ui/widgets/progressbar';
import nsScrl from '../../components/function/scroll.js';
import rsM from '../../components/function/resize.js';
import drawMap from '../../components/function/drawMap.js';

let resizeTimer;

rsM();
drawMap();

$(window).resize(() => {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(rsM(), 100);
	$('.feedEkList').css('max-height', '');
	$('#contact').css('max-height', '');
	nsScrl();
});

$("#progressbar").progressbar({
	value: false
});