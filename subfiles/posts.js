// posts.js

var fs = require('fs');
var jade = require('jade');

var find = function(post_name, cb) {
    fs.readdir('./posts/', function(err, files) {
        if (files.indexOf(post_name + '.jade') !== -1) {
            fs.readFile('./posts/' + post_name + '.jade', function(err, data) {
                cb(jade.compile(data)());
            });
        } else {
            cb(null);
        }
    });
};

var postFiles = fs.readdirSync('./posts/');
console.log(postFiles);
var sortedFiles = [];
postFiles.forEach(function sortFiles(val,index,array){
    if (val === '.DS_Store'){
        console.log('Not a post.' );
    } 
    else {
      sortedFiles.push((val.slice(0,-5)));
      console.log(sortedFiles);
    }
});




module.exports.find = find;
