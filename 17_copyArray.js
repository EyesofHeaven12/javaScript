/* Coping Arrays */

var orignal = [ true, true ,undefined, false, null ]

// Slice => 
var copy = orignal.slice(0);

// Spread operator =>
var copy2 = [...orignal];

// Deep copying => 
var deepArray = [["JavaScriptArray"]]
var shallowCopy = deepArray.slice(0)

// shallowCopy[0].push("is Great")
// console.log(deepArray[0], shallowCopy[0])

var deepCopy = JSON.parse(JSON.stringify(deepArray));

deepCopy[0].push("is Great");
console.log(deepArray[0], deepCopy[0])