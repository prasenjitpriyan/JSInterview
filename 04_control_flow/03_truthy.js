//const userEmail = "prasenjitpriyan@gmail.com";
//const userEmail = "";
const userEmail = [];

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have user email");
};

//Empty array check

if (userEmail.length === 0) {
    console.log("Array is empty");
}

//Empty object

if (Object.keys(userEmail).length === 0) {
    console.log("Object is empty");
}


//================== falsy values ======================

//false
//0
//-0
//BigInt 0n;
//""
//null
//undefined
//NaN - Not a Number

//================= truthy values ========================

//"0"
//"false"
//" " //space add
//[]
//{}
//function() //empty function

// --------------------------------------------------------

false == 0 //true
false == "" //true
0 == "" //true


// ==== Nullish Coalescing Operator (??)
//null and undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10 //safety check
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


//Terniary Operator
condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
