// While loop 

let i = 0
while(i <= 10){
   // console.log(`Value of i is ${i}`);
    i = i + 2 
    
}

let myArr = ["red", "blue", "green"]

let arr = 0
while(arr < myArr.length){
   // console.log(`mu Array value is ${myArr[arr]}`);
    arr++
    
}




let score = 1


do {
    if(score == 5){
        console.log(`5 is the best value`);
        break;
    }
    console.log(`score value is ${score}`);
    score++
    
} while (score <= 10);