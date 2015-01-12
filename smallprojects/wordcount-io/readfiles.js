// redadfiles.js  
// var exports = module.exports = {};

var fs = require('fs');

exports.readFiles = function(fileOne, fileTwo){
  var startingStrings, fileOneString, fileTwoString;
  fs.readFile(fileOne, { encoding: 'utf8' }, function (err, content){
    fileOneString = content;
    console.log(fileOneString);
  });
  fs.readFile(fileTwo, { encoding: 'utf8' }, function (err, content){
      fileOneString = content;
      console.log(fileTwoString);
  });
   startingStrings = (fileOneString + '*****');
   console.log(startingStrings);
};

/*
fs.readFile('./textfileone.txt', { encoding: 'utf8' }, function (err, content){
  console.log(countWords(content));
});
*/

