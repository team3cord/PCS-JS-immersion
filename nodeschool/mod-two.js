// mod two  
var fs    = require('fs'),
    path = require('path');

module.exports = function(dir, ext, callback){
  var list =fs.readdir(dir, function cbFunction(err, data){
    if(err) {
       return callback();
    }
    else {
      data.forEach(function(val,index,array){
        if(path.extname(val) === '.' + ext){
          console.log(val); 
        }
      }); 
    }
  });
};
