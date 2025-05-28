var:
var name = "Harry";
console.log(name); //output: Harry

var name = "Harry";
name = "Ron";
console.log(name); //output: Ron

var name = "Harry";
{
    var name = "Ron";
    console.log(name); //output: Ron
}
console.log(name); //output: Ron

using let :

let a = 29

let b = " Harry";
{
let b = "this";
console.log(b); //output: this
}
console.log(b); //output: Harry

const:
const name = " Harry";
name = "this";
console.log(name); //output: Uncaught TypeError: Assignment to constant variable.