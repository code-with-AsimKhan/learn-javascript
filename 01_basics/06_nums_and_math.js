const score = 400;
console.log(score);


const balance =  new Number(100);
//console.log(balance);

// console.log(balance.toString()); // toString: isme number convert to string.
// console.log(balance.toString().length);

//console.log(balance.toFixed(2)); // toFixed: isme jesse 100.00, point ke bad num ko manage karne ke liye.

const otherNumber = 123.8966;
//console.log(otherNumber.toPrecision(3)); // toPrecision: isme vlue jo return karega string type ka hoga,
                                         // hme kitni value pr focus karna h, roundoff me vlaue milti, ex-124.


const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-IN')); // toLocalString: value ka standard change keliye, ex-10,00,000.

// ********************************* Maths *******************************************


console.log(Math);
// console.log(Math.abs(-4));    // abs(absolute value): only convert positve value.
// console.log(Math.round(4.6)); // round: isme value poori dega, jese 5.
// console.log(Math.ceil(4.2));  // ceil: isme badi value dega.
// console.log(Math.floor(4.2)); // floor:isme choti value dega.
// console.log(Math.min(4, 2, 5, 6)); // min: isme sabse choti value milegi.
// console.log(Math.max(5, 8, 9, 2)); // max: isme sabse badi value milegi.


console.log(Math.random()); // random: isme hamesha value milegi 0 or 1 ke beech me.
console.log((Math.random()*10) +1);  // isme (1) add isliye kiya 0 ko aviod karne ke liye.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);






