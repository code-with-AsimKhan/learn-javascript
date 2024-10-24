const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const  newNums = myNums.map( (num) => num + 10) // map :  forEach se asaan h.ye automatic return value karta h.

//console.log(newNums);

 //    chaining

 const newNums = myNums
                  .map( (num) => num * 10) // jo new value bani h num ki wajah se,  
                  .map( (num) => num +1)    // wo dusre step me milegi.
                  .filter( (num) => num >= 40) // aur jo dusre step se mili h, wo step three me jaygi.


console.log(newNums);
                  