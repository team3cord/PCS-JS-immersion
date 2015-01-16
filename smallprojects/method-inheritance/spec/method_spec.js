// Test suite method-inheritance lesson  

var app = require('../index');


describe('example test', function(){

  it('should log "winner"', function(){
 expect(app.indexMethod('METHOD')).toEqual('METHOD!');
//      expect(app.methodObj.weiner('winner')).toEqual('winner!');
  });

});
