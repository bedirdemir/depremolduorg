export default {
    namespaced: true,
	state: {
		isModalActive: false,
		earthquakeList: null,
		isLoaded: false,
		selectedItem: null
	},
	mutations: {
		modalToggle(state, item){
			state.isModalActive = !state.isModalActive;
			state.selectedItem = item;
		}
	}
};