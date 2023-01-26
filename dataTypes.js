// There are 7 Data types in JavaScript

// 1) Boolean => it contains true and false
var data = true
if (data) {
    console.log("This is booLean dataType")
} else {
    console.log("This is not booLean dataType")
}

// 2) Null => Null is assignment value or No value
var n = null
console.log(n*10)

// 3) Undefined => variable not declare or value not assigned
var a
console.log(a+2)

// 4) Number => number 
var numOne = 4
var numTwo = 6
console.log(numOne + numTwo)

// 5) String => anything that is a word
var name = "Thomas"
console.log("My name is "+ name)

// 6) Symbol => its intances are unique and imutable
var sym1 = Symbol("foo")
var sym2 = Symbol("foo")
console.log(sym1 === sym2 )
console.log(String(sym1)===String(sym2))

// 7) Object => Object is collection of properties which have key and values
var myCar = new Object();
myCar.make = "TATA"
myCar.model = "NEXON"

var newCar = {
    make : "Tesla",
    model : "Model S"
}