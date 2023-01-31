/* Ternary Operator */

// Ternary Operator is only javaScript operator which has three Operand

// condition ? expression 1 : expression 2

var age = 20
console.log((age>=18) ? "your adult" : "your kid")

// Ternary Operator in ternary Operator
var firstCheck = false,
secondChek = false,
acces = firstCheck ? "accesDenied" : secondChek ? "accesDenied" : "accesGranted";

// Nested ternary operators
let a = 3;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);
