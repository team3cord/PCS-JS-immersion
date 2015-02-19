// example two  

// function declarations are hoisted  

function thisOutsideFunction(){

  foo();  

  console.log('Matt loves lightning!');

  function foo(){
     console.log('Why does this work up here???');
  }
}
thisOutsideFunction();


// foo(); // Reference Error foo in not defined  
