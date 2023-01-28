/* 20 String Methods! */
var stringOne = "Front End Developement"
var stringTwo = "Back End Developement"

// charAt() => It provides the char value present at the specified index.
console.log(stringOne.charAt(1))

// toString() => It provides a string representing the particular object.
console.log(stringOne.toString())

// valueOf() => It provides the primitive value of string object.
console.log(stringOne.valueOf())

// charCodeAt() => It provides the Unicode value of a character present at the 
// specified index.
console.log(stringOne.charCodeAt(1))

// concat() => It provides a combination of two or more strings.
console.log(stringOne.concat(stringTwo))

// endsWith() => It provides the position of a char value present in the given 
// string by searching a character from the last position.
console.log(stringOne("Developement"))

// fromCharCode => It convert unichar code into char
console.log(String.fromCharCode(114))

// includes() => It cheks whether the string include specific charecter
console.log(stringTwo.includes("End"))

// indexOf() => It provides the position of a char value present in the given 
// string.
console.log(stringTwo.indexOf("End"))

// lastIndexOf() => It provides the position of a char value present in the 
// given string by searching a character from the last position.
console.log(stringTwo.lastIndexOf("e"))

// match() => It searches a specified regular expression in a given string and
// returns that regular expression if a match occurs.
console.log(stringTwo.match(/end/g))

// repeate() => repeate the string 
console.log(stringTwo.repeat(3))

// replace() => It replaces a given string with the specified replacement.
console.log(stringTwo.replace(/end/g, "END"))

// serch() => It searches a specified regular expression in a given string and
// returns its position if a match occurs.
console.log(stringTwo.search("end"))

// slice() => It is used to fetch the part of the given string. It allows us to 
// assign positive as well negative index.
console.log(stringTwo.slice(2,4))

// split() => split a string in to array of sub string
console.log(stringTwo.split(" "))

// startWith() => checks string with specific charecter
console.log(stringOne.startsWith("Front"))

// substr() => It is used to fetch the part of the given string on the basis of
// the specified starting position and length.
console.log(stringOne.substr(2, 4))

// substring() => It is used to fetch the part of the given string on the basis
// of the specified index.
console.log(stringTwo.substring(2,4))

// toUppercase() => It converts the given string into uppercase letter.
console.log(stringOne.toUpperCase())

// toLowerCase() => It converts the given string into lowercase letter.
console.log(stringTwo.toLocaleLowerCase())

// trim() => removes spaces from either sides
var newStr = "   Run Away   " 
console.log(newStr.trim())