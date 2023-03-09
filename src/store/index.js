import { createStore } from "vuex";
import { appAxios } from '../utils/appAxios.js';
import router  from '../router/index.js';

import EarthquakeList from "./modules/EarthquakeList.js";
import EarthquakeMap from "./modules/EarthquakeMap.js";

const store = createStore({
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
			state.isLoaded = false;

			if(router.currentRoute.value.name == "RecentList"){
				appAxios.get("/last/200")
				.then(res => {
					state.EarthquakeList.list = res.data;
					state.isLoaded = true;
				})
				.catch(function (error) {
					console.log(error);
				});
			};

			if(router.currentRoute.value.name == "EarthquakeMap"){
				appAxios.get("/last/500")
				.then(res => {
					state.EarthquakeMap.geojsonFeature.features = [];
					for(let i = 0; i < res.data.length; i++){
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
						const style = () => {
							let magnitude = Number(res.data[i].magnitude);
							if (magnitude >= 6.5){
								return {
									fillColor:"#27272a",
									radius: 11
								}
							}else if (magnitude >= 5.0 && magnitude < 6.5){
								return {
									fillColor:"#7f1d1d",
									radius: 9
								}
							}else if (magnitude >= 4.0 && magnitude < 5.0){
								return {
									fillColor:"#ef4444",
									radius: 7
								}
							}else{
								return {
									fillColor:"#fde047",
									radius: 5
								}
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
								"style": style()
							},
							"id": i
						};
						state.EarthquakeMap.geojsonFeature.features.push(data);
					};
					state.isLoaded = true;
				})
				.catch(function (error) {
					console.log(error);
				});
			};
			
		}
	}
});

export default store;