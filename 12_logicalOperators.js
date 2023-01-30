/* Logical Operators */

// Logical NOT Operator
const a = true, b = false;
// logical NOT
console.log(!a); // false
console.log(!b); // true

// Logical AND Operator
const c = true, d = false;
const e = 4;
// logical AND
console.log(c && c); // true
console.log(c && d);  // false

console.log((e > 2) && (e < 2)); // false

// Logical OR Operator
const f = true, g = false, h = 4;
// logical OR
console.log(f || g); // true
console.log(b || g); // false
console.log((h>2) || (h<2)); // true