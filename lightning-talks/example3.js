// example three  
function thisOutsideFunction(){
  foo(); // Bonus Points => which error??? 

  console.log('There is no such thing as too much lighning!');

  var foo = function(){
    console.log('Not sure I will work!?!' );
  };
  foo(); // Not sure I will work!?!  
}
thisOutsideFunction();

foo(); //  Bonus Points => which error???

