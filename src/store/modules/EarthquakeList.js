export default {
    namespaced: true,
	state: {
		isModalActive: false,
		list: [],
		selectedItem: null
	},
	mutations: {
		modalToggle(state, item){
			state.isModalActive = !state.isModalActive;
			state.selectedItem = item;
		}
	}
};