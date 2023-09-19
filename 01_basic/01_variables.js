const accountId = 1234567;
let accountEmail = 'prasenjitpriyan@gmail.com';
var accountPassword = '12345';
let accountState;

//Without const, let and var, variable can be decleared as below,

accountCity = 'Kolkata';

//accountId = 2; // not allowed
//{scope}

accountEmail = 'prasenjitpriyanmou@gmail.com';
accountPassword = '21213131';
accountCity = 'Bengaluru';

console.log(accountId);
/*
Prefer not to use var,
because of issue in block and functional scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity]);
