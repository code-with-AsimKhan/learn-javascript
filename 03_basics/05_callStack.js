//************************************ javaScript Executoin Context **************************************

// {} => Global Execution Context => this // this: agar apne browser me run kiya h to y window object dega.

// 1 : Global Execution Context.
// 2 : functional/ function Execution Context.
// 3 : Eval Execution Context.

// javascrip ka code, ye Two phases me run hota h.
// 1 : Memory Creation Phase / Creation Phase. // jese apne koi bhi variable ya kuch bhi declare kara h,
                                               // unke liye jagah allocate hoti h.

// 2 : Execution Phase.  // jese add, subtract  ye sab execution phase karta h.                                               

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// Step1 : Global Execution; => this  // ye this ke under allocate kiya jata h, y global execution.
// Step2 : Memory Phase;  // ye  First Cycle h.
//     * val1 => undefined
//     * val2 => undefined
//     * addNum => defination  // pure function ki defination
//     * result1 => undefined
//     * result2 => undefined


// Step3 : Execution Phase;  // ye Cycle Second h.
//     * val1 <= 10
//     * val2 <= 5
//     * addNUm => isme banega executioncontext tayyar hota h, usme phela (new variable environment) aur dusra (Execution thread)
