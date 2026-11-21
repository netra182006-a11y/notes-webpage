console.log("===== PROBLEM 1: STUDENT PROFILE =====");

let student = {
    name: "Rahul",
    age: 21,
    department: "CSE",
    college: "ABC College"
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Department:", student.department);
console.log("College:", student.college);

student.age = 22;
student.course = "JavaScript";

console.log("Updated Age:", student.age);
console.log("Course:", student.course);


console.log("\n===== PROBLEM 2: SHOPPING CART =====");

let cart = ["Milk", "Bread", "Eggs", "Rice", "Sugar"];

console.log("Original:", cart.join(", "));
cart.push("Butter");
console.log("After Push:", cart.join(", "));
cart.pop();
console.log("After Pop:", cart.join(", "));
cart.unshift("Oil");
console.log("After Unshift:", cart.join(", "));
cart.shift();
console.log("After Shift:", cart.join(", "));


console.log("\n===== PROBLEM 3: EMPLOYEE SALARY =====");

const employee = {
    name: "Arun",
    designation: "Developer",
    salary: 25000,
    bonus: 5000
};

const { name, designation, salary, bonus } = employee;
let total = salary + bonus;

console.log("Employee:", name);
console.log("Designation:", designation);
console.log("Basic Salary:", salary);
console.log("Bonus:", bonus);
console.log("Total Salary:", total);


console.log("\n===== PROBLEM 4: STUDENT MARKS =====");

const marks = [35, 60, 45, 80, 90];

let updated = marks.map(mark => mark + 5);
let passed = updated.filter(mark => mark >= 50);
let totalMarks = updated.reduce((sum, mark) => sum + mark, 0);

console.log("Original Marks:", marks);
console.log("Updated Marks:", updated);
console.log("Passed Marks:", passed);
console.log("Total Marks:", totalMarks);


console.log("\n===== PROBLEM 5: MERGE PRODUCTS =====");

const electronics = ["Laptop", "Mobile", "Tablet"];
const accessories = ["Mouse", "Keyboard", "Headphones"];

let products = [...electronics, ...accessories];
products = [...products, "Monitor"];

const [first, second] = products;

console.log("Merged Products:", products.slice(0, 6));
console.log("Final Products:", products);
console.log("First Product:", first);
console.log("Second Product:", second);