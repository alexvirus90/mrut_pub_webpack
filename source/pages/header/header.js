'use strict';

import 'bootstrap-v4-dev';
import './header.sass';
import '../../components/function/aside';
import '../../components/function/news';
import setAttr from '../../components/function/add.js';
import srchAddr from '../../components/function/searchAddress.js';
import srchCar from '../../components/function/searchCar.js';
import switdh from '../../components/function/switch.js'
import clear from '../../components/function/clear.js'
import nsScrl from '../../components/function/scroll.js';

let input = document.createElement('input');
$('#search_clear').append(input);
$('#search').append("<a href='#' class='closed'><i class='fa fa-times'></i></a>");
setAttr(input, {"type": "text", "id": "search_query", "class": "address clearable", "placeholder": "Поиск по адресу"});

srchAddr();
srchCar();
switdh();
clear();

$('.col-left').click(() => {
	if ($(window).width() <= 575){
		$('#system-tab').removeClass('active');
		$('.icon_system').addClass('active');
	}
});
$('.col-right').click(() => {
	nsScrl();
	if ($(".aside").hasClass("in")) {
		$('.aside').asidebar('close')
	} else {
		$('.aside').asidebar('open')
	}
});
$('#news').FeedEk({
	FeedUrl:'http://gov.spb.ru/gov/otrasl/blago/news/rss/',
	MaxCount: 10,
	ShowDesc: true,
	ShowPubDate: true,
	DescCharacterLimit: 100
});


