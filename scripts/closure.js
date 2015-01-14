/* var otherName = 'Google';
function init() {
  var name = 'MDN';
  function displayName() {
    console.log(name);  
    console.log(otherName);
  }
  displayName();

}
init();
function initTwo() {
  function displayNameTwo() {
    console.log(name);  
    console.log(otherName);
  }
  displayNameTwo();

}
initTwo();
*/


function counter(arg){
  var num = arg;
   function sequence(){
     num++;
      console.log(num );
   }
   return sequence; 
}
var sequence1 = counter(5);
var sequence2 = counter(13);
sequence1(); 
sequence1(); 
sequence1(); 
sequence1(); 
sequence1(); 
sequence2(); 
sequence2(); 
sequence2(); 

