//Object literals

const mySym = Symbol("key1");

const jsUser = {
    name: 'Prasenjit',
    'full name': 'Prasenjit Das',
    [mysym]: 'mykey1',
    age: 36,
    location: 'Kolkata',
    email: 'prasenjitpriyan@gmail.com',
    mobile: +91-9038332076,
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday'],
}

console.log(jsUser.email);
console.log(jsUser['email']);
console.log(jsUser['full name']);
console.log(jsUser[mySym]);

//Change and freeze
jsUser.email = 'prasenjitpriyan@hotmail.com';
//Object.freeze(jsUser);
jsUser.email = ' prasenjitpriyanmou@gmail.com';
console.log(jsUser);


//Function
jsUser.greeting = function() {
    console.log('Hello JS user');
}
jsUser.greetingTwo = function() {
    console.log(`Hello JS user ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());