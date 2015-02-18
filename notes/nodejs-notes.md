# Node.js  

---  

## [Events](http://nodejs.org/api/events.html)  

  * using events is a way of loosely coupling your code together by one module publishing or subscribing to an event.  This removes the need for long nested callbacks.  
  * load events module which comes baked into node (require('events'))  
  * another benefit is if no code is listening(subscribed) to an event it will just pass unnoticed => removing listeners (or event emissions) never results in js errors  
  * creating a new EventEmitter obj w/ 2 main methods (on & emit) 
  * on method takes 2 params the 'name' the second is the callback function to be called when the event occurs  
  * by defalut node allows up to 10 listeners for an event(we can change the amount with setMaxListeners)  
  * to fire the event 
 
---   
##  [Streams](http://nodejs.org/api/stream.html)  

  * unstable..  necessary??  

---  

* error handling and callbacks???  
