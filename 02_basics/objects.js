//Objects aree created in two ways - literals and constructor

//Objects created thr constructore become singleton
//Object.create


//Object in literals

// *****IMPORTANT *****
// Create a symbol variable and use it in object and print it 
const mySym = Symbol('123') 


const myObj = {
    name : "sindhu",
   // mySym : "hachadad", - this wont be stored as symbol here because syntax is wrong
   [mySym] : "symbii",
    age : 20,
    email : "sindhu@qe.com",
    isLoggedIn : true
}
//name,age,,email  - keys of object will be stored as string or number based on data type in memory
console.log(typeof myObj.name)
console.log(typeof myObj.age)

//access object values with  either . or [""]

console.log(myObj.name)
console.log("age - ",myObj["age"])

console.log('my obj - ',myObj)

myObj.greeting = function() {
    console.log('hello ')
}
console.log("greeting - ",myObj.greeting())


// console.log('------------')
const id = Symbol('123')
const anotherId = Symbol('123')
//looks like same value but returned value wont be same
console.log('id - ',id)
console.log('anid - ',anotherId)
console.log(id === anotherId);
console.log(typeof anotherId);
console.log(typeof id);
//Because symbols are the only primitive data type that has reference identity (that is, you cannot create the same symbol twice), they behave like objects in some way. 