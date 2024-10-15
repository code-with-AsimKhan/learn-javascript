// Arrays

const myArr = [0, 1, 2, 3, 4 ,5];
const myfruits = ["mango", "banana", "apple"];
const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr[2]);
// console.log(myfruits);

// ********************************* Arrays methods ****************************************

// myArr.push(9);     // push: iska kaam aray me se last idx ke  element ko  add kardena.
// myArr.pop();       // pop:  iska kaam array me se last idx ke element ko remove kardena.

// myArr.unshift(6);     // unshift: iska kaam array me se first idx me element ko add kardena.
// myArr.shift();        // shift:   iska kaam array me se first idx me element ko remove kardena.


// console.log(myArr.includes(9));  // includes: array me check karega 9 h ya nahi.
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()  // join: isme Array se convert kardeta h String me.
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

                                  // Slice and splice 

                                  

console.log("A", myArr);

const myNewArr = myArr.slice(1, 3);  // Slice: array me khase lekar khatak print karana, isme last value include / print nahi hogi.
console.log(myNewArr);
console.log("B", myArr);

const myNewArr1 = myArr.splice(1, 3);// Splice: array me khase lekar khatak print karana, isme last value include / print hogi.
console.log("c", myArr);             // aur orignal array me bhi change ho jata h, org array me only bachewe element rehete h.

console.log(myNewArr1);


                                  