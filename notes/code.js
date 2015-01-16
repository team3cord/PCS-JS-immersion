var obj1, obj2;

obj1 = {
  name: "Matt",
  status: "awesome"

};
obj2 = obj1;
obj1.name = "Bill";
obj2.name = "Mary";
console.log(obj1.status);  // awesome
console.log(obj2.status);  // awesome


console.log(obj2.name); // Mary
console.log(obj1.name); // Mary

obj2.name = "Sarah";

console.log(obj2.name); 
console.log(obj1.name);
obj1 = {
  filetype: "ex"
};
console.log(obj1.filetype);
console.log(obj2.filetype);
console.log(obj2.name);
// Prototype Chain  

var parent = {
  get: function fn(){
    console.log(this.val);
  },
  val: 55
};
var child = Object.create(parent);
var otherChild;  // undefined  
otherChild = child;
console.log(child.val); // 55
console.log(otherChild.val); // 55
child.val = 155;
console.log(child.val);  // 155
console.log(otherChild.val); // 155


var item1 = 'spoon';
var item2 = item1;

console.log(item1); //spoon
console.log(item2); //spoon

item1 = 'fork';

console.log(item1); //fork
console.log(item2); //spoon

// 
