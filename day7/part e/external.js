const product = { title: "Laptop", price: 15000, inStock: true, brand: "Dell" }
const { title, price, inStock } = product
console.log(title, price, inStock)
//19
///////////////////////////////////////////////////////////////////////////////////
const programming = ["HTML", "CSS", "JS", "React"]
const [lang1, lang2] = programming
console.log(lang1, lang2)
//20
//////////////////////////////////////////////////////////////////////////////////
const greet = (name = "Guest", message = "Hello") => `${message}, ${name}!`
console.log(greet('johhny', 'howdy'))
console.log(greet('jenny'))
console.log(greet())
//21
////////////////////////////////////////////////////////////////////////////////
const sumAll = (...numbers) => {
    let sum = 0
    for (num of numbers) {
        sum += num
    }
    return sum
}
console.log(sumAll(1, 2, 3))
console.log(sumAll(10, 20, 30, 40))
//22
/////////////////////////////////////////////////////////////////////////////////
const arr1 = [1, 2]
const arr2 = [3, 4, 5]
const arr3 = [...arr1, ...arr2]
console.log(arr3)
const arr4 = [10, 20, 30]
const arr5 = [...arr4]
arr5.push(40)
console.log(arr4)
console.log(arr5)
//23
///////////////////////////////////////////////////////////////////////////////
const user = { name: "Sara", age: 22 }
const contact = { email: "sara@nti.com", age: 23 }
const user_contact = { ...user, ...contact }
console.log(user_contact)   //age=23 it takes last value
//24
////////////////////////////////////////////////////////////////////////////////
const values = [2, 4, 6, 8]
function total(a, b, c, d) {
    return a + b + c + d
} 
console.log(total(...values))
//25
///////////////////////////////////////////////////////////////////////////////