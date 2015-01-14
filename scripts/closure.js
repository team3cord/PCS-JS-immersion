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


function counter(){
  var num = 0;
   function sequence(){
     num++;
      console.log(num );
   }
   return sequence; 
}
var sequence1 = counter();
var sequence2 = counter();
sequence1(); 
sequence1(); 
sequence1(); 
sequence1(); 
sequence1(); 
sequence2(); 
sequence2(); 
sequence2(); 

