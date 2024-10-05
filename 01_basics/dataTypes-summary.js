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


// ******************************** Memory *************************************

// 1: stack(primitive dataType), 2: Heap(NON Primitive dataType) me use hoti h.

  // stack : stack me copy hi milta h.
let myYoutubeChannel = "UniquePathan";
let anotherName = myYoutubeChannel;
anotherName = "kingOfCreater"


console.log(myYoutubeChannel);
console.log(anotherName);


    // Heap : heap me refrence hi milta h.

let userOne = {
    email: "asim@gmail.com", 
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "khan@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);


