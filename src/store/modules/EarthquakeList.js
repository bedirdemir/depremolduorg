export default {
    namespaced: true,
	state: {
		isModalActive: false,
		earthquakeList: null,
		isLoaded: false
	},
	getters: {
		_myGetter(){
			const abc = "abc";
			return abc
		}
	},
	mutations: {
		modalToggle(state, m){
			state.isModalActive = !state.isModalActive;
			console.log(m);
		}
	}
};