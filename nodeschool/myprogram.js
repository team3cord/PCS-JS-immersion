// console.log("HELLO WORLD");
//
var args = process.argv;
var argSum = function(args){
  var sumOf = 0;
  args.forEach(function(val,index,array){
    if(index > 1) {
      sumOf = sumOf + parseInt(val); 
    }
    else {
    }
  });
  console.log(sumOf);
};
argSum(args);

