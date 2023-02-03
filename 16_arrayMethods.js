/* 10 Common Array Methods */

var arr = [ "a", "b", "c" ]

// push array method => The push() method adds zero or more elements to the end of the array.
arr.push("d");
console.log(arr);

// pop array method => The pop() method removes the last element from an array and returns that element.
console.log(arr.pop());

// concat method => The concat() method returns a new array by merging two or more values/arrays.
var arr2 = ["g","q"]
console.log(arr.concat(arr2));

// Join Method => The join() method returns a new string by concatenating all of the elements in an array, separated by a specified separator.
console.log(arr.join(""));

// revese array method => The reverse() method returns the array in reverse order.
console.log(arr.reverse());

// shift array method => The shift() method removes the first element from an array and returns that element.
console.log(arr.shift());

// unshift array method => The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(arr.unshift("d"));

// slice array method => The slice() method returns a shallow copy of a portion of an array into a new array object.
console.log(arr.slice(1,2));

// sort array method => The sort() method sorts the items of an array in a specific order (ascending or descending).
console.log(arr.sort(arr));

// splice array method => The splice() method returns an array by changing (adding/removing) its elements in place.
console.log(arr.splice(2,2,"Js"))