let age = prompt("Enter your age");
console.log(typeof age); 
//1
let age = prompt("Enter your age");
console.log(typeof age);
age = Number(age);
console.log(typeof age);

//1
let input = prompt("Enter a string");
if(input === "Hello"){
    console.log("Hello World");
}

//2
let input = prompt("Enter a string");
if(input === "Hello"){
    console.log("Hello World");
}
else{
    console.log("Goodbye World");
}

//3
let input = prompt("Enter a string");
if(input === "Hello"){
    console.log("Hello World");
}
else if(input === "Goodbye"){
    console.log("Goodbye World");
}
else{
    console.log("Invalid Input");
}

ex:
let input = prompt("Enter a number");
if(input > 10){
    console.log("Number is greater than 10");
}
else if(input < 10){
    console.log("Number is less than 10");
}
else{
    console.log("Number is equal to 10");
}