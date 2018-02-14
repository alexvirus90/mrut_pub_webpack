import '../libs/MovingMarker';
import getDurat from './duration';
import getFuncCar from './funcar';
import getIcon from './icon';
import {t1, t2, t3, t4} from './variable';
import {global} from './info';
import {map} from './drawMap';

let options = {};
let data = new vis.DataSet(options);
let mrkOn = new L.LayerGroup(),
		mrkOff = new L.LayerGroup();
export default function waitforpool() {
	let _marker;

	let webSocket = new WebSocket(t4);

	webSocket.onopen = function() {
		console.log("Соединение установлено.");
	};
	webSocket.onclose = function(event) {
		if (event.wasClean) {
			console.log('Соединение закрыто чисто');
		} else {
			console.log('Обрыв соединения'); // например, "убит" процесс сервера
		}
		console.log('Код: ' + event.code + ' причина: ' + event.reason);
	};
	webSocket.onmessage = function(messg) {
		let msg = JSON.parse(messg.data);
		let obj 	= global.data[msg.BlockNumber],
			item1 = data.get(msg.BlockNumber),
			coords = new L.latLng(msg.latitude, msg.longitude);

		if (obj == undefined) return;
		if (msg.header.type == "33") return;
		if (msg.header.type == "34") return;
		if (msg.latitude == undefined || msg.longitude == undefined) return;
		if (msg.latitude == 0 || msg.longitude == 0) return;
		if ((msg.route & 32) == 32) return;
		if (msg.Version == 7179) return;

		if(item1 != null){

			let dur = getDurat(item1.sls.unit_time, msg.unit_time),
				сIcon  = getIcon(obj, msg);
			_marker = item1.mO;
			if(_marker._latlngs.length > 5){
				_marker._latlngs.shift();
			}
			// _marker.addLatLng( coords, dur);
			data.update({id: msg.BlockNumber, mO: _marker, sls: msg, obj: obj, latlon: coords});
			if(dur >= 100000 && ((item1.sls.sensors & 8) / 8) == 1 && (Math.round(item1.sls.speed)) >= 10) {
				console.log( msg.BlockNumber, '|',
					item1.mO.options.title, '|',
					item1.sls.sensors, '|',
					(Math.round(item1.sls.speed * 1) / 1) + 'км/ч', '|',
					dur / 1000 + 'c');
				let rem = _marker.remove();
				// tAr.add(_marker);
				// let it = tAr.get({
				// 	fields: ['options']
				// });
				// console.log('it', it);
				if (rem){
					_marker.addLatLng(coords, dur);
					console.log('remove');
				} else {
					console.log('not remove');
				}
			}
			if(map.getBounds().contains(coords)) {
				if(map.getZoom() >= 14 ) {
					_marker.moveTo(coords, dur);
					_marker.start();
				} else {
					_marker.setLatLng(coords, dur);
				}
			}
			_marker._popup.setContent("<div><b>Тип: </b>" + obj['job'] + "</br>" +
				"<b>Предприятие: </b>" + obj['vgn'] + "</br>" +
				"<b>Автоколонна: </b>" + obj['acn'] +"</br>" +
				"<b>Гаражный номер: </b>" + obj.nc + "</br>" +
				"<b>Марка: </b>" + obj['bn'] + "</br>" +
				"<b class='name'>Функция:</b>" + "<div class='func'>" +  getFuncCar(obj, msg.sensors) + "</div>" + "</br>" +
				"<b>Скорость: </b>" + Math.round(item1.sls.speed) + " км/ч</div>");
		} else {
			let func 	 = getFuncCar(obj, msg.sensors),
				сIcon  = getIcon(obj, msg),
				marker = L.Marker.movingMarker([coords, coords], [], {title: obj.nc, icon: сIcon});

			let popUp =
				"<div><b>Тип: </b>" + obj['job'] + "</br>" +
				"<b>Предприятие: </b>" + obj['vgn'] + "</br>" +
				"<b>Автоколонна: </b>" + obj['acn'] +"</br>" +
				"<b>Гаражный номер: </b>" + obj.nc + "</br>" +
				"<b>Марка: </b>" + obj['bn'] + "</br>" +
				"<b class='name'>Функция:</b>" + "<div class='func'>" +  func + "</div>" + "</br>" +
				"<b>Скорость: </b>" + Math.round(msg.speed) + " км/ч</div>";
			if (((msg.sensors & obj.GB_MASK) / obj.GB_MASK) === obj.GB_AL &&
				((msg.sensors & 8) / 8) == 1) {
				mrkOn.addLayer(marker);
			} else {
				mrkOff.addLayer(marker);
			}
			data.add([{
				id: msg.BlockNumber,
				mO: marker.bindPopup(popUp),
				sls: msg,
				obj: obj,
				latlon: coords
			}]);
		}
	};
	webSocket.onerror = function(error) {
		console.log("Ошибка " + error.message);
	};

}
export {data, mrkOn, mrkOff};