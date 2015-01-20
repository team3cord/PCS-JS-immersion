// var hoisting  
var a = 1;
console.log(a); // 1

//console.log(b); // ReferenceError: b is not defined.

function doStuff(){
  console.log(a); // 1 
  console.log(b); // undefined
  var b = 2;
  console.log(b); // 2
}
doStuff();
