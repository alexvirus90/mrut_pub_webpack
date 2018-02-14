import getFunColor from './funcolor';

export default function getIcon(vehicleInfo, obj) {
	let imgType = vehicleInfo['imgType'],
			color = getFunColor(obj, vehicleInfo),
			imgPath;

	imgPath = 'images/car/' + imgType + color + '_32.png';
	return L.icon({iconUrl: imgPath, iconSize: [32, 32], iconAnchor: [16, 16]});
}