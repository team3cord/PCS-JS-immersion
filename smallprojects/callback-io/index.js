

// prep work
var oven = require('./oven');
oven.preheat('350deg');

// make the cake batter
var batter = mix(['flour', 'eggs', 'butter']);
var pan = {
  type: 'pan',
  diameter: '9in',
  shape: 'round'
};
var cake = pour(pan, batter);

// bake the cake
oven.addItem(cake);
oven.setTimer(30, 'seconds', function(){
  console.log('Timer done.');
});
oven.removeItem(cake);

// frost the cake
var frosting = mix(['sugar', 'butter']);
decorate(cake, frosting);

// stub functions  

function mix(array){
  console.log(array);
}
function pour(itemOne,itemTwo){
  console.log(itemOne,itemTwo);
}
function decorate(itemOne,itemTwo){
  console.log(itemOne,itemTwo);
}

