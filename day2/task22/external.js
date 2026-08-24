var correctPin = "1234"
var attempts = 0
var pin=prompt('enter pin')
attempts++;
while(pin!=correctPin){
    pin=prompt('enter pin')
    attempts++
    if(attempts==3){
        break
    }
}
if(attempts<3){
    console.log("login successfully")
}else{
 console.log("login failed")   
}