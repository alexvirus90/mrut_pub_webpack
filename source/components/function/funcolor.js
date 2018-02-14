import {car_imgColor} from './variable';

export default function getFunColor(obj, car_info) {
	let c = null;
	if (((obj.sensors & car_info.GB_MASK) / car_info.GB_MASK) === car_info.GB_AL && //Если включена масса
		((obj.sensors & 8) / 8) === 1) { //и если включено зажигание
		if ((car_info.F1_MASK !== "") &&
			(((obj.sensors & car_info.F1_MASK) / car_info.F1_MASK) === car_info.F1_AL)) {
			c = car_imgColor[car_info.F1_ID];
		}
		else if ((car_info.F2_MASK !== "") &&
			(((obj.sensors & car_info.F2_MASK) / car_info.F2_MASK) === car_info.F2_AL)) {
			c = car_imgColor[car_info.F2_ID];
		}
		else if ((car_info.F3_MASK !== "") &&
			(((obj.sensors & car_info.F3_MASK) / car_info.F3_MASK) === car_info.F3_AL)) {
			c = car_imgColor[car_info.F3_ID];
		}
		else if ((car_info.F4_MASK !== "") &&
			(((obj.sensors & car_info.F4_MASK) / car_info.F4_MASK) === car_info.F4_AL)) {
			c = car_imgColor[car_info.F4_ID];
		} else {
			c = "white";
		}
	} else {
		c = "grey";
	}
	return c;
}