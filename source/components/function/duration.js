export default function getDurat(t1, t2) {
	let newDate1 = t1.replace((new RegExp('-','g'),'/'), (new RegExp('T'),' '));
	let newDate2 = t2.replace((new RegExp('-','g'),'/'), (new RegExp('T'),' '));
	return parseInt(new Date(newDate2).getTime() - new Date(newDate1).getTime()) * 1.8;
}