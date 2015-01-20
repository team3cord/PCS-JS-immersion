# Notes on Key Concepts  

* // WHY DOESN'T THIS WORK!!! 
> var key = 1;  
var value = 'north';
> var obj = jsonMap[1];  
> console.log((gameMap.rooms[key].value)); // undefined    
> console.log(jsonMap[1].value);  // undefined    
> console.log(jsonMap[key].north); //  E   
> console.log(obj[value]); // E  

* // WHY DOESN'T THIS WORK!!! 

# Variable hoisting  

  * In a function the LHS look up creates the variable in the function scope but does not assign a value to it till after the code parses to that line.(var hoistingcreates an undefined var first then goes through the lines of code and assigns it)// hoist.js  

> function example(){  
> console.log(a); // undefined  
> var a = 1;  
> console.log(a); // 1   
> }  
  
---  

* Dot notation can't accept a variable. You have to use the []notation.  
* 'use strict';  => Strict mode can be declared on a per file basis or a per function basis or in the node interpreter by node --use_strict => as a node executable use #! /usr/bin/env/ node --use_strict  

---  

* $$$ Closure is a special kind of object that combines: a function & the environment in which that function was created.  The environment consists of any local variables that were in scope at the time that closure was created.$$$  
* $$$ You can use a closure anywher you might normally use an object with only a single method. $$$  
* Closure => when a variable is accessed from outside the functions  (using a global var always creates a closure variable hoisting)
* Closures allow you to pass a variable or a function to a different scope and reference the original scope of the passed item.  
* 
* Closure/Scope =>  returning a function that is declared in another scope =>  
> function counter(){  
>   console.log('why?');  
>    var bill = 'bill';  
>     function billOne(){  
>         console.log(bill );  
>          }  
>          return billOne;  
>          }  
>        var sequence1 = counter();  
>       sequence1(); //  
* Closure/Scope => returning an object allows access to the objects parameters & methods =>  
> function counter(arg){  
>   var num = arg || 0;  
>   var obj = {     //object  
>     name : "bill",  // property    
>     next : function(){ // method  
>       console.log(num++);  
>     },  
>     reset : function(){// method  
>       num = 0;     
>     }  
>   };  
>  return obj;  
> }  
> // return object with 2 methods next and reset, instead of returning a function  ****   

---  

### JavaScript multi-paradigm  

  * First-class function => supports passing functions as arguments to other functions, returning them as values from other functions, assigning them to variables || storing

    * Functional  => 
    * Imperative  =>  
    * Procedural  =>  
    * Object Oriented  =>   

---  


                                        



