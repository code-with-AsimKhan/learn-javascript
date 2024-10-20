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
    console.log("object is Empty");
    
}