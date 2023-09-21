//this refers current context or value
//this outcome empty object in node and window in console.

const user = {
    username: 'prasenjit',
    price: 199,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);       
    }
}
user.welcomeMessage();
user.username = 'sam';
user.welcomeMessage();

console.log(this);



//====================Basic Function====================

// This workes under the object but return Undefined under function
function chai(){
    let username = 'prasenjit'
    console.log(this.username)
  }
  chai()


//======================Expression Function=================


const chai = function () {
    let username = 'prasenjit'
    console.log(this.username)
}
chai()


//================ Arrow function ======================

const chai = () => {
    let username = 'prasenjit'
    console.log(this.username)
}
chai();

//====================Arrow Example=========================

//Explicit return

const addTwo = (num1, num2) => {
    return num1 + num2
};
console.log(addTwo(3, 4));

//Implicit return 

const addThree = (num1, num2, num3) => (num1 + num2 + num3);
console.log(addThree(3, 4, 5));

//If user {}, return keyword have to write but in () return keyword not required.

