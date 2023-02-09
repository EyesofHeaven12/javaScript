/* JavaScript Array iteration methods */

// For Each() => The forEach() method executes a provided function for each array element

let numbers = [1, 3, 4, 9, 8];

// function to compute square of each number
function computeSquare(element) {
  console.log(element * element);
}

// compute square root of each element
numbers.forEach(computeSquare);

//  map() => The map() method creates a new array with the results of calling a function for every array element.

let numbers1 = [2, 4, 6, 8, 10];

// function to return the square of a number
function square(number1) {
  return number1 * number1;
}

// apply square() function to each item of the numbers list
let square_numbers = numbers1.map(square);
console.log(square_numbers);

// Filter() => The filter() method returns a new array with all elements that pass the test defined by the given function.

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers
function checkEven(number3) {
  if (number3 % 2 == 0)
    return true;
  else
    return false;
}

// create a new array by filter even numbers from the numbers array
let evenNumbers = numbers3.filter(checkEven);
console.log(evenNumbers);

// Reduce() => The reduce() method executes a reducer function on each element of the array and returns a single output value.

const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);

// find() => The find() method returns the value of the first array element that satisfies the provided test function.

let numbersOne = [1, 3, 4, 9, 8];

// function to check even number
function isEven(element) {
  return element % 2 == 0;
}

// get the first even number
let evenNumber = numbersOne.find(isEven);
console.log(evenNumber);

// Array.lenght() => The length property returns or sets the number of elements in an array.

let city = ["California", "Barcelona", "Paris", "Kathmandu"];

// find the length of the city array
let len = city.length;
console.log(len);
