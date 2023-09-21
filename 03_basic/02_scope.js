//======================= {scope} ============================
    
    let a = 300; //Global scope

    if (true) {
        let a = 10;     //Block scope  
        console.log("BLOCK SCOPE ", a);
    };
    //console.log("GLOBAL SCOPE ", a);



//====================== {Nested scope} ==========================

//Function one (parents) of function two (child).
//child can access or take variables from parents.
function one() {
    const username = 'prasenjit'

    function two() {
        const website = 'google'
        console.log(username);
    }
    //console.log(website);
    two()
}
one()



//======================== if...else...{scope} =================

if (true) {
    const username = 'prasenjit';
    if (username === 'prasenjit') {
        const website = 'youtube'
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//================= Interesting concept =======================

//Basic function
function addOne(num) {
    return num + 1
}
addOne(5)


//Expression function
const addTwo = function(num) {
    return num + 2
}
addTwo(5)
