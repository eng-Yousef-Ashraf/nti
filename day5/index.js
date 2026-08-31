var id = 0
function autoID() {
    return ++id
}
var products = [
    { id: autoID(), name: "Laptop", price: 18500, category: "Electronics", quantity: 4 },
    { id: autoID(), name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
    { id: autoID(), name: "Notebook", price: 35, category: "Stationary", quantity: 100 },
    { id: autoID(), name: "Desk Lamb", price: 420, category: "Home", quantity: 0 }
]
function createProduct(name, price, category, quantity) {
    name = name.trim()
    category = category.trim()
    if (name == '') {
        return 'error'
    }
    if (products.some(value => value.name.trim().toLowerCase() == name.toLowerCase())) {
        return 'item already found'
    }
    if (price <= 0) {
        return 'error'
    }
    var newID = autoID()
    products.push({
        id: newID,
        name,
        price,
        category,
        quantity
    })
    return products
}
function printProducts(list) {
    return list
}
function getAllProducts() {
    console.table(printProducts(products))
}
function getProductbyId(id) {
    if (id == null) {
        return null
    }
    return products.find(value => value.id == id)
}
function updateProduct(id, name, price, category, quantity) {
    var index = products.findIndex(value => value.id == id)
    if (index == -1) {
        return 'item not found'
    }
    products[index].name = name
    products[index].price = price
    products[index].category = category
    products[index].quantity = quantity

    return products
}
function deleteProduct(id) {
    if (id == null) {
        return null
    }
    var index = products.findIndex(value => value.id == id)
    if (index == -1) {
        return 'item not found'
    }
    if (confirm('Are you sure?')) {
        products.splice(index, 1)
    }
    return products
}
function filterProducts(keyword) {
    keyword = keyword.trim().toLowerCase()
    return products.filter(function (value) {
        return value.name.toLowerCase().includes(keyword) ||
            value.category.toLowerCase().includes(keyword)
    })
}
function startApp() {
    while (true) {
        console.log('===NTI Mini Store===\n1)Add Product\n2)Show All Products\n3)Show Product by id\n4)Update Product\n5)Delete Product\n6)Search/Filter\n0)Exit')
        var choice = prompt('enter your choice')
        choice = +choice
        switch (choice) {
            case 1: {
                var name = prompt('enter name')
                var price = prompt('enter price')
                price = +price
                var category = prompt('enter category')
                var quantity = prompt('enter quantity')
                quantity = +quantity
                console.log(createProduct(name, price, category, quantity))
            }
                break
            case 2: getAllProducts()
                break
            case 3: {
                var choosenID = prompt('enter id')
                choosenID = +choosenID
                console.log(getProductbyId(choosenID))
            }
                break
            case 4: {
                var choosenID = prompt('enter id')
                choosenID = +choosenID
                var name = prompt('enter name')
                var price = prompt('enter price')
                price = +price
                var category = prompt('enter category')
                var quantity = prompt('enter quantity')
                quantity = +quantity
                console.log(updateProduct(choosenID, name, price, category, quantity))
            }
                break
            case 5: {
                var choosenID = prompt('enter id')
                choosenID = +choosenID
                console.log(deleteProduct(choosenID))
            }
                break
            case 6: {
                var key = prompt('enter keyword')
                console.log(filterProducts(key))
            }
                break
            case 0: {
                return
            }
            default: console.log('invalid choice')
        }
    }
}
function sortByPrice(order = 'asc') {
    if (order == 'asc') {
        return products.toSorted((a, b) => a.price - b.price)
    } else if (order = 'desc') {
        return products.toSorted((a, b) => b.price - a.price)
    }
}
function getStoreStats() {
    var numberOfProducts = products.length
    var inventoryValue = products.reduce(
        (acc, value) => acc + value.price * value.quantity,
        0
    )
    var averagePrice = (products.reduce((acc, value) => acc + value.price, 0)/ products.length).toFixed(2)
    var outOfStock = products.reduce((acc, value) => {
        if (value.quantity == 0) {
            return acc + 1
        }
        return acc
    }, 0)

    return {
        numberOfProducts,
        inventoryValue,
        averagePrice,
        outOfStock
    }
}
function groupByCategory() {
    return products.reduce((acc, value) => {
        var keyValue = value.category
        if (!acc[keyValue]) {
            acc[keyValue] = []
        }
        acc[keyValue].push(value)
        return acc
    }, {})
}
function filterByPriceRange(min = 100, max = 500) {
    return products.filter(value => value.quantity > 0 &&value.price >= min &&value.price <= max)
}
const inStock = (list) => {
    return list.filter(p => p.quantity > 0)
}
function withAfterAction(fn, callback) {
    fn()
    callback()
}
withAfterAction(
    () => console.log('hello'),
    () => console.log('done')
)
var store = (function () {
    function createProduct(name, price, category, quantity) {
        name = name.trim()
        category = category.trim()
        if (name == '') {
            return 'error'
        }
        if (products.some(value => value.name == name)) {
            return 'item already found'
        }
        if (price <= 0) {
            return 'error'
        }
        var newID = autoID()
        products.push({
            id: newID,
            name,
            price,
            category,
            quantity
        })
        return products
    }
    function deleteProduct(id) {
        if (id == null) {
            return null
        }
        var index = products.findIndex(value => value.id == id)
        if (index == -1) {
            return 'item not found'
        }
        if (confirm('Are you sure?')) {
            products.splice(index, 1)
        }
        return products
    }
    function getProductById(id) {
        if (id == null) {
            return null
        }
        return products.find(value => value.id == id)
    }
    return {
        createProduct: createProduct,
        deleteProduct: deleteProduct,
        getProductById: getProductById
    }
})()   //doesnt contain all functions but you get the idea
function addMany(...items) {
    return products.push(...items)
}