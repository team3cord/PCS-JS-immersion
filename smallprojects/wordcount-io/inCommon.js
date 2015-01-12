// inCommon.js  
// var exports = module.exports = {};


exports.toCompare = function(fileOne, fileTwo){
  var fileOneArray, fileTwoArray; 
  fileOneArray = fileOne.split(' ');
  fileTwoArray = fileTwo.split(' ');
  console.log(fileOneArray + '::' + fileTwoArray);


   var commonStrings = [];
  function thisValue(elOne){
    var valueOne = elOne;
    function addCommon(arg1){
       if(arg1 === valueOne){
        commonStrings.push(arg1);
        console.log('Added one.');
      } else {
        console.log(valueOne);
        console.log(arg1);
        console.log('Not this one.');
      }
      console.log(commonStrings);
    }
    fileTwoArray.forEach(addCommon);
  }

  fileOneArray.forEach(thisValue);


};

