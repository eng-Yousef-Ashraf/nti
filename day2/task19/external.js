var start=prompt("enter start")
var end=prompt("enter end")
for(var i=start;i<=end;i++){
    if(i%2==0){
        console.log(`${i}-->express`)
    }else{
        console.log(`${i}-->normal`)
    }
}