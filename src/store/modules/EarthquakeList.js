export default {
    namespaced: true,
	state: {
		isModalActive: false,
		list: null,
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