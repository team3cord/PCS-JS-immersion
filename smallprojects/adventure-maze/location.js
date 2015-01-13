// location.js  

var gameMap = require('./game.json');

exports.currentRoom = function(roomName){
  


  function currentCallback(element, index, array) {
//    console.log(array[index].name);
//   console.log(roomName);

  if(roomName === array[index].name){
    //var currentKeys = Object.keys(room);
    var thisRoom = element; 
    console.log(thisRoom); 
    //console.log(currentKeys);
  }
 //   console.log('none' );
  }
//  console.log(gameMap.rooms[0].name);
  
  (gameMap.rooms).forEach(currentCallback);
// which room  
};

exports.currentRoomProperties = function(){
  console.log('new');
  // properties of room  
  // number of doors  
  // directions of doors  
};


