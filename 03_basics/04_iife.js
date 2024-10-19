// Immediately Invoked function Expressions (IIFE) 
// 1: jo func immediately execute ho jata h.
// 2: global scope ke pollution se problem hoti h,
// us global scope ke jobhi variable ya jbhi declaration uske pollution ko hatane ke liye use hota h.


  // ()(); : phele braket me func defination, aur dusra braket ko last me dete h.  execuation k liye.

(function chai(){
    //name IIFE
    console.log("DB Connected");
    
})();


( () => {
    //simple IIFE
    console.log("DB Conected Two");
    
})();


( (name) => {
    // parameter IIFE
    console.log(`DB Conected Two ${name}`);
    
})("AsimKhan");




