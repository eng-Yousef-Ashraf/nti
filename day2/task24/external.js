var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
console.log(a + b + c + d + e);
c=+c
var value=a + b + c + d + e
console.log(value);
for(var i=1;i<=value;i++){
    console.log(i)
    if(i>=20){
        console.log("Too big to print line by line")
        break
    }
}