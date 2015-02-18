// mod one  
var modtwo = require('./mod-two');
function callback(err, data){
  if(err){
    callback(err);
  }
  else{
    callback(null, data);
  }
}
modtwo(process.argv[2],process.argv[3], callback);
