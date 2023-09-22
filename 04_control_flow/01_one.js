//Control flow or logic flow

//if (true)

const temperature = 41

if (temperature) {
    console.log("less than 50");
} else{
    console.log("temperature is greated than 50");
}

//<, >, <=, >=, ==, !=, ===, !==

const score = 200;

if (score > 100) {
    const power = 'fly'
    console.log(`User power: ${power}`);
}


//========= Shorthand ==============

const balance = 1000;
//Implicit scope
if (balance > 500) console.log("test");  


//================ Multiple condition ================

const balanceTwo = 2000;
if (balanceTwo < 500) {
    console.log("less than");    
} else if (balanceTwo < 750) {
    console.log("less than 750");
} else if (balanceTwo < 1900) {
    console.log("less than 1900");
} else {
    console.log("less than 2000");
}

//================Shopping=======================
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
//They have loged in, so they can shopping.
//THEY have a dabit card, so they can shopping.

if (userLoggedIn && debitCard) {
    console.log("Allow to Shopping");
}

//Multiple condition check
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}

