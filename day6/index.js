var id = 0
function autoID() {
    return ++id
}
var products = [
    {
        id: autoID(),
        name: "Laptop",
        price: 18500,
        category: "Electronics",
        quantity: 4
    },
    {
        id: autoID(),
        name: "Mouse",
        price: 180,
        category: "Electronics",
        quantity: 25
    },
    {
        id: autoID(),
        name: "Notebook",
        price: 35,
        category: "Stationary",
        quantity: 100
    },
    {
        id: autoID(),
        name: "Desk Lamb",
        price: 420,
        category: "Home",
        quantity: 0
    }
]
function createProduct(name, price, category, quantity) {

    name = name.trim()
    category = category.trim()

    if (name == '') {
        return 'Name cannot be empty'
    }

    if (
        products.some(
            value =>
                value.name.trim().toLowerCase()
                ==
                name.toLowerCase()
        )
    ) {
        return 'Item already found'
    }

    if (price <= 0) {
        return 'Price must be greater than 0'
    }

    if (quantity < 0) {
        return 'Quantity cannot be negative'
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
function getAllProducts() {
    return products
}
function getProductbyId(id) {
    if (id == null) {
        return null
    }
    return products.find(
        value => value.id == id
    )
}
function updateProduct(
    id,
    name,
    price,
    category,
    quantity
) {
    var index = products.findIndex(
        value => value.id == id
    )
    if (index == -1) {
        return 'Item not found'
    }
    products[index].name = name
    products[index].price = price
    products[index].category = category
    products[index].quantity = quantity

    return products[index]
}
function deleteProduct(id) {
    var index = products.findIndex(
        value => value.id == id
    )
    if (index == -1) {
        return 'Item not found'
    }
    var deletedProduct = products[index]
    products.splice(index, 1)
    return deletedProduct
}
function filterProducts(keyword) {
    keyword = keyword.trim().toLowerCase()
    return products.filter(function (value) {
        return (
            value.name
                .toLowerCase()
                .includes(keyword)
            ||
            value.category
                .toLowerCase()
                .includes(keyword)
        )
    })
}
var menuSelect =
    document.querySelector('#menuSelect')
var formSection =
    document.querySelector('#formSection')
var formTitle =
    document.querySelector('#formTitle')
var actionButton =
    document.querySelector('#actionButton')
var cancelButton =
    document.querySelector('#cancelButton')
var resultSection =
    document.querySelector('#resultSection')
var result =
    document.querySelector('#result')
var productId =
    document.querySelector('#productId')
var productName =
    document.querySelector('#productName')
var productPrice =
    document.querySelector('#productPrice')
var productCategory =
    document.querySelector('#productCategory')
var productQuantity =
    document.querySelector('#productQuantity')
var searchInput =
    document.querySelector('#searchInput')
var idGroup =
    document.querySelector('#idGroup')
var nameGroup =
    document.querySelector('#nameGroup')
var priceGroup =
    document.querySelector('#priceGroup')
var categoryGroup =
    document.querySelector('#categoryGroup')
var quantityGroup =
    document.querySelector('#quantityGroup')
var searchGroup =
    document.querySelector('#searchGroup')
function hideInputs() {
    idGroup.classList.add('hidden')
    nameGroup.classList.add('hidden')
    priceGroup.classList.add('hidden')
    categoryGroup.classList.add('hidden')
    quantityGroup.classList.add('hidden')
    searchGroup.classList.add('hidden')
}
function clearInputs() {
    productId.value = ''
    productName.value = ''
    productPrice.value = ''
    productCategory.value = ''
    productQuantity.value = ''
    searchInput.value = ''
}
menuSelect.addEventListener('change', function () {
    var choice = +menuSelect.value
    hideInputs()
    clearInputs()
    formSection.classList.remove('hidden')
    actionButton.classList.remove('hidden')
    cancelButton.classList.remove('hidden')
    resultSection.classList.add('hidden')
    actionButton.classList.remove('delete-btn')
    switch (choice) {
        case 1:
            formTitle.textContent = 'Add Product'
            nameGroup.classList.remove('hidden')
            priceGroup.classList.remove('hidden')
            categoryGroup.classList.remove('hidden')
            quantityGroup.classList.remove('hidden')
            actionButton.textContent = 'Add Product'
            break
        case 2:
            formTitle.textContent = 'Show All Products'
            actionButton.textContent = 'Show Products'
            break
        case 3:
            formTitle.textContent = 'Find Product'
            idGroup.classList.remove('hidden')
            actionButton.textContent = 'Find Product'
            break
        case 4:
            formTitle.textContent = 'Update Product'
            idGroup.classList.remove('hidden')
            nameGroup.classList.remove('hidden')
            priceGroup.classList.remove('hidden')
            categoryGroup.classList.remove('hidden')
            quantityGroup.classList.remove('hidden')
            actionButton.textContent = 'Update Product'
            break
        case 5:
            formTitle.textContent = 'Delete Product'
            idGroup.classList.remove('hidden')
            actionButton.textContent = 'Delete Product'
            actionButton.classList.add('delete-btn')
            break
        case 6:
            formTitle.textContent = 'Search Products'
            searchGroup.classList.remove('hidden')
            actionButton.textContent = 'Search'
            break
        case 0:
            formTitle.textContent = 'Exit Store'
            actionButton.textContent = 'Exit'
            break
    }
})
function displayResult(data) {
    resultSection.classList.remove('hidden')
    result.innerHTML = ''
    if (typeof data == 'string') {
        result.innerHTML = `
            <div class="message">
                ${data}
            </div>
        `
        return
    }
    if (!Array.isArray(data)) {
        createProductsTable([data])
        return
    }
    if (data.length == 0) {

        result.innerHTML = `
            <div class="message">
                No products found.
            </div>
        `
        return
    }
    createProductsTable(data)
}
function createProductsTable(list) {
    var table = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
    `
    list.forEach(function (product) {
        var status
        if (product.quantity > 0) {
            status = `
                <span class="in-stock">
                    In Stock
                </span>
            `
        } else {
            status = `
                <span class="out-stock">
                    Out of Stock
                </span>
            `
        }
        table += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.category}</td>
                <td>${product.quantity}</td>
                <td>${status}</td>
            </tr>
        `
    })

    table += `
            </tbody>
        </table>
    `
    result.innerHTML = table
}
function resetUI() {
    clearInputs()
    hideInputs()
    menuSelect.value = ''
    formSection.classList.add('hidden')
    resultSection.classList.add('hidden')
    actionButton.classList.add('hidden')
    cancelButton.classList.add('hidden')
}
cancelButton.addEventListener('click', function () {
    resetUI()
})
actionButton.addEventListener('click', function () {
    var choice = +menuSelect.value
    var output
    switch (choice) {
        case 1:
            output = createProduct(
                productName.value,
                +productPrice.value,
                productCategory.value,
                +productQuantity.value
            )
            displayResult(output)
            break
        case 2:
            output = getAllProducts()
            displayResult(output)
            break
        case 3:
            output = getProductbyId(
                +productId.value
            )
            if (output == undefined) {
                output = 'Item not found'
            }
            displayResult(output)
            break
        case 4:
            output = updateProduct(
                +productId.value,
                productName.value,
                +productPrice.value,
                productCategory.value,
                +productQuantity.value
            )
            displayResult(output)
            break
        case 5:
            output = deleteProduct(
                +productId.value
            )
            displayResult(output)
            break
        case 6:
            output = filterProducts(
                searchInput.value
            )
            displayResult(output)
            break
        case 0:
            resetUI()
            break
    }
})
