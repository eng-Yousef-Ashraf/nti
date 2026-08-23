var productName=prompt('enter product name')
var brand=prompt('enter brand')
var price=prompt('enter price')
var category=prompt('enter category')
var inStock=prompt('Is this product in stock?')
price=+price
var productInfo={"productName":productName,"brand":brand,"price":price,"category":category,"inStock":inStock}
var message=`productName:${productName} brand:${brand} price:${price} category:${category} inStock:${inStock}`
console.log(productInfo)
console.log(message)
document.getElementById("result").innerText=message
alert(message)
console.log(productName[0])