var students = [
  mike = {
    name: "Mike",
    age: "100",
    height: "6ft",
    hair: "brown"
  },
  russ = {
    name: "Russ",
    age: "95",
    height: "4ft",
    hair: "red"
  },
  aaron = {
    name: "Aaron",
    age: "85",
    height: "5ft",
    hair: "green"
  }
]
// students.forEach(function(student){
//   console.log(student.name + ' is ' + student.age + ' years old. ' + 'He is ' + student.height + ' tall, with ' +student.hair + ' hair.');

// });
// var studentArrayLength = students.length;

// for(var i = 0; i < studentArrayLength; i++ ){
//   var thisStudent = students[i];
//   console.log(thisStudent.name + ' is ' + thisStudent.age + ' years old. ' + 'He is ' + thisStudent.height + ' tall, with ' + thisStudent.hair + ' hair.');
// }


var count = 0;
while (count < students.length) {
  var thisStudent = students[count];
   console.log(thisStudent.name + ' is ' + thisStudent.age + ' years old. ' + 'He is ' + thisStudent.height + ' tall, with ' + thisStudent.hair + ' hair.');
  count++;
}
