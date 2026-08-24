var num=prompt("enter number")
num=+num
while(num<0){
    num=prompt("enter positive number")
}
var fact=1
for(var i=1;i<=num;i++){
    fact*=i
}
console.log(fact)
alert(fact)