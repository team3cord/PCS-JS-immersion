// Test suite for Callback I/O oven lesson  

var oven = require('../oven');
var fn = require('../index');

describe('mix',function(){
  it('it should return an array',function(){
     // test example  
      var batter = mix(['flour', 'eggs', 'butter']);
//      fn.mix(['one','two','three']);
        function mix(array){
  console.log(array);
}
     // test assertion  
      expect(fn.batter).toEqual();
      
//      expect().to();
  });
});
describe('setReminder', function(){
  it('it will execute a callback after a certain amount of time', function(){
    
    expect(oven.setReminder()).toEqual('Reminder');
  });
});
