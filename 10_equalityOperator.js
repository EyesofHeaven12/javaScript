/* Equality Operator */

var num_1 = 30
var num_2 = "30"

// Abstract Equality Operator ==
// it only checkhs the values 

if ( num_1 == num_2 ) {
    console.log("Numbers are equal")
}
// Strict Equality Operator ===
// it cheks the value and the data type also

if ( num_1 === num_2 ) {
    console.log("Numbers and datatypes are equal")
} else {
    console.log("Numbers and datatypes are not equal")
}