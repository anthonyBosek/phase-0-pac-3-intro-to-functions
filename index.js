// Follow along with the examples here
function doNothing() {}
// a funtion that does nothing is called a 'no-op'

function sayHello() {
  console.log("Hello!");
}
// sayHello();

function sayHelloToGuadalupe() {
  console.log("Hello, Guadalupe!");
}
function sayHelloToLiz() {
  console.log("Hello, Liz!");
}
function sayHelloToSamip() {
  console.log("Hello, Samip!");
}
// sayHelloToGuadalupe();
// sayHelloToLiz();
// sayHelloToSamip();

function sayHelloTo(firstName) {
  // parameters are the placeholders for the values that we will pass into the function
  console.log(`Hello, ${firstName}!`);
}
// arguments are the values that we pass into the function
// sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
// sayHelloTo("Jane"); // "Hello, Jane!"
// sayHelloTo("R2-D2"); // "Hello, R2-D2!"
// sayHelloTo(1); // "Hello, 1!"
// Essentially, the arguments are the actual values that we pass to the function, and the parameters are the named references where we store those passed-in values.

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
  return "test";
}

// say("Goodbye", "Julio"); // prints "Goodbye, Julio!"
// say("Julio", "hello"); // prints "Julio, hello!"

function add(x, y) {
  return x + y;
}
// console.log(add(1, 2)); // returns 3
// console.log(add(80, 9000)); // returns 3

function myFunction() {
  let count = 0;
  for (let i = 0; i < 10; i++) {
    console.log(count);
    count += 1;
  }
}
// myFunction();
// console.log(count); // count is not defined

// JS practice**
