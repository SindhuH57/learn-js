// Primitve datatype - which usally helps in modifing copied value but not in exact memory location
//null is empty which is an object datatype , 
// ex - when we req temp , if it returns nothing then it is null not 0

// 7 types - String , Number,  boolean , null , undefined, symbol (to make it is unique), BigInt
// value types 

const id = Symbol('123')
const id1 = Symbol('123')
console.log(id)
console.log(id1)
console.log(id === id1)

const bigInt = 123456786543234567876n
console.log(typeof bigInt)


// we dont define language in js , hence it is dynamically typed 


//Non Primitive or refernce types - usually get changed in memory 
// Arrays , Objects, functions

const heroes = ["shaktiman", "doga", "naagraj"]
const myObj = {
    name : "sindhu",
    age:24
}
const func = function () {
    console.log('hello')
}

// type of non primitive types -  object but only for function it is object funciton

console.log(typeof heroes);
console.log(typeof
    myObj)
console.log(typeof func)


// primitive data - all variable go and sit in stack (yahan pe hume milta hai copy)
// non-primitive - heap (yahan pe hume milta hai refernce ) - here also var sits in stack but refer to memory addr in heap
