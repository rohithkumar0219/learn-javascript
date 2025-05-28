let nullVar = null;
let numVar = 29;
let boolVar = true;
let bigIntVar = BigInt("567");
let strVar = "harry";
let symbolVar = Symbol("I'm a nice symbol");
let undefinedVar = undefined;

null vs undefined
let nullVar = null; // value is intentionally nothing
let undefinedVar; // value is undefined or not defined

using typeof
console.log(typeof numVar); // Output: number
console.log(typeof strVar); // Output: string

objects
console.log(typeof numVar); // Output: number
console.log(typeof strVar); // Output: string

console.log(bioData["name"]); // Output: Harry
console.log(bioData.age); // Output: 29
console.log(bioData["pet"]); // Output: undefined

