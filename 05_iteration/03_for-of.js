//for of

//['', '', '']
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num)
}

const greetings = "Hello world!"
for (const great of greetings) {
    console.log(`Each char is ${great}`)
}

//Maps -- object

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United Stated of America')
console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

//Not work in object

const myObject = {
    'game': 'NFS',
    'game2': 'Far Cry'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}