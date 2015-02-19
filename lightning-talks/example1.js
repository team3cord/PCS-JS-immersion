function foo(){

  console.log(example); // undefined  

  console.log('Matt is great at lightning talks!'); // truthy  

  var example = 'lightning';

  console.log(example); // 'lightning'  

}
foo();

// console.log(example); // Reference Error example is not defined  


