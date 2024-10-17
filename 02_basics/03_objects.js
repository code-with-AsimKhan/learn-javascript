// Singleton: agar object constructer se banega wo singloeton hoga.

// object literals // jo non constructer se object banega.
const mySym = Symbol("key1");
const jsUser = {
    name: "AsinKhan",
    age: 19,
    location: "Amroha",
    email: "asim@gmail.com",
    isLogged: false,
    lastLogInDays: ["Monday", "Saturday"],
    [mySym]: "myKey1"
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(typeof jsUser[mySym]);

jsUser.email = "khan@gmail.com"
//Object.freeze(jsUser); // freeze: ab iske baad koi bhi changing karege, wo nhi ho payega.
jsUser.email = "royal@gmail.com"

//console.log(jsUser);


jsUser.greeting = function(){
    console.log(`Hello Js User`);
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jsUser.greetingTwo());