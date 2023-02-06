/* while do while loop in javaScrit */

// The syntax of the while loop is: //

// program to display numbers from 1 to 5
// initialize the variable
let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}

// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;

// take input from the user
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {

    // add all positive numbers
    sum += number;

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);
 

// The syntax of do...while loop is: //

do {
    // body of loop
} while(condition)


// program to display numbers
let j = 1;
const m = 5;

// do...while loop from 1 to 5
do {
    console.log(j);
    j++;
} while(j <= m);

// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

let sum1 = 0;
let number1 = 0;

do {
    sum1 += number1;
    number1 = parseInt(prompt('Enter a number: '));
} while(number1 >= 0)

console.log(`The sum is ${sum1}.`);