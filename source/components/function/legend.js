import {map} from './drawMap';

export default function legend() {
	let lgnd 	 = L.control({position: 'bottomright'});		//the location of the legend
	lgnd.onAdd = () => {
		let div = L.DomUtil.create('div', 'info legend legendHide');
		div.innerHTML =
			"<div class='row mrg'>" +
			"<div class='col-2'>" +
			"<div class='col-12'>" +
			"<img src='images/car/square_grey_32.png' width='24' height='24' />" +
			"</div>" +
			"<div class='col-12'>" +
			"<img src='images/car/triangle_grey_32.png' width='24' height='24' />" +
			"</div>" +
			"<div class='col-12'>" +
			"<img src='images/car/circle_grey_32.png' width='24' height='24' />" +
			"</div>" +
			"<div class='col-12'>" +
			"<img src='images/car/circle_t_32.png' width='24' height='24' />" +
			"</div>" +
			"</div>" +
			"<div class='col-10 colHide'>" +
			"<div class='col-12'>" +
			"<p>&nbsp-&nbspМашины для уборки тротуаров</p>" +
			"</div>" +
			"<div class='col-12'>" +
			"<p>&nbsp-&nbspМашины для уборки проезжей части</p>" +
			"</div>" +
			"<div class='col-12'>" +
			"<p>&nbsp-&nbspДругая техника</p>" +
			"</div>" +
			"<div class='col-12'>" +
			"<p>&nbsp-&nbspТрекер&nbsp(для ручной уборки)</p>" +
			"</div>" +
			"</div>" +
			"</div>";
		return div;
	};
	lgnd.addTo(map);
}