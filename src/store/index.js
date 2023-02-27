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
			appAxios.get("/")
			.then(res => {
				state.EarthquakeList.earthquakeList = res.data;
			});
		}
	}
});

export default store;