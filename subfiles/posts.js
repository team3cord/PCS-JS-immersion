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

module.exports.find = find;

