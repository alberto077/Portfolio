let userName = "Alberto";
const age = 25;

userName = "Jane";

const skills = ["HTML", "CSS", "JavaScript"];

console.log("Hello World", skills.at(0));

const firstName = "Bob";
const lastName = "Ross";


console.log("Hello, " + firstName + " " + lastName);
console.log("Helloo,", firstName, lastName);

console.log(`Hello, ${firstName} ${lastName}`);

//trad function
function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Alberto"));

const greet1 = function(name) {
    return `Hello ${name}`;
};

console.log(greet1("Jane"));

const greet2 = (name) => `Hello, ${name}!`;
console.log(greet2("Tay")); 

const greet3 = (name) => { 
    return `Hello, ${name}!`
};

console.log(greet3("Jeremy")); 

function square(num) {
    return num*num;
}

const square2 = (num) => num * num;

console.log(square(50));

