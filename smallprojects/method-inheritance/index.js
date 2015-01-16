// index.js
//
// concept: implement flatten function from method.js with jasmine testing  
// var exports = module.exports = {};


indexMethod = function(arg){
  return arg + '!';
};
console.log(indexMethod('weiner'));
module.exports.indexMethod = indexMethod;
