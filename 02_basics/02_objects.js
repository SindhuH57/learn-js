//const myObj = new Object()


const o1 = {1:"a" , 2:"b"}
const o2 = {3:"c" , 4:"d"}
const o3 = {o1,o2}
console.log("o3 - ",o3)
// object ke andar object stored

const o4 = Object.assign({},o1,o2) // target ke andar source ke values dalo .. either keep {} empty object else it stores under o1
console.log("o4 - ",o4)
// one method to have straight values

const o5 = {...o1,...o2} // spread operator ...glass breaks and it bceomes chur chur ..same way o1 becomes chur chur and assigns each elements to o5
console.log("o5 - ",o5)

const obj1 ={
    email:"sind@fg.com",
    fullname: {
        username : {
            firstname :"sindhu",
            lastname : "hachadad"
        }
    }
}//object ke andar object and then object 
console.log(obj1.fullname.username.firstname)

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))
console.log(Object.hasOwnProperty("number"))

// create an object
// store values in it , direct or nested
// functions with it like concat 

const course = {
    courseName : "js",
    price : "free",
    email : "sindhu@g.com"
}
//Object destructuring for ease use of its properties and access them

const {email}= course // destructuring
console.log(email)