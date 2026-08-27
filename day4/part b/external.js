var cities=['paris','london','cairo','rome','ottawa']
console.log(cities)  //9
console.log(cities.length) //9
for(city of cities){
    if(city=='rome'||city=='cairo'){
        continue
    }
    console.log(city)
} //10
cities.push('moscow')
console.log(cities)  //11
cities.unshift('frankfurt')
console.log(cities)  //11
cities.pop()
console.log(cities)  //12
cities.shift()
console.log(cities)  //12
var programming=["HTML", "CSS", "JS", "React"]
console.log(programming.indexOf('JS')) //13
console.log(programming.includes('Python'))  //13
var utilites=["pen", "book", "bag"]
utilites.forEach(function(item,index){
console.log(item)
}) //14
utilites.forEach(function(item,index){
console.log(`${item} : ${index}`)
}) //14
var colors=["red", "green", "blue", "yellow"]
for(color of colors){
    if(color=='blue'){
        break
    }
    console.log(color)
}  //15
var chars=["A", "B", "C"]
chars.push('D','E')
chars.shift()
console.log(chars)  //16
console.log(chars.length)  //16