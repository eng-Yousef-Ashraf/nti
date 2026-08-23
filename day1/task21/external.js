var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
console.log(a + b + c + d + e);   //a+b=40+50=90
                                 //90+c='9060' concatination
                                 //'9060'+30="906030"
                                 //'906030'+30='90603030'
c=+c
console.log(a + b + c + d + e);                                  