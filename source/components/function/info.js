import waitforpool from './waitforpool';

let carsArray = [];
let options = {};
let dataInfo = new vis.DataSet(options);
let global = {data: []};

$.ajax({
	url: "info.json",
	dataType: 'json'
})
	.done((data) => {
		dataInfo.add(data.result);
		for (let k in dataInfo._data) {
			if (typeof dataInfo._data[k] === 'object') {
				global.data[dataInfo._data[k]['did']] = dataInfo._data[k];
				carsArray.push(dataInfo._data[k]);
			}
		}
		waitforpool();
	})
	.fail((jqXHR, textStatus, errorThrown) => {
		// modEr(jqXHR, textStatus, errorThrown);
	});

export {carsArray, dataInfo, global};
