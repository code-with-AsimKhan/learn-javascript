                                                                                                                                                                                               // if

// if(true/flase){  // if: isme agar true hoga to y execute hoga, agar hme false mila to y execute nahi hoga.(true)
                    // if: isme agar false hoga to y execute hoga, agar hme true mila to y execute nahi hoga.(false)

// }
// <, >, <=, >=, ==, ===, !==


const temperature = 420;

// if(temperature < 50){
//     console.log("less than 50");
    
// }else{
//     console.log("temperature greater than 50");
    
// }
// console.log("Execute"); // ye to execute hoga hi hoga.because ye scope se bhar he.

// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`User Power ${power}`);
    
// }
//console.log(`User Power ${power}`);  // ye error dega, because ye variable blockScope se bahar h.

//   Nested conditional Statement.

// const balance = 1000;
// if(balance < 500){
//     console.log("less than");
    
// }else if(balance < 750){
//     console.log("less than 750");
    
// }else if(balance < 900){
//     console.log("less than 900");
    
// }else {
//     console.log("less than 1200");
    
// }

const userLoggedIn = true ;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2 == 2 ){ // agar isme ek bhi value false ho gaye ye execcute nahi hoga, jese 2==3.
    console.log("Allow to buy course");
    
}


if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
    
}