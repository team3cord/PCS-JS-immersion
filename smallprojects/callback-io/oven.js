var oven = {
//  preheat: function() {},
 // addItem: function() {},
  //removeItem: function() {},
  setTimer: function(timeInt,timeUnits, callback) {
    var delay;
    if (timeUnits === 'minutes'){
       delay = timeInt * 1000; 
    } else if 
      (timeUnits === 'seconds'){
       delay = timeInt * 100; 
    } else {
       delay = timeInt;    
    } // default milliseconds
    setTimeout(callback, delay);
    },
  setReminder: function(){
         return console.log('Reminder'); 
   }
 
};

module.exports = oven;
module.exports = oven.setReminder;
