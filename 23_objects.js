/* JavaScipt Objects */

// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// object
const student = {
    firstName: 'ram',
    class: 10
};

// Here, student is an object that stores values such as strings and numbers.

const object_name = {
    key1: value1,
    key2: value2
 }


// Javascript Nested Object

// nested object
const student1 = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student1.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student1.marks.science); // 70

// JavaScript Constructor => 

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();


// constructor function
function PersonOne () {
    this.name = 'John',
    this.age = 23,

     this.greet = function () {
        console.log('hello');
    }
}

// create objects
const person1 = new PersonOne();
const person2 = new PersonOne();

// access properties
console.log(person1.name);  // John
console.log(person2.name);  // John