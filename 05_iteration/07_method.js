const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNumbers = myNumbers.map((num) => num + 10)

//Chaining
const newNumbers = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);

console.log(newNumbers);

//Array.reduce use in shopping apps.

const me = [1, 2, 3];

// const myTotal = me.reduce(function (acc, currentValue) {
//     console.log(`acc: ${acc} and currentValue: ${currentValue}`);
//     return acc * currentValue
// }, 3)

//arrow function
const myNumbers2 = me.reduce((acc, curr) => acc * curr, 0);

console.log(myNumbers);

const shoppingList = [
    {
        id: 0,
        name: "iPhone 6S",
        description:
            "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
        imageUrl: "http://www.icentar.me/phone/6s/images/goldbig.jpg",
        price: 799,
    },
    {
        id: 1,
        name: "iPhone 5S",
        description:
            "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
        imageUrl: "http://www.icentar.me/phone/5s/images/silverbig.png",
        price: 349,
    },
    {
        id: 2,
        name: "Macbook",
        description:
            "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
        imageUrl: "http://www.icentar.me/mac/macbook/images/pro.jpg",
        price: 1499,
    },
    {
        id: 3,
        name: "Macbook Air",
        description:
            "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
        imageUrl: "http://www.icentar.me/mac/mbair/images/air.jpg",
        price: 999,
    },
    {
        id: 4,
        name: "Macbook Air 2013",
        description:
            "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
        imageUrl: "http://www.icentar.me/mac/mbair/images/air.jpg",
        price: 599,
    },
    {
        id: 5,
        name: "Macbook Air 2012",
        description:
            "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
        imageUrl: "http://www.icentar.me/mac/mbair/images/air.jpg",
        price: 499,
    },
];

//Add price of all
const priceToPay = shoppingList.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
