// forEach loop

const coding = ["js", "java", "python", "css"]

coding.forEach((val) => { //  isme koi bhi name se variable le sakte h, jese val liya h, kuch bhi leksakte h.
    //console.log(val);
    
})

function printMe(item){ /// forEach ko karne ka dusra tarika. 
   //  console.log(item);
    
}

coding.forEach(printMe) // yahapr us function ke name ka refrence dedo ye kaam kere dega.


coding.forEach((item, index, arr) => {  // ya pr hm multiple parameter le sakte h.
  //  console.log(index, item,  arr);
    

})



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
} )