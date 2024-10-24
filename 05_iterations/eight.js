//  reduce

const  myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval){{ // Accumualtor => initialize kara h 0 se.
//                                                        // curent Value => jo hmne vaiable diya h, jese myNums
//     console.log(`acc: ${acc} and currval: ${currval}`);
                                                       
    
//     return acc + currval                              
// }}, 0)

//console.log(myTotal);

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
//console.log(myTotal);

const shopingCart = [
    {
        itemName: "java course",
        price: 999
    },
    {
        itemName: "js course",
        price: 1500
    },
    {
        itemName: "css course",
        price: 1000
    },
    {
        itemName: "html course",
        price: 799
    },
]


const totalPrice = shopingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPrice);
