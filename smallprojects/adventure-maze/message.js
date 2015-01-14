// message.js

exports.msgCurrentRoom = function(arg){
  console.log('');
  console.log('You are here in the ' + arg +' room.');
  console.log('');
};

exports.msgWinner = function(arg){
  console.log('');
  console.log('Congratulations! In room ' + arg +' is our amazing treasure. \n It is your very own lama. \n Thank you so much for playing the AMAZING MAZE!!!!');
  console.log('');
};
exports.msgWhichDirection = function(){
  console.log('Which direction do you choose to move? (N, S, E or W)');
};
exports.msgLogMove = function(arg){
  console.log('');
  console.log('You have chosen to move to the ' + arg +'.');
  console.log('');
};
exports.msgPlayAgain= function(){
  console.log('');
  console.log('That was so much fun. Let\'s play again. =D ');
  console.log('');
};


