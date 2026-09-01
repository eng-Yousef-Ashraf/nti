const APP_CONFIG = {
    name: "MyApp",
    version: "1.0",
    api: {
        baseUrl: "https://api.example.com",
        timeout: 5000
    },
    features: []
};
APP_CONFIG.api.timeout = 10000;
APP_CONFIG.features.push("authentication");
console.log(APP_CONFIG);
try {
    APP_CONFIG = {};
} catch (e) {
    console.log("Cannot reassign APP_CONFIG:", e.message);
}
//30
/////////////////////////////////////////////////////////////
function createCard(title, price = 0, ...tags) {
    return {
        price: price,
        tags: tags,
        label: `${title} - ${price} EGP`
    }
}
const card1 = createCard("Laptop", 15000, "Electronics", "Computer")
const card2 = createCard("Mouse", 500, "Electronics", "Accessory")
console.log(card1)
console.log(card2)
//31
/////////////////////////////////////////////////////////////
const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
]
for (let student of students){
    let {name,grade}=student
    console.log(`${name} scored ${grade}`);
}
//32