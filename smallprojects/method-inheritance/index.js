// index.js
//
// concept: implement flatten function from method.js with jasmine testing  
// var exports = module.exports = {};


indexMethod = function(arg){
  return arg + '!';
};
flatten = function(array){

  var flatArray = [];
  array.forEach(function callback(value,index,array){
   if(!Array.isArray(value)){
      flatArray.push(value);
   }  
    else {
      flatArray = flatArray.concat(flatten(value));
    }
  });
  return flatArray;
};

module.exports.indexMethod = indexMethod;
module.exports.flatten = flatten;

