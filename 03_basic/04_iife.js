//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

//Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

(function chai() {
    //Named IIFE
    console.log(`DB Connected`);
})();

//Arrow function
( (name) => {
    //Unnamed IIFE
    console.log(`DB Connected Two ${name}`);
})('prasenjit');

