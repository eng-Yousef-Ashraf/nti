var car={
    brand:'Renault',
    model:'Kadjar',
    year:2018,
    color:'white'
}
console.log(car)    //1
console.log(car.brand) //2
console.log(car['year'])  //2
car.color='black'
car.price='1000000Eg'
console.log(car)   //3
delete car.year
console.log(car.year) //4       indefined ---> it didnt delete arritubute it just removed value and left attribute with no value still attribute in object
var student={
    "student-name":"Sara",
    age:20
}
console.log(student['student-name'])   //5
var book={
    title:'A Game of Thrones',
    author:'George R. R. Martin',
   'personal-info': {
        firstName:'George',
        lastName:'Martin'
    }
}
console.log(book['personal-info'].lastName)   //6
var info={ name: "Ali", age: 25, city: "Cairo" }
console.log(Object.keys(info))   //7
console.log(Object.values(info)) //7
console.log(Object.hasOwnProperty("job"))  //7
var settings={
    theme:'dark',
    lang:'en',
}
Object.freeze(settings)
settings.theme='light'
settings.fontSize=16
console.log(settings)    //8     it freezes object as its original form i can do any changes to object
