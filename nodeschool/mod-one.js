// mod one  
var modtwo = require('./mod-two');
function callback(err, data){
  if(err){
    console.log('error'); 
  }
  else{
   //console.log(data); 
    data.forEach(function(val,index,array){
      console.log(val);
    });
  }
  
}
modtwo(process.argv[2],process.argv[3], callback);
