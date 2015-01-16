// Test suite method-inheritance lesson  

var app = require('../index');


describe('example test', function(){
  it('should log "winner"', function(){
 expect(app.indexMethod('METHOD')).toEqual('METHOD!');
  });
});

describe('Should flatten array elements if nested arrays.',function(){
 it('should return one array with no nested elements',function(){
   var newArray = [1,[2,3,4],5,6,[7,8],9];
  expect(app.flatten(newArray)).toEqual([1,2,3,4,5,6,7,8,9]);
 
 }); 
});
