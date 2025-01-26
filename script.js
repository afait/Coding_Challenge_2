// Task 1 - Store Inventory
let products = ["product 1", "product 2", "product 3", "product 4", "product 5"]; // String - 5 products
console.log("Initial Products", products); // Log Initial products Output: ["product 1", "product 2", "product 3", "product 4", "product 5"]
products.push("product 6"); // Add product 6
console.log("Product List after addition", products); // Remove last product Output: [product 1, product 2, product 3, product 4, product 5, product 6]
products.pop(); // remove last product
console.log("After last product is removed", products); // Output: [product 1, product 2, product 3, product 4, product 5]
