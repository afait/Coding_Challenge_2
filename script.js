// Task 1 - Store Inventory
let products = ["product 1", "product 2", "product 3", "product 4", "product 5"]; // String - 5 products
console.log("Initial Products", products); // Log Initial products Output: ["product 1", "product 2", "product 3", "product 4", "product 5"]
products.push("product 6"); // Add product 6
console.log("Product List after addition", products); // Remove last product Output: [product 1, product 2, product 3, product 4, product 5, product 6]
products.pop(); // remove last product
console.log("After last product is removed", products); // Output: [product 1, product 2, product 3, product 4, product 5]

// Task 2 - Student Scores
let scores = new Array(80,90,70,100,90); // Declared array with 5 scores
console.log("Initial Scores", scores); // Log initial scores
scores[1] = 100 // Updated second score in array
console.log("Updated Scores", scores); // Log updated array of scores
let total = scores.reduce((sum, scores) => sum + scores, 0); // Sum up the total of the scores
let average = total/5; // Find the average of the scores using total divided by the 5 scores
console.log("Average of all Scores", average); // Log the average of all scores

// Task 3 - Employee Records
let employee = {
    name: "employee name", // Name of Employee
    age: "employee age", // Age of Employee
    department: "employee department", //Department of Employee
    isActive: true, // A boolean value representing availability
}
console.log("Name:", employee.name); // Accessing property: "employee name"
console.log("Age:", employee.age); // Accessing property: "employee age"
console.log("Department:", employee.department); // Accessing propoerty "employee department"
console.log("isActive:", employee.isActive); // Log the Employee as Active True
employee.department = "Employee Department 2"; // Update the employee department to employee department 2
console.log("Updated Department", employee.department); // Log the updated employee department
employee.position = "CEO"; // Updated employee position to CEO
console.log("Updated employee position", employee.position) // Log the updated employee position
