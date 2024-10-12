// Dates :  ye bhi object h.

let myDates = new Date()
// console.log(myDates);

// ye  method h, Dates k.

// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toISOString());
// console.log(myDates.toJSON());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.toLocaleString());
// console.log(myDates.toLocaleTimeString());

 let myCreateDate = new Date(2024, 0, 23);  // isme hm month zero se lete h.
 console.log(myCreateDate.toDateString())

let createDate = new Date(2024, 0, 23, 5, 4);
console.log(createDate.toLocaleString());

//let createdates = new Date("2024-01-14"); // YY-MM-DD
let createDates = new Date("01-14-2024"); // MM-DD-YY ke rule ko follow karte h, india me.
console.log(createDates.toLocaleString());


let myCreateDates = new Date("01-14-2024")

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDates.getTime());

console.log(Date.now()); // ye value dega milisesecond me dega, aur abhi ki date dega,
                         // comparison hamesha milisecond me h karna.

console.log(Math.floor(Date.now()/1000)); // second me convert ke liye.

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default', { // ye hm use zuiada karege, aur isme "ctrl + space", btn use karege, 
                                    // isse hme sari property miljagi.
    weekday: "long",

    

})









