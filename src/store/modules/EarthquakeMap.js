export default {
    namespaced: true,
	state: {
		contactItem: "Map module içerisindeki bilgi"
	},
	getters: {
		_myGetter(){
			const abc = "abc";
			return abc
		}
	}
};