# Notes on Key Concepts  

// WHY DOESN'T THIS WORK!!! 
var key = 1;
var value = 'north';
var obj = jsonMap[1];
console.log((gameMap.rooms[key].value)); // undefined  
console.log(jsonMap[1].value);  // undefined  
console.log(jsonMap[key].north); //  E 
console.log(obj[value]); // E

// WHY DOESN'T THIS WORK!!! 

* Dot notation can't accept a variable. You have to use the []notation.  
* 'use strict';  => Strict mode can be declared on a per file basis or a per function basis or in the node interpreter by node --use_strict => as a node executable use #! /usr/bin/env/ node --use_strict  
* Closure scope  returning a function that is declared in another scope =>  
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



