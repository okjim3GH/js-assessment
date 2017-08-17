exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    var boundFunc = fn.bind(obj);
    return boundFunc();
  },

  functionFunction: function(str) {
    return function(greeting){
      return str + ', ' + greeting;
    };
  },

  makeClosures: function(arr, fn) {
    var funcs = [];
    for(var i = 0; i < arr.length; i++){
      (function() {
        var arg = arr[i];
        var func = function() { return fn(arg);};
        funcs.push(func);
      })();
      
    }
    return funcs;
  },

  partial: function(fn, str1, str2) {
    return function(str){
      return fn(str1, str2, str);
    };
  },

  useArguments: function(...args) {
    return args.reduce(function(sum, currItem){
      sum += currItem;
      return sum;
    }, 0);
  },

  callIt: function(fn) {
    var args = Array.from(arguments);
    args.shift();
      return fn(...args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.from(arguments);
    args.shift();
    return function(...newArgs){
      return fn(...args,...newArgs);
    };
  },

  curryIt: function(fn) {
    var args = Array.from(arguments);
    args.shift();
    return function( ...newArgs){
      return fn(...args,...newArgs);
    };
  }
};
// https://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/