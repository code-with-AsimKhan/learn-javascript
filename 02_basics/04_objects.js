// Singleton object.

//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "AsimKhan"
tinderUser.isLogged = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com", 
    fullName: {
        userFullName: {
            firstName: "Asim",
            lastName: "Khan"
        }
    }
}

//console.log(regularUser.fullName.userFullName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign({}, obj1, obj2) // object.assign: ye object ko add karta h, but ise km use karte h.

const obj3 = {...obj1, ...obj2} // Spread: ye bhi object ko add karta h, but ise jiyada use karte h.
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // object.keys: isme sari keys deta h, array ki form me output milta h.
// console.log(Object.values(tinderUser)); // object.values: isme sari values deta h, array ki form me output milta h.
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged')); // hasOwnProperty: ye object me property check karne ke liye.

// object deStructuring.

const course = {
    courseName: "Js in Hindi", 
    price: "999",
    courseIntructor: "AsimKhan"
}

 //console.log(course.courseIntructor);

 const {courseIntructor: instructor, price} = course // destructuring: isme name bhi change kar sakte h,
 console.log(instructor);                            // aur key ke name bhi change karsakte h.

 console.log(price);
 

//  {                        // Api jo h object ki form me bhi miljati h.
//     "name": "asimKhan",
//     "courseName": "js in Hindi",
//     "price": "999"
//  }
 
 
// [         // Api jo h Array ki form me bhi miljati h.
//     {},
//     {},
//     {}
// ]
  