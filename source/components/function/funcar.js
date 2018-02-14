import {car_Fun, car_Color} from './variable';

export default function getFuncCar(obj, sensors) {
	let arr_FName = new Array();
	obj = obj.car_info || obj;
	let s_fun = "";
	let color = "";

	if (car_Fun[obj.F1_ID] != undefined) {
		arr_FName[0] = car_Fun[obj.F1_ID];
	} else { arr_FName[0] = ""; }
	if (car_Fun[obj.F2_ID] != undefined) {
		arr_FName[1] = car_Fun[obj.F2_ID];
	} else { arr_FName[1] = ""; }
	if (car_Fun[obj.F3_ID] != undefined) {
		arr_FName[2] = car_Fun[obj.F3_ID];
	} else { arr_FName[2] = ""; }
	if (car_Fun[obj.F4_ID] != undefined) {
		arr_FName[3] = car_Fun[obj.F4_ID];
	} else { arr_FName[3] = ""; }

	if ((((sensors & 1024) / 1024) == obj.GB_AL) && (((sensors & 8) / 8) == 1)) {
		if (((sensors & obj.F1_MASK) / obj.F1_MASK) == obj.F1_AL) {
			color = car_Color[obj.F1_ID];
			s_fun += "<span style='color:" + color + ";'><b>" + arr_FName[0] + "</b></span> " + "<br />";
		} else { s_fun += "<span style='color:grey;'><b>" + arr_FName[0] + "</b></span> " + " "; }
		if (((sensors & obj.F2_MASK) / obj.F2_MASK) == obj.F2_AL) {
			color = car_Color[obj.F2_ID];
			s_fun += "<span style='color:" + color + ";'><b>" + arr_FName[1] + "</b></span> " + "<br />";
		}	else { s_fun += "<span style='color:grey;'><b>" + arr_FName[1] + "</b></span> " + " "; }
		if (((sensors & obj.F3_MASK) / obj.F3_MASK) == obj.F3_AL) {
			color = car_Color[obj.F3_ID];
			s_fun += "<span style='color:" + color + ";'><b>" + arr_FName[2] + "</b></span> " + "<br />";
		} else { s_fun += "<span style='color:grey;'><b>" + arr_FName[2] + "</b></span> " + " "; }
		if (((sensors & obj.F4_MASK) / obj.F4_MASK) == obj.F4_AL) {
			color = car_Color[obj.F4_ID];
			s_fun += "<span style='color:" + color + ";'><b>" + arr_FName[3] + "</b></span> " + "<br />";
		} else { s_fun += "<span style='color:grey;'><b>" + arr_FName[3] + "</b></span>"; }
	} else {
		s_fun = arr_FName[0] + " " + arr_FName[1] + " " + arr_FName[2] + " " + arr_FName[3];
	}
	return s_fun;
}