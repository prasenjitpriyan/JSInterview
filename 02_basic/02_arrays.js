const marvel_heros = ['Thor', 'Ironman', 'Spiderman'];
const dc_heros = ['Superman', 'Flash', 'Batman'];

//Push return ['Thor', 'Ironman', 'Spiderman' ['Superman', 'Flash', 'Batman']];
marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

//Concat returns ['Thor', 'Ironman', 'Spiderman' 'Superman', 'Flash', 'Batman'];
const newHeros = marvel_heros.concat(dc_heros);
console.log(newHeros);

//Spread Operator
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray('Prasenjit'));
console.log(Array.from('Prasenjit'));
//Interesting
console.log(Array.from({name: 'Prasenjit'}));


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));