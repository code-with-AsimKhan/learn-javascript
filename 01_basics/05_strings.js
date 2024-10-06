const name = "AsimKhan";
const repoCount = 20;

// console.log(name + repoCount + "Value"); // don't use like this. 

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // Ise stringInterPolation kha jata h.

const gameName = new String("Royal_Khan")

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); // element position ke liye.
// console.log(gameName.indexOf('a')); // ye bhi element ki position, isme  element lete h.

const newString = gameName.substring(0, 4);  // koi se bhi index selekar koi bhi index tak,  element print karasakte h.
console.log(newString);

const anotherString = gameName.slice(-9, 3); // same(substring) h, but isme negative value bhi lete,
console.log(anotherString);                  // isme reverse se start hoga.


const stringOne = "   AsimKhan     ";
console.log(stringOne);
console.log(stringOne.trim()); // trim: isme hm string se space remove karte h.

const url = "https://Asim.com/asim%30khan";
console.log(url.replace('%30', '_')); // replace: isme kisibhi element ko badal sakte h.

console.log(url.includes('asim')); // includes: string me check kar sakte element ko. 


console.log(gameName.split('_'));  // split: isme string me space/underscore ko remove kardeta, arrray ki form me milta h.








