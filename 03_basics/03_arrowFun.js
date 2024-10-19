const user = {
    userName: "AsimKhan",
    price: 999, 

    welconmeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
       // console.log(this); // this: ise block ke under print karya to(Current context/current value) hi deta h.
        
        
    }
}

// user.welconmeMessage()
// user.userName = "royalKhan"
// user.welconmeMessage()

//console.log(this); //this: this ko block se bahar print kara to khali object dega, aur ye node under, browser me window dega.


// function chai(){
//     let userName = "AsimKhan"
//     console.log(this.userName); // ye undefined dega, ye object ke liye hi kaam kar raha h.
    
// }

// chai()


const chai = () => {
    let userName = "AsimKhan"
    console.log(this.userName); 
}

chai()

// const addTwoNum = (num1, num2) => {  // ye hogaya basic arrowFunction
//     return num1 + num2;
// }

//console.log(addTwoNum(3, 6));


// const addTwoNum = (num1, num2) => num1 + num2  // ye he arrowFun ko likhne ka 2nd tarika.
// console.log(addTwoNum(3, 6));

// const addTwoNum = (num1, num2) => (num1 + num2) //  ye he arrowFun ko likhne ka 3rd tarika.
// console.log(addTwoNum(3, 6));


const addTwoNum = (num1, num2) => ({userName: "Asimkhan"}) //  ye he arrowFun me object define karne ka tarika.
console.log(addTwoNum(3, 6));
