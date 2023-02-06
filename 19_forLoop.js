/* For loop in JavaScript */

// The syntax of the for loop is:
for (initialExpression; condition; updateExpression) {
    // for loop body
}

// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}

// program to display numbers from 1 to 5
const a = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= a; i++) {
    console.log(i);     // printing the value of i
}

// program to display the sum of natural numbers
let sum = 0;
const b = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= b; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);


// program to display the sum of n natural numbers
let sum1 = 0;
const c = 100;

// looping from i = n to 1
// in each iteration, i is decreased by 1
for(let i = c; i >= 1; i-- ) {
    // adding i to sum in each iteration
    sum1 += i; // sum = sum + i
}

console.log('sum:',sum1);