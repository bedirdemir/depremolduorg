import { createStore } from "vuex";
import { appAxios } from '../utils/appAxios.js';

import EarthquakeList from "./modules/EarthquakeList.js";
import EarthquakeMap from "./modules/EarthquakeMap.js";

const store = createStore({
	state: {
		currentRoute: null
	},
	modules: {
		EarthquakeList,
		EarthquakeMap
	},
	mutations: {
		setRoute(state, route){
			state.currentRoute = route;
		}
	},
	actions: {
		getData({state}){
			state.EarthquakeList.isLoaded = false;
			state.EarthquakeMap.isLoaded = false;
			appAxios.get("/")
			.then(res => {
				if(state.currentRoute == "RecentList"){
					state.EarthquakeList.list = [];
					for(let i = 0; i < 100; i++){
						state.EarthquakeList.list.push(res.data[i]);
					};
					state.EarthquakeList.isLoaded = true;
				}else if(state.currentRoute == "EarthquakeMap"){
					state.EarthquakeMap.geojsonFeature.features = [];
					for(let i = 0; i < 500; i++){
						const content = `
							<b>${res.data[i].region}</b>
							<br>
							<b>Tarih: </b>${res.data[i].date} - ${res.data[i].time}
							<br>
							<b>Büyüklük: </b>${res.data[i].magnitude} ${res.data[i].scale}
							<br>
							<b>Derinlik: </b>${res.data[i].depth} km
							<br>
							<b>Koordinat: </b>${res.data[i].lat}, ${res.data[i].long}
							`;
						const color = () => {
							let magnitude = Number(res.data[i].magnitude);
							if (magnitude >= 6.0){
								return "#7f1d1d"
							}else if (magnitude > 4.4 && magnitude < 6.0){
								return "#ef4444"
							}else{
								return "#fde047"
							}
						};
						const data = {
							"geometry": {
								"type": "Point",
								"coordinates": [
									Number(res.data[i].long),
									Number(res.data[i].lat)
								]
							},
							"type": "Feature",
							"properties": {
								"popupContent": content,
								"style": {
									fillColor: color()
								}
							},
							"id": i
						};
						state.EarthquakeMap.geojsonFeature.features.push(data);
					};
					state.EarthquakeMap.isLoaded = true;
				}
				
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
});

export default store;