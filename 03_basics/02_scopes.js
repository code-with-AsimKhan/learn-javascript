// let a = 20;
// const b = 50;
// var c = 60;

let a = 300;
if(true){  // Scope: {} ye karli brasess ke under ko blockScope khete h, aur uske bhar ko gobalScope khete h, wo value bahar nhi jani chahiye.
    let a = 20;
    const b = 50;
  // console.log("Inner:", a);
   
}


//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const userName = "AsimKhan"


    function two(){
        const website = "youtube"
        console.log(userName);
        console.log(website);
        
        
    }

    //console.log(website);  // ye execute nahi hoga, because ye blockScope ke bahar h.

    two()
    
}

//one()



if(true){
    const userName = "AsimKhan"

    if(userName === "AsimKhan"){
        const website = " Youtube"
       // console.log(userName + website);
        
    }
   // console.log(website); // ye blockscope se bahar h, isliye ye execute nahi hoga, error dega.
    
}

//console.log(userName);   // ye blockscope se bahar h, isliye ye execute nahi hoga, error dega.


//******************************* interesting *****************************

console.log(addOne(5)) // hm upper bhi call kar sakte h.
function addOne(num){
    return num + 1;
}

//console.log(addOne(5)) // hm neeche bhi call karsakte h.


//console.log(addTwo()); //but ap ise upper call nahi karsakte h.
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5)); // isme only neeche ho call karsakte h.
