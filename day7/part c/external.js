function funcScoped() {
    if (1 > 0) {
        var x = 5
    }
    console.log(x)
}
funcScoped()   //8
function blockScoped() {
    if (1 > 0) {
        let x = 5
        const y = 3
    }
    console.log(x)
    console.log(y)
}
//blockScoped()   //9
///////////////////////////////////////////////////////////
var z = 3
var z = 'ahmed'  //var can be redeclared     //10
let l = 4
//let l='omar'  //let id declared once    //10
/////////////////////////////////////////////////////////
const student = {
    name: 'ahmed',
    age: 25,
    city: 'Cairo'
}
student.age = 18
console.log(student)
student.grade = 'B'
console.log(student)
delete student.city
console.log(student)
try {
    student = {
        name: 'ziad',
        age: 16,
        city: 'Alex'
    }
} catch (e) {
    console.log('const cannot be reassigned')
}    //11
/////////////////////////////////////////////////////////////////////////
const nums = [1, 2, 3]
nums.push(4)         //allowed
nums.splice(0, 1, 5)   // allowed
//nums=['a','b','c']   //not allowed   //12
////////////////////////////////////////////////////////////////////////
var a  //valid--->undefind  can be reassigned
let b  //valid--->undefind  can be reassigned
//const c //not valid  error assigned once      //13
///////////////////////////////////////////////////////////////////////
var g1 = "var global"
let g2 = "let global"
const g3 = "const global"
console.log(window.g1)  //var global
console.log(window.g2)  //undefind
console.log(window.g3)  //undefind  //only var can be accessed through window 
//14
//////////////////////////////////////////////////////////////////////
const handlers = {}
for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    }
}
console.log(handlers.fn0())
console.log(handlers.fn2())
//var is function scoped while let is block scoped
//15
