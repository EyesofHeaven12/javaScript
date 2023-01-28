/* Hoisting! */

// Variable and function declarion are the process befour any code is executed
// Declaring the variables any where is equale to declaring on top this also
// means variables and functions can be used befour declaring It but the values 
// assigned to variables are not hoisted

console.log(user)
var user;
user = "I am user"
console.log(user)

console.log(admin)
var admin = "I am admin"
console.log(admin)

add() //Hoisted
function add(){
    console.log("Adding Numbers")
}

twoSum() //twoSun is not a function
var twoSum = function(){
    console.log("Value is TwoSum")
}