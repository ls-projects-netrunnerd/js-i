// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunc = () => console.log("Function was invoked!");

myFunc();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

const anotherFunc = param => param;

console.log(anotherFunc("Example"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

const add = (p1, p2) => p1 + p2;

console.log(add(1, 2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const sub = (p1, p2) => p1 - p2;

console.log(sub(1, 2));

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

const ea = [1, 2, 3, 4];

const tr = ea.map(num => num * 3);

console.log(tr);

