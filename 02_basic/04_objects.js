//Singleton Object
//const tinderUser = new Object();

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = 'Prasenjit';
tinderUser.isLoggedIn = false;

//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const regularUser = {
    email: 'prasenjitpriyan@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'Prasenjit Das',
            lastname: 'Das'
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const target = {1: 'a', 2: 'b'};
const source = {2: 'a', 4: 'b'};

//const returnedTarget = {target, source};
//const returnedTarget = Object.assign({}, target, source)
//Spread operator
const returnedTarget = {...target, ...source};
//console.log(returnedTarget);



//============= Destructuring in Object ================

const course = {
    coursename: 'js in hindi',
    price: '999',
    courseInstructor: 'Prasenjit'
}
//course.courseInstructor
const {courseInstructor: instructor} = course;
console.log(instructor);


