const myObject = {
    js: 'javaScript',
    cpp: 'C++',
    rb: 'ruby'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United Stated of America')
map.set('Fr', 'France')
map.set('Bn', 'Bangladesh')

for (const key in map) {
    console.log(key);
}

