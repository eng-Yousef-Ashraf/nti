for(var i=1;i<=20;i++){
    console.log(i)       
} //14
for(var i=1;i<=15;i++){
    if(i%2!=0){
        console.log(i) 
    }      
} //15
var counter=10
while(counter>0){
    console.log(counter)
    counter--
}  //16
var names=['Sara','Omar','Mona','Youssef']
for(name of names){
    console.log(name)
}  //17
for(var i=1;i<=10;i++){
    if(i==7){
        break
    }else{
    console.log(i)
    }
} //18
for(var i=1;i<=3;i++){
    for(var j=1;j<=3;j++){
        console.log(`${i}*${j}=${i*j}`)
    }
}  //19
for(var i=1;i<=30;i++){
    if(i%3==0){
        continue
    }
    if(i>25){
        break
    }
    console.log(i)
} //20