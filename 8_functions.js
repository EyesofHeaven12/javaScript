/* Functions! */

// Functions are fundamental building blocks of javaScript
// Functions is a block of code that we can reuse

function name(params) {
    return params * params;
}

function square(num){
    return num * num;
}

console.log(square(4));

// Scope => it is visiablity of variables
var someVar = "Hat";  // Global var
function myFun(){
    var someVar = "Shoes"   //Local var
    console.log(someVar)
}
myFun();
console.log(someVar)

// Nesting of Function

// Function declaration is hoisted

addSquares(1,3) // = 10 gives restult befour declaring it

function addSquares(a,b){
    function square(x){ // Local Scope
    return x * x;}
    return square(a) + square(b)
}

a = addSquares(2,3)
b = addSquares(3,4)
c = addSquares(4,5)
