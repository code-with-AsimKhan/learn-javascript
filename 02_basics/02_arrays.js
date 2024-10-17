const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const bolly_heros = ["Slaman khan", "Amir khan", "Sharuk khan"];

//marvel_heros.push(bolly_heros)  //push: ye usi array me add karta h, dusre array ko element ki from me deta h.
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(bolly_heros) // concat: ye bhi array ko merge karta h. aur new array deta h.
// console.log(allHeros);

const allNewHeros = [...marvel_heros, ...bolly_heros];// spread opreater: ye advanced concat h, ise jiyada prefer kare.
//console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6],  7, [6, 7, [4, 5]]];
const real_anotherArray = anotherArray.flat(Infinity)  // Flat: ye simple array me convert kardeta h.
console.log(real_anotherArray);


console.log(Array.isArray("AsimKhan")); // isArray: ye type batayga array h ya nahi.
console.log(Array.from("AsimKhan")); // from: ye array me convert kardega.

console.log(Array.from({name: "AsimKhan"})); // interesting, value ya phir key.

let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1, score2, score3)); // of: ye bhi from ki hi tarah hota h.








