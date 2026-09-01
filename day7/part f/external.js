let person1 = { name: "Ali", child: { age: 5 } }
let person2 = person1 
person2.name = "Omar" 
console.log(person1.name)  //omar because it just copied reference to array both of them points to same array
//26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const original = { name: "Mona", details: { city: "Cairo" } }
const copy={...original}
copy.name='Tasneem'     //name is changed in copy
copy.details.city='Alex'  //city changes in both copy and original because it spreads an object containing an object
console.log(original);
console.log(copy)
//27
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const copy2=structuredClone(original)
copy2.details.city='Aswan'
console.log(original)  //Alex
console.log(copy2)     //Aswan
//28
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const userdata=JSON.stringify({ name: "Ahmed", age: 26, city: "Alex" })
localStorage.setItem("userdata", userdata)
const data = localStorage.getItem("userdata")
const parsedData = JSON.parse(data)
console.log(typeof parsedData)
console.log(parsedData)
localStorage.removeItem("userdata")
//29