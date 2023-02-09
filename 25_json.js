/* Json In javaScript */

// JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data.

// JSON syntax
// {
//     "name": "John",
//     "age": 22,
//     "gender": "male",
// 
// }

// JSON array
// [ "apple", "mango", "banana"]
// 
// // JSON array containing objects
// [
//     { "name": "John", "age": 22 },
//     { "name": "Peter", "age": 20 }.
//     { "name": "Mark", "age": 23 }
// ]


// json object
const jsonData = '{ "name": "John", "age": 22 }';

// converting to JavaScript object
const obj = JSON.parse(jsonData);

// accessing the data
console.log(obj.name); // John


// JavaScript object
const jsonData1 = { "name": "John", "age": 22 };

// converting to JSON
const obj1 = JSON.stringify(jsonData1);

// accessing the data
console.log(obj1); // "{"name":"John","age":22}"


/* JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa. JSON data are very easy to parse and use. It is fast to access and manipulate JSON data as they only contain texts.

JSON is language independent. You can create and use JSON in other programming languages too. */