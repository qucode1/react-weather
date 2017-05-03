var names = ["Andrew", "Julie", "Jen"];

// names.forEach(function(name) {
//     console.log("forEach", name)
// });

// names.forEach((name) => {           //{} for multiple statements
//     console.log("arrowFunc", name)
// });

// names.forEach((name) => console.log(name)); // single expression

// var returnMe = (name) => name + "!"; //automatically gets returned
// console.log(returnMe("Yannick"));

// var person = {
//     name: "Yannick",
//     greet: function() {
//         names.forEach(function(name) { // returns undefined because this is updated
//             console.log(this.name + " says hi to " + name)
//         })
//     }
// };

// person.greet();

// var person = {
//     name: "Yannick",
//     greet: function() {
//         names.forEach((name) => { // returns Yannick because this is NOT updated
//             console.log(this.name + " says hi to " + name)
//         })
//     }
// };

// person.greet();


// Challenge Area: 

function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
};
var addExpression = (a, b) => a + b;

console.log(addStatement(1, 3));
console.log(addExpression(9, 0));