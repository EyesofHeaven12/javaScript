/* Null vs Undefined */

//Variable declared and assigned to null 
var a = null;   
console.log( a );   //output: null  
console.log( typeof(a) );   //output: object 

//Variable declaration without assigning any value to it  
var a;        
console.log(a);  //undefined  
console.log(typeof(a));  //undefined  
console.log(undeclaredVar);  //Uncaught ReferenceError: undeclaredVar is not defined  