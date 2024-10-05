// Primitive dataTypes

// 7 Types : String, Number, Boolean, null, undefined, Symbol, bigInt

const score = 100; // Number
const scoreValue = 100.2; // Nummber

const isLoggedIn = false; //Boolean
const outsideTemp = null; //null
let userEmail ; // undefined

const id = Symbol('123'); // Symbol
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber =175895898710094891849n; /// bigInt : isme bas last me (n) lagadete h.



// NON(Primitive dataTypes)
 
// Array, objects, Functions

const heros = ["Delhi", "Agra", "Amroha"]; // Arrays

let myObj = {        // objects
    name: "AsimKhan",
    age: 18,
}                           

const myFunction = function(){  // Functions
    console.log("HelloWorld");
    
}