var city1 = "Alex"; //city1=alex
var city2 = city1; //city2=alex
city2 = "Giza";    //city2=giza updated
console.log(city1, city2); //alex,giza
var car1 = { brand: "Toyota" };  
// var car2 = car1;           
// car2.brand = "Honda";      
// console.log(car1, car2); 
var car2= Object.assign({},car1) //i searched for syntax stack overflow
car2.brand = "Honda";      
console.log(car1, car2);