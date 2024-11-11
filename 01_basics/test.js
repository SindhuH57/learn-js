const accountId = 12432
let aname = "Sindhu"
var city = "Bijapur"
state = "karnataka"

let country; // undefined

// dont use var because of issue with block scope and functional scope

console.table([accountId, aname, city, state, country])


// OPERAIONS 
// * , / , % , + , -
// % gives remainder 

//  **************************CONVERSIONSSSS ********************

let t = 1
let value = Boolean(t)
console.log(value)

// console( typeof value)

// let s ="". => false 






// **********************.  DATATYPESSSS. **********************//
let a = null ; // this is object type 
let b; // undefined 
let string1 = " abc" // string
let n = 54321 //number 
console.log(typeof undefined); // undefined
console.log(typeof null); // object




// ********************** COMAPARISION ************************
// == equality
// > ,< ,<= => comaprision
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null>=0) // true
 
// in comaprision , null converts to 0 and hence it is true in thrid case but in equality check , it is not same case

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined>=0) // false

// === => stricts check with datatype
