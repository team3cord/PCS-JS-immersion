var fs = require('fs');
var path = require('path');

var list = fs.readdir(process.argv[2], function(err, files){
  files.forEach(function(val, index, array){
    if (path.extname(val) === ('.' + process.argv[3])){
     console.log(val);
     }
  }); 
});
