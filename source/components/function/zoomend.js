import {mrkOn, mrkOff, data} from './waitforpool';
import {map} from './drawMap';

export default function zoom() {
	map.on('zoomend', () => {
		let zoom = map.getZoom();
		mrkOn.clearLayers();
		mrkOff.clearLayers();
		data.forEach((row) => {
			let sls = row.sls,
				obj = row.obj,
				latlon = new L.LatLng(sls.latitude, sls.longitude);
			if(map.getBounds().contains(latlon)){
				if (((sls.sensors & obj.GB_MASK) / obj.GB_MASK) === obj.GB_AL &&
					((sls.sensors & 8) / 8) == 1) {
					mrkOn.addLayer(row.mO);
				} else {
					mrkOff.addLayer(row.mO);
				}
			}
		});
	});
}