var fruits=["apple", "banana", "cherry"]
fruitsCap=fruits.map(function(item){
    return item.toUpperCase()
})
console.log(fruitsCap)  //17
console.log(fruits)  //17
var numbers=[10, 55, 30, 80, 45, 90]
var filteredNumbers=numbers.filter(num=>num>50)
console.log(filteredNumbers)  //18
var cities=["Cairo", "Giza", "Alex", "Aswan"]
console.log(cities.find(city=>city.startsWith('A')))  //19
console.log(cities.findIndex(city=>city.startsWith('A')))  //19
var chars=["a", "b", "c", "d", "e"]
console.log(chars.slice(1,4))  //20
console.log(chars)  //20
var nums=["one", "two","three", "four", "five"]
var removed=nums.splice(1,2)
console.log(removed)  //21
console.log(nums) //21
var nums2=[40, 100, 1, 5, 25]
console.log(nums2.sort((a,b)=>a-b))  //22
var nums3=[16, 21, 17, 19]
console.log(nums3.some((value)=>value>=18))  //23
console.log(nums3.every((value)=>value>=18))  //23
var nums4=[5, 10, 15, 20]
console.log(nums4.reduce((acc,value)=>acc+value),0)  //24