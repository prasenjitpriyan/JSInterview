const name = 'Prasenjit';
const repoCount = '45';

//console.log(name + repoCount);
//have to use bacticks
console.log(`Hello my name is ${name} and my repoi count is ${repoCount}`);

const gameName = new String('pd130_eg');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.italics);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('1'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "       prasenjit      ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://prasenjit.com/priyan%20das";
console.log(url.replace('%20', '-'));
console.log(url.includes('prasenjit'));

//convert to array
console.log(gameName.split(','));