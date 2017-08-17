exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
	counter: 0,	
	count: function (start, end) {
/*
		countAnswers.counter = start;
		var intervalID = 0;
		while(countAnswers.counter < end){
			intervalID = window.setInterval(bump, 100);
		}
		clearInterval(intervalID);

		function bump(){
			countAnswers.counter++;
		}
*/
	}
};
