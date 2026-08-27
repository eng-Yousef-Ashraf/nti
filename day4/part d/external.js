var students = [{ name: "Omar", grade: 80 }, { name: "Mona", grade: 90 }, { name: "Ali", grade: 70 }]
for(student of students){
    console.log(`student: ${student.name} , age: ${student.grade}`)
}  //25
var filteredStudents=students.filter(value=>value.grade>=80)
console.log(filteredStudents)  //26
console.log(filteredStudents.map(value=>value.name)) //26
var products=[{name:'chocolate',price:25},{name:'chips',price:5}]
console.log(products.reduce((acc,value)=>acc+(value.price),0))  //27
var programming=["js", "html", "css", "js", "react", "js"]
var counter=0
for(lang of programming){
    if(lang=='js'){
        counter++
    }
}
console.log(counter)  //28
var classroom={
    teacher:'ahmed',
    students:['yousef','rana','omar','hania']
}
console.log(classroom.teacher) //29
console.log(classroom.students.length)  //29
console.log(classroom.students[classroom.students.length -1]) //29
var items=[{ id: 1, title: "Pen", price: 10 }, { id: 2, title: "Book",price: 50 }, { id: 3, title: "Bag", price: 25 }]
var items1=items.map(value=>value.title.toUpperCase())
console.log(items1)  //30
var items2=items.filter(value=>value.price<30)
console.log(items2)  //30
console.log(items.reduce((acc,value)=>acc+value.price,0))  //30