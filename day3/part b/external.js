var num='45.8'
console.log(parseFloat(num))  //8
var num2=7.6
console.log(Math.round(num2)) //9
console.log(Math.floor(num2)) //9
console.log(Math.ceil(num2))  //9
console.log(Math.max(12,5,28,9))  //10
console.log(Math.min(12,5,28,9))  //10
console.log(Math.floor(Math.random()*20)+1)  //11
var num3=19.4567
console.log(+(num3.toFixed(2)))  //12
var nums=[]
for(var i=0;i<=4;i++){
    nums[i]=Math.floor(Math.random()*50)+1
}
console.log(nums)
console.log(Math.max(...nums))   //13
console.log(Math.min(...nums))   //13
var average=0;
for(avg of nums){
    average+=avg
}
average=average/nums.length
console.log(average.toFixed(2))  //13