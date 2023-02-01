/* JavaScript Arrays */

// Simple Array
const books = ["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick"];
console.log(books);

// Array Syntax
let myFavoriteFoods = new Array("pizza", "ice cream", "salad");

console.log(myFavoriteFoods); // ["pizza","ice cream","salad"]
console.log(myFavoriteFoods.length); // 3
console.log(myFavoriteFoods[1]); // "ice cream"

// The JavaScript forEach method is one of the several ways to loop through arrays
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});