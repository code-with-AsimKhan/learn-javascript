function sayMyName(){
    console.log("A");
    console.log("s");
    console.log("i");
    console.log("m");
    
}

//sayMyName(); // sayMyName ho gaya refrence, () ye hogaya execution.


// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
    
// }  

// addTwoNumber(3, 6);

function addTwoNumber(number1, number2){
   // let result = number1 + number2;
   // return result;
      return  number1 + number2;
}

const result = addTwoNumber(3,5)

//console.log("Result: ", result);




function loginUserMessage(username){
   // if(username === undefined){ 
      if(!username){          // iska doosra tarika ye h.
        console.log("please enter a username");
        return;
        
    }
    return `${username} just logged in`;
}

//console.log(loginUserMessage("AsimKhan"));
//console.log(loginUserMessage());



function calculateCartPrice(...num1){ // spread/Rest: ye value add karke array me deta h.
    return num1;
}

//console.log(calculateCartPrice(200, 550, 400));


const user = {
    userName: "AsimKhan",
    price: 99
}

function handleObjects(anyobject){
    console.log(`userName is ${anyobject.userName} and price is ${anyobject.price}`);
    
}
//handleObjects(user);  // isme object pass karna padega.
handleObjects({         // isme object direct bhi desakte h.
    userName: "AsimKhan",
    price: 99
})



const myNewArray = [200, 400, 100, 600];

function returnSecondArray(getArray){
    return getArray[2];
}

//console.log(returnSecondArray(myNewArray));
console.log(returnSecondArray( [200, 400, 100, 600])); // isme direct Array bhi de sakte h.
