//console.log(gameMap.rooms);

console.log(jsiGame.map(gameMap));
//console.log(jsiGame.map(require('./' + process.argv[2])));
prompt.start();
console.log("Welcome to the most amazing adventure game ever.");
prompt.get(['username'], function(err, result){
  var userName = result.username;
  console.log('Let\'s begin ' + userName + '!');
  console.log(userName + ', You are cell B in the maze. There are 3 doors. One is to the west, one is to the north, one is to the east. Which direction do you want to go?'); 
    prompt.get(['direction'], function(err, result){
      switch (result.direction){
      case 'west' :
        console.log('You are now in cell A.');
        getLocation.jsonLocation();
        break;
      case 'north' :
        console.log('You are now in cell E.');
        getLocation.newjsonLocation();
        break;
      case 'east' :
        console.log('You are now in cell C.');
        break;
      default:
        console.log(userName + ', That is not a direction. You failed!');
        process.exit(code=0);
      }
    });
});
