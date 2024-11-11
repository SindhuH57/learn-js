// ARRAYSSSS

const myArr = [1,2,3,4,5]
myArr.push(6)
myArr.pop()

console.log(myArr.includes(4)) //true
console.log(myArr.includes(76)) // false
console.log(myArr.indexOf(3)) //2
console.log(myArr.indexOf(30)) // -1 if not exists

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)// strimg format
const arr1 = myArr;
console.log(arr1)

console.log("A ",myArr)
const arr2 = myArr.slice(1,3) // 2,3
console.log(" B", myArr)
console.log(arr2)

const arr3 = myArr.splice(1,3)
console.log('C ',myArr)
console.log(arr3)

// Slice - return from starting to end section but dont include end ka indxed value
// splice - returns from starting to end and includes end ka indexed value BUTTTTT it alters original array removing the spliced indexes.


const ar1 = ['apple' ,'mango', 'carrot']
const ar2 = ['berries', 'straw','cucumber']

ar1.push(ar2)
console.log('push - ',ar1)

const ar4 = ar1.concat(ar2)
console.log('concat- ',ar4)

const ar5 = [...ar1,...ar2]
console.log('sporead - ',ar5)