//   ForIn loop


const myObject = {
    js: "javascript",
    cpp: "C++",
    java: "java",
    html: "html"
}


for (const key in myObject) {  // ForIn loop: ye objec pr kaam kar raha h.
  // console.log(`${key} shortcut is for ${myObject[key]}`);
   
}



const  myArr = ["js", "java", "py", "cpp"]

for (const key in myArr) {
   // console.log(myArr[key]);
    
}




const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")
map.set('IN', "India")


for (const key in map) { // forIn loop  ye map me kamm nahi karta, because ye iteratible nahi h isliye.
  // console.log(key);
   
}