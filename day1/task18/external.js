var mixedBag=['hi',2,true,null,undefined,{"course":"math"},[1,2,3]]
for(var i=0;i<mixedBag.length;i++){
    console.log(typeof(mixedBag[i]))   //null---->object primitive data type stored in stack
}