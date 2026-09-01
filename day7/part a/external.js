function withoutDeclaration1(){
    student='ahmed'
}
withoutDeclaration1()
console.log(student) //1     ahmed is printed as a global variable
function withoutDeclaration2(){
    'use strict'
    try{
        age=20
    }catch(e){
        console.log('variable is not declared')
    }
}
withoutDeclaration2()   //2
function withDeclaration(){
    'use strict'
    var localVar='test'
    try{
        delete localVar()
    }catch(e){
        console.log('in strict mode delete only applies to objects')
    }
}
withDeclaration()  //3
function withDeclarationObject(){
    'use strict'
    var localVar={value:'test'}
    try{
        delete localVar.value
        console.log('deleted successfully')
    }catch(e){
        console.log('in strict mode delete only applies to objects')
    }
}
withDeclarationObject()  //3