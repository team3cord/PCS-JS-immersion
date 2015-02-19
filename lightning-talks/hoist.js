// hoist.js  

// JavaScript is compiled at runtime  

// 3 main player engine compiler & scope  
 



var example = 'lightning';  // 2 distinct statements  

var example  // compiler checks the current scope to see if example exists, if yes it moves on, if not it creates it in the current scope.

example = 'lightning';  // engine later executes a lookup in current scope and an assignment of example = lighting.  

//  LHS look-up  (left hand side)  
//  RHS look-up  (right hand side)  although it really means look-up besides LHS  

var a = 1;  //  is a LHS (assign a value) explicit assignment

console.log(a); // is a RHS  (retrieve value)

function foo(a){
  console.log(a);
}
foo(2); // is a LHS (assigning a = 2) implicit assignment  
        // when foo is invoked there is a RHS retrieval of .log(a)  

/* ========================================================= */

// only the declarations are hoisted  not the assignment  

function foo(){

  console.log(example); // undefined  

  console.log('Matt is great at lightning talks!'); // truthy  

  var example = 'lightning';

  console.log(example); // 'lightning'  

}
foo();

console.log(example); // Reference Error example is not defined  

/* ========================================================= */ 



