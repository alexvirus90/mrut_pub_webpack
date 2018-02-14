import {mrkOn, mrkOff, data} from './waitforpool';
import {map} from './drawMap';

export default function move() {
	map.on('moveend', () => {
		data.forEach((row) => {
			let sls = row.sls,
				obj = row.obj,
				latlon = row.latlon;
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