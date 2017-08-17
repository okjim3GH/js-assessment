exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(var i=0;i<arr.length;i++){
      if(arr[i] === item){
        return i;
      } 
    }
    return -1;
  },

  sum: function(arr) {
    var total = arr.reduce(function(sum, value) {
      return sum + value;
    }, 0);
    return total;
  },

  remove: function(arr, item) {
    return arr.filter(el => el != item);
  },

  isItem: function(el, index, arr){
    return arr[index] === el;
  },

  removeWithoutCopy: function(arr, item) {
    
    var temp = arr.filter(el => el != item);
    arr.splice(0,arr.length);
    for(var i = 0; i < temp.length; i++){
      arr.push(temp[i]);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0,0,item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce(function(count, currItem){
      if(currItem === item) count ++;
      return count;
    }, 0);
  },

  duplicates: function(arr) {
    let firstInstance = [];
    let foundDupes = [];
    arr.forEach(function test(currentValue){
      if(!firstInstance.includes(currentValue)){
        firstInstance.push(currentValue);
      }else if(!foundDupes.includes(currentValue)){
        foundDupes.push(currentValue);
      }
    });
    return foundDupes;

  },

  square: function(arr) {
    return arr.map(e => Math.pow(e,2));
  },

  findAllOccurrences: function(arr, target) {
    let indicies = [];
    arr.forEach(function(currentValue, index){
      if(currentValue === target) indicies.push(index);
    });
    return indicies;
  }
};
