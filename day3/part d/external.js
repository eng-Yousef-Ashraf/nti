var word = 'HELLO'
for (letter of word) {
    console.log(letter)
} //21
var numbers = [10, 20, 30, 40]
var sum = 0
for (num of numbers) {
    sum += num
}
console.log(sum)  //22
var sentence = 'JavaScript is amazing and awesome'
var counter = 0
for (letter of sentence) {
    if (letter.toLowerCase().includes('a')) {
        counter++
    }
}
console.log(counter)  //23
var grades = [70, 85, 92, 60, 77, 88]
for (grade of grades) {
    if (grade % 2 == 0) {
        console.log(grade)
    }
}  //24
for (var i = 1; i <= 4; i++) {
    var line = "";

    for (var j = 1; j <= i; j++) {
        line += "*";
    }

    console.log(line);
} //25
var names=['ahmed','sara','omar','laila','hassan']
var names2=[]
for(name of names){
    if(name.toUpperCase().charAt(0)=="S"||name.toUpperCase().charAt(0)=="A"){
        names2.push(name.toUpperCase())
    }
}
for(name of names2){
    console.log(name)  
} //26
console.log(names2.length)  //26