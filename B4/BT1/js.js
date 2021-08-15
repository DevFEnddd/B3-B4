// Ex1:Initialize a variable named products, containing an array of products, each product has a name,
//  price, brand, category, and color

let products = [{
    id: 1,
    name: "Xiaomi portable charger 20000mah",
    brand: "Xiaomi",
    price: 428,
    color: "White",
    category: "Charger",
    providers: "PhukienzeroDientuccc"
},
{
    id: 2,
    name: "VSmart Active 1",
    brand: "VSmart",
    price: 5487,
    color: "Black",
    category: "Phone",
    providers: "Tgdd"
},
{
    id: 3,
    name: "IPhone X ",
    brand: "Apple ",
    price: 21490,
    color: "Gray ",
    category: "Phone",
    providers: "Tgdd"
},
{
    id: 4,
    name: "Samsung ",
    brand: "Galaxy A9 Samsung ",
    price: 8490,
    color: "Blue",
    category: "Phone",
    providers: "Tgdd"
}];
// 1.1 Print/log name and price of all the products out
// for (let i = 0; i < products.length; i++) {
//     console.log("---------------------------------------");
//     console.log("Name: " + products[i].name);
//     console.log("Price: " + products[i].price);
// }

// 1.2 Write a script printing/logging out the products with their number, 
// then print/logging out the details of a product with its position entered by users
// for (let i = 0; i < products.length; i++) {
//     console.log("#" + (i + 1) + "." + products[i].name);
//     console.log("   Price: " + products[i].price);
// }
// let position = Number(prompt("Enter product position:"));
// console.clear();
// console.log("Name: " + products[position - 1].name);
// console.log("Brand: " + products[position - 1].brand);
// console.log("Price: " + products[position - 1].price);
// console.log("Color: " + products[position - 1].color);
// console.log("Category: " + products[position - 1].category);

// 1.3 Write a script printing/logging out the products based on category input by users
// let c = prompt("Enter product position:");
// for (let i = 0; i < products.length; i++) {
//     if (c === products[i].category){
//         console.log("---------------------------------------");
//         console.log("Name: " + products[i].name);
//         console.log("Price: " + products[i].price);
//     }  
// }
// 1.4 Add providers to each product
let addProvider = ['Phukienzero Dientuccc','Tgdd','Tgdd','Tgdd'];
let j = 0;
for (let i = 0; i < products.length; i++) {
    products[i].provider = addProvider[j++];
    // And printing/logging out all of the products
    console.log("#" + (i + 1) + "." + products[i].name);
    console.log("   Price: " + products[i].price);
    console.log("   Providers: " + products[i].provider);
}
// 1.5 (Optional) Search the products based on the wanted provider entered by users, 
// if you need more directions, find the hints at the end of this homework
let p = prompt("Enter provider");
for (let i = 0; i < products.length; i++) {
    if (p === products[i].provider) {
        console.log("---------------------------------------");
        console.log("Name: " + products[i].name);
        console.log("Brand: " + products[i].brand);
        console.log("Price: " + products[i].price);
        console.log("Color: " + products[i].color);
        console.log("Category: " + products[i].category);
        console.log("Providers:" + products[i].provider);
    }
}

