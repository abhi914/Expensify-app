/*
Object Destructing
*/
// const person = {
//     name: 'abhigyan',
//     age: 28,
//     location: {
//         city: 'gwalior',
//         temp: 47
//     }
// };

// const {name,age} = person;

// console.log(`my ${name} is ${age}`);


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan holiday',
//     publisher: {
//         name: 'penguin'
//     }
// };


// const {name : publisherName = 'self-published'} = book.publisher;

// console.log(publisherName);


const item = ["coffee (hot)", "$2.00","$2.50","2.75"];

const [coffee, , medium] = item ;

console.log(`A Medium ${coffee} cost ${medium}`);