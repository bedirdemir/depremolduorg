import { createStore } from "vuex";

import EarthquakeList from "./modules/EarthquakeList.js";
import EarthquakeMap from "./modules/EarthquakeMap.js";

const store = createStore({
	state: {
		mainItem: "En üstteki bilgi..."
	},
	modules: {
		EarthquakeList,
		EarthquakeMap
	}
});

export default store;