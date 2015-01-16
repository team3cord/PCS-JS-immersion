// Object methods and inheritance  

// concepts: methods are functions(behaviors) of an object  
//           show how inheritance allows using methods of child objects 

// bryces flatten.js example http://github.com/brycewjohnson/jsi-work/functional/flatten.js  

function flatten(array) {
  var newArray = [];
  array.forEach(function(value) {
    if (!Array.isArray(value)) {
      newArray.push(value);
    }
    else {
      newArray = newArray.concat(flatten(value));
    }
  });
  return newArray;
}

var test = [1,2,[4,5,[13,35]],42];

console.log(flatten(test));

Array.prototype.flatten = function() {
  var newArray = [];
  this.forEach(function(value) {
    if (!Array.isArray(value)) {
      newArray.push(value);
    }
    else {
      newArray = newArray.concat(flatten(value));
    }
  });
  return newArray;
};

console.log(test.flatten());

/*
var flattened = _.reduce(test, function flatten2(newArray, element) {
    if (!Array.isArray(element)) {
	newArray.push(element);
    }
    else {
      element.forEach(function () {
	newArray = newArray.concat(flatten2(element));
      });
    }
    return newArray;
}, []);

console.log(flattened);
*/