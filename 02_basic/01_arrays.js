// ===================== Array ===================

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ['Shaktiman', 'Naagraj'];

const myArrTwo = new Array(1, 2, 3, 4, 5);
console.log(myArr[1]);

// =================== Array Methods ===============

//Add value to the last of array
myArr.push(6);
myArr.push(7);

//Remove value from the last of the array
myArr.pop();

//Add value to the start of the array
myArr.unshift(9)

//Remove value from the start of the array
myArr.shift();

//Number 9 is includes in the myArr
//Result in true/false
console.log(myArr.includes(9));

console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);

// ===================== slice, splice =============

console.log('A ', myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log('B ', myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log('C ', myArr);

