# JS fundamentals notes  

---  

* built in types:  
  * null  => special (buggy) with typeof operator  
  * undefined  => typeof undefined     === "undefined"; // true  
  * boolean    => typeof true          === "boolean";   // true  
  * number     => typeof 42            === "number";    // true  
  * string     => typeof "42"          === "number";    // true  
  * object     => typeof { life: 42 }  === "object";    // true    
  * symbol     => typeof Symbol()      === "symbol";    // true NEW IN ES6 ###  

---  

* [5 QUESTIONS ](https://medium.com/humans-create-software/how-do-you-judge-a-javascript-programmer-by-only-5-questions-f2abdf7dfd4a)  
  1. Explain the difference between "call" & "apply"?  
  2. Explain "map"?  
  3. Explain "bind"?  
  4. Explain how "colsures" work? general programming & JS  
  5. Explain JS preformance problem & a solution?  

---   

* Lexical scope: is the model based on where variables and blocks of scope are defined by author-time decisions. The lexing phase(tokenizing) of the compiler is essentially able to know where and how all identifiers are declared, and predict how they will be looked-up during execution.  
    * 2 mechanisms can "cheat" lexical scope: eval() and with by creating or modifying scope at runtime. Therefore should be avoided.  
* First class citizens: functions are first class citizens and can be used like any other obj, passing as arg to another function, returning them as values from other functions, assigning them to variables and or storing them in data structures.  
* Variable hoisitng: 
* Higher-order functions:  
* Getters & Setters:  
* Closures:  
* block scope vs function scope:  
* IIFE:  
* Objects:  
  * reference datatypes vs primative datatypes:  
  * obj data properties attributes:  
  * obj literals:
  * obj constructors:
  * obj patterns:
  * obj notation (dot & bracket):
  * obj own & inherited properties:
  * accessing and enumerating properties on obj:
  * accessing inherited properties on obj:  
  * obj serializing and deserializing:
* Functions:  
  * invocation: 4 types:
    * as a function: straight forward manner.  func();  
    * as a method: which ties the method to an obj (enabling OOP) obj.func();  
    * as a constructor in which a new obj is brought into being var fn = new func(){// code };  
    * with its apply() or call() methods (explained below)  
  * implicit paramaters:  all function invocations are silently passed 2 implicit paramaters: arguments and this. arguments is a collection & this => parameter refers to an object that’s implicitly associated with the function invocation and is termed the function context.
  * apply & bind:
  * curry: 
  * callbacks:
  * tailcalls: 
  * try catch:  
  * event handlers:
  * this: 
  * recursion:  
  * singleton:  
  * constructors vs factories:  [eric elliot](http://ericleads.com/2013/01/javascript-constructor-functions-vs-factory-functions/)???   
* Arrays vs Collections: 
* Objects & Prototypes:  
* Concurrency: 
* Event Loop:  
* Syntax:  
* Inheritance: 
* Memory leak:
* Gotchas:  
* ES6:
* Classifiying tools: gulp grunt express node ect.  
* deep copying an obj in JS => var clone_of_a = JSON.parse( JSON.stringify( a ) ); if there is no functions in the obj  

