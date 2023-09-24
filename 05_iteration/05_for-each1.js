const coding = ['js', 'ruby', 'java', 'python', 'cpp'];


//callback function means no name of the function
coding.forEach(function (value) {
    console.log(value);
})

//Arrow function
coding.forEach((item) => {
    console.log(item);
})

//Create a function to print the coding array
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)


coding.forEach((item, index, array) => {
    console.log(item, index, array);
})

//Object under array
const mycoding = [
    {
        languageName: 'javaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
];
mycoding.forEach((item) => {
    console.log((item.languageName));
})