console.log(" VARIABLES");

let name = "Dinesh";
let age = 21;

console.log(name);
console.log(age);

console.log(" DATA TYPES");

let studentName = "Dinesh";
let studentAge = 23;
let mark = 90;
let isStudent = true;

console.log(typeof studentName);
console.log(typeof studentAge);
console.log(typeof mark);
console.log(typeof isStudent);



console.log("OPERATORS");

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


console.log(" CONDITIONS");

let marks = 80;

if (marks >= 50) {
    console.log("Pass");
}
else {
    console.log("Fail");
}


console.log("ELSE IF");

let age1 = 21;

if (age1 >= 18) {
    console.log("Adult");
}
else if (age1 >= 13) {
    console.log("Teenager");
}
else {
    console.log("Child");
}


console.log(" LOOPS");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


console.log(" WHILE LOOP");

let number = 1;

while (number <= 5) {
    console.log(number);
    number++;
}


console.log("FUNCTIONS");

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();


console.log(" FUNCTION WITH VALUE");

function greet(name) {
    console.log("Hello " + name);
}

greet("Ragul");



console.log(" ADD TWO NUMBERS");

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


console.log(" ARRAYS");

let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits);


console.log(" ARRAY POSITION");

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);



console.log(" ARRAY LENGTH");

console.log(fruits.length);


console.log("ADD ARRAY VALUE");

fruits.push("Banana");

console.log(fruits);

console.log("15. OBJECTS");

let student = {
    name: "Ragul",
    age: 21,
    city: "Chennai"
};

console.log(student);

console.log("ACCESS OBJECT VALUE");

console.log(student.name);
console.log(student.age);
console.log(student.city);



console.log("STRING");

let message = "Hello JavaScript";

console.log(message);


console.log(" STRING LENGTH");

console.log(message.length);


console.log(" UPPERCASE");

console.log(message.toUpperCase());



console.log("LOWERCASE");


// ==========================================
// MY DREAM WORLD - JAVASCRIPT
// ==========================================

const contentContainer = document.querySelector(".content-container");
const searchInput = document.querySelector(".searchbox input");
const searchButton = document.querySelector(".searchbox button");
const exploreButton = document.querySelector(".welcome button");


// CREATE CONTENT CARDS

function addContentCard(title, description) {

    const card = document.createElement("article");
    card.className = "content-card";

    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    const button = document.createElement("button");
    button.textContent = "Explore More";

    button.addEventListener("click", function() {
        alert("Welcome to " + title);
    });

    card.append(heading, paragraph, button);
    contentContainer.appendChild(card);
}


// FOUR MAIN CARDS

addContentCard(
    "My Favorites ♡",
    "My favorite songs, movies and all the little things I love."
);

addContentCard(
    "My Dreams ✨",
    "My dreams, wishes and things I want to achieve."
);

addContentCard(
    "My Food Diary 🍰",
    "My favorite dishes, snacks and delicious food."
);

addContentCard(
    "My Hobbies 🎨",
    "The activities and creative things I enjoy doing."
);


// SEARCH FUNCTION

function searchContent() {

    const searchValue = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".content-card");

    let found = false;

    cards.forEach(function(card) {

        const cardText = card.textContent.toLowerCase();

        if (searchValue === "" || cardText.includes(searchValue)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }

    });

    let message = document.querySelector(".no-results");

    if (!message) {
        message = document.createElement("p");
        message.className = "no-results";
        contentContainer.appendChild(message);
    }

    message.textContent = found ? "" : "No matching dreams found.";

}


searchButton.addEventListener("click", searchContent);

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchContent();
    }

});


// ENTER MY WORLD BUTTON

exploreButton.addEventListener("click", function() {

    document.querySelector(".popular").scrollIntoView({
        behavior: "smooth"
    });

});


// SIDEBAR NAVIGATION

const navigationLinks = document.querySelectorAll(".sidebar a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const sectionName = link.textContent.trim();

        if (sectionName === "My Home") {

            document.querySelector(".welcome").scrollIntoView({
                behavior: "smooth"
            });

        } else if (sectionName === "My Favorites") {

            document.querySelector(".popular").scrollIntoView({
                behavior: "smooth"
            });

        } else if (sectionName === "My Food") {

            const foodCard = Array.from(
                document.querySelectorAll(".content-card")
            ).find(function(card) {
                return card.textContent.includes("My Food Diary");
            });

            if (foodCard) {
                foodCard.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }

    });

});
// 7. FETCH API - MY PROFILE

fetch("https://jsonplaceholder.typicode.com/users/1")

    .then(function(response) {
        return response.json();
    })

    .then(function(user) {

        console.log("MY PROFILE");

        console.log({
            Name: user.name,
            Email: user.email,
            City: user.address.city,
            Phone: user.phone,
            Website: user.website
        });

    })

    .catch(function(error) {
        console.log("Error:", error);
    });
    // 8. FETCH API - MY DREAM INSPIRATION

fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then(function(response) {
        return response.json();
    })

    .then(function(post) {

        console.log("MY DREAM INSPIRATION");

        console.log({
            Title: post.title,
            Description: post.body
        });

    })

    .catch(function(error) {
        console.log("Error:", error);
    });