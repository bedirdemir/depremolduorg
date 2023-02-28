import { createStore } from "vuex";
import { appAxios } from '../utils/appAxios.js';

import EarthquakeList from "./modules/EarthquakeList.js";
import EarthquakeMap from "./modules/EarthquakeMap.js";

const store = createStore({
	state: {
		mainItem: "En üstteki bilgi..."
	},
	modules: {
		EarthquakeList,
		EarthquakeMap
	},
	actions: {
		getData({state}){
			state.EarthquakeList.isLoaded = false;
			appAxios.get("/")
			.then(res => {
				state.EarthquakeList.list = [];
				// state.EarthquakeList.list = res.data;
				
				for(let i = 0; i < 100; i++){
					state.EarthquakeList.list.push(res.data[i]);
				};
				state.EarthquakeList.isLoaded = true;
			});
		}
	}
});

export default store;