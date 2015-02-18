// mod two  
var fs    = require('fs'),
    path = require('path');

module.exports = function(dir, ext, callback){
  fs.readdir(dir, function cbFunction(err, data){
    if(err) {
       return callback(err);
    }
    else {
      var list = [];
      data.forEach(function(val,index,array){
        if(path.extname(val) === '.' + ext){
         list.push(val);
        }

      });
      return callback(null,list);
    }
  });
};
// official solution  
//   var fs = require('fs')
//    var path = require('path')
//
//   module.exports = function (dir, filterStr, callback) {
//
//     fs.readdir(dir, function (err, list) {
//      if (err)
//       return callback(err)
//
//       list = list.filter(function (file) {
//        return path.extname(file) === '.' + filterStr
//     })
//
//       callback(null, list)
//    })
// }
