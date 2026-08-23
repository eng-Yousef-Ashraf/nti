var customerName=prompt('enter your name')
var price=prompt('enter order price')
var isConfirmed=prompt('did you confrim order')
price=parseInt(price)
var message=customerName+":"+price+":"+isConfirmed
console.log(message)
alert(message)
document.getElementById("result").innerText = message