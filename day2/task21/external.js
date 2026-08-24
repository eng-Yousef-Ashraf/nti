var prices=[]
var sum=0;
var average=0
for(var i=1;i<=5;i++){
   prices.push(i)
}
for(var price of prices){
    sum+=price
    average=sum/prices.length
}
console.log(sum)
console.log(average)