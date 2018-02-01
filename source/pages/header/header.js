'use strict';

import 'bootstrap-v4-dev';
import './header.sass';
import '../../components/aside/aside';
import '../../components/function/news';
import nsScrl from '../../components/function/scroll.js';

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


