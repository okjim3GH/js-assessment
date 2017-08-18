exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
  	var module = (function(g, n){
  		var obj ={
  				name: n,
  				greeting: g,
  				sayIt: function() {return this.greeting + ', ' + this.name;}  			
  			};
  			return obj;

  			}(str1, str2));
  	return module;

  }
};
