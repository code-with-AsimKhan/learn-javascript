// for of loop

// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {   // ForOf loop: ye array, object, string sub pr kaam karta h.
   // console.log(num);
    
}


let greetings = "Hello World"

for (const greets of greetings) {    // isme kuch bhi variables le sakte h, jese greets liya h, uski jagah kuch bhi lesakte h.
    if(greets == " "){  // isse hmne space hataya.
        continue
    }
    //console.log(`each char is ${greets}`);
    
    
}


// Maps : // ye bhi object ki tarah hi hote h, aur ye orignal key order ko dhiyan rakhta h, objet wo order ko yaad nahi rakhte h.
// aur iske under unique value hi milti h, duplicate valuue nahi milti.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")
map.set('IN', "India")      // map duplicate value execute nahi karta.


//console.log(map);

for (const [key, value] of map) {
   // console.log(`${key} :- ${value}`);
    
}

const myobject = {
    name: "AsimKhan",
    age: 18, 
    course: "Btech CS"
}

for (const [key] of myobject) { // ForOf loop: object pr kaam nahi karraha h.
  //  console.log(key);
    
    
}



