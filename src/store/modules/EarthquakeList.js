export default {
    namespaced: true,
	state: {
		isModalActive: false,
		earthquakeList: null,
		isLoaded: false,
		selectedItem: null
	},
	getters: {
		_myGetter(){
			const abc = "abc";
			return abc
		}
	},
	mutations: {
		modalToggle(state, item){
			state.isModalActive = !state.isModalActive;
			state.selectedItem = item;
		}
	}
};