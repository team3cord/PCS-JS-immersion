


/*function counter(arg){
  var num = arg;
  var obj ={};
  obj.next = function(){
    console.log('winner?');
  };
   function sequence(){
     num++;
      console.log(num );
      return num;
      function next(){

        num++;
        console.log(num);
      }
   }

   return obj; 
}*/
function counter(arg){
  var num = arg || 0;
  var obj = {     //object
    name : "bill",  // property  
    next : function(){ // method
      console.log(num++);
    },
    reset : function(){// method
      num = 0;   
    }
  };
  return obj;
}
// return object with 2 methods next and reset, instead of returning a function  **** 

var sequence1 = counter(5);
var sequence2 = counter(13);
sequence1.next(); 
sequence1.next(); 
sequence1.next(); 
sequence1.reset(); 
sequence1.next(); 
sequence1.next(); 
sequence1.next(); 
sequence2.next(); 
sequence2.next(); 
sequence2.reset(); 
sequence2.next(); 
sequence2.next(); 

