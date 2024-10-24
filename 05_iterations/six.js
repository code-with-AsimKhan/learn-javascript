 const coding = ["java", "js", "python", "html"];

// const values = coding.forEach( (item) => { // forEach loop: ye koi bhi value return nahi karta.
                                              // but isme logic laga kar return kara sakte h.
//     console.log(item);
//     return item
    
// })

// console.log(values);


const newCoding = []
coding.forEach( (item) => {  // forEach me istarika se return karwate h value.
    if(coding){
        newCoding.push(item)
    }
})
//console.log(newCoding);





// Filter: ye bhi forEach ki hi tarah hota h, isme value asaani se return karva sakte h.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num > 4) // ye dusra tarika h arrow func ka, isme return likne ki zarwat nahi h.
const newNums = myNums.filter( (num) => {
    return num > 4
})
//console.log(newNums);



