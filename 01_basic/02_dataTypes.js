"use strict"; 
//treat all JS code as newer version.
//alert("hello") //We are using node.js, not browser.
//Code readablity should be high.

//Primitive data type (7-types)

//Number => 2 to power 53;
//null => standalone value //object type
//Bigint
const bigNumber = 12345678900987654321n;
//Boolean => true/false
//String => "";
//Symbol => unique
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);
//Undefined => No value has been assigned.

//Non-Primitive or Reference data type (3-types)

//Array
const heros = ['Shaktiman', 'Naagraj', 'Doga'];
//object
let myObject = {
    key: 'value',
    name: 'Prasenjit',
    age:'36',
}
//functions
const myFunction = function() {
    console.log("Hello world");
}
console.log(typeof myFunction);
console.log(typeof undefined); //undefined
console.log(typeof null);

//================ Memory ======================

//Stack (Primitive)

let myEmailAddress = "prasenjitpriyan@gmail.com";

let anotherEmailAddress = myEmailAddress;
anotherEmailAddress = "prasenjitpriyanmou@gmail.com"

console.log(myEmailAddress);
console.log(anotherEmailAddress);

//Heep (Non-Primitive)

let userOne = {
    email: 'prasenjitpriyan@hotmail.com',
    upi: "userone@ybl",
}

let userTwo = userOne;

userTwo.email = "pradipta.das1611@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);