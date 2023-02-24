export default {
    namespaced: true,
	state: {
		contactItem: "List module içerisindeki bilgi"
	},
	getters: {
		_myGetter(){
			const abc = "abc";
			return abc
		}
	}
};