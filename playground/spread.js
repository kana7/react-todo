// function add(a, b){
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));
// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
// console.log(...final);

var person = ['Andew', 25];
var personTwo = ['Jen', 29];

function greetingAge(a, b){
  return 'Hi '+a+', you are '+ b;
}
console.log(greetingAge(...person));
console.log(greetingAge(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Quentin', ...names];

for(i in final){
  console.log('Hi '+ final[i]);
}
