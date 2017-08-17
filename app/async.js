exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
	async: function(value) {
		return new Promise((resolve, reject) => {
			setTimeout(function(){
				resolve(value);
			},5);
		});
		
	},

	manipulateRemoteData: function(url) {
		return $.ajax({url: url}).then(function(response){
			return response.people.map(x => x.name).sort();				 
		});
	}


};
