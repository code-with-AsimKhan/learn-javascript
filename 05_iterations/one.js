// for Loop

for(let i = 0; i <= 10; i++){
    const element = i;
    if(element == 5){
       // console.log("5 is the best number");
        
    }
   // console.log(element);
    
}


for(let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for(let j = 1; j <= 10; j++){
      //  console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
      //console.log(`${i} * ${j} = ${i*j}`);
      
        
    }
    
}

let  myArray = ["apple", "orange", "banana"]
for (let i = 0; i <myArray.length; i++) {
    const element =myArray[i];
   // console.log(element);
    

}


// break and continue.

// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`Detected 5`);
//         break;                     // Break: isme 5 print nahi hoga, 4 per hi stop hojayga.
        
//     }
//     console.log(`Value of i Is ${i}`);
    
    
// }



for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue;                  // Continue: isme 5 print nahi hoga, 5 ko ignore karke age badega.
        
    }
    console.log(`Value of i Is ${i}`);
    
    
}