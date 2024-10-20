const userEmail = ""; // isme (string) khali h, to ye else ko execute karega, agar khali (Array) hota to if execute hoga.

if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
    
}


// Falsy Values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN.

// truthy Values: 
// "0", "false", " space", [], {}, function(){}. // aur jo falsy values se batche h wo bhi truthy h.


// const  emptyArr = []
// if(emptyArr.length === 0){
//     console.log("Array is Empty");
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length){
    //console.log("object is Empty");
    
}


// false == 0;  // ye true dega, bowser me check karsakte he.
// false == ""; // ye true dega, bowser me check karsakte he.
// 0 == "";     // ye true dega, bowser me check karsakte he.


//  Nullish Coalescing Operator (??); // ye bus indono me use hota h, 1: NuLL, 2: undefined.

let val1;
//val1 = 5 ?? 10;  // output: 5
//val1 = null ?? 10;  // output: 10
//val1 = undefined ?? 15  // output: 15
//val1 = null ?? 10 ?? 20 // output: 10
//val1 = null ?? undefined  // output: undefined

console.log(val1);


//    Terniary Operater

//condition ? true : false

const teaPrice = 100;
teaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");


