let score = "33abc";
//dont realy in number

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//'33' => 33
//'33abc' => NaN
//true => 1;
//false => 0;

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 => true;
//0 => false;
//""=> false;
//"Prasenjit Das" => true;

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//========================= Operations =======================

let value = 3;
let negValue = -value;
console.log(negValue);

//Increment (++)
//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
let gameCounter = 100;
++gameCounter;
gameCounter++;
console.log(gameCounter);
