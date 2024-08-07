// ES6 features === ES6-дагы жаны нерселер

// Destructuring assignment === Деструктуризация => [] && {}
// Destructuring an Object
// Destructuring an array

// rest && spread operators => ...
// rest => остальное
// spread => распределить

// Shalow copy
// Deep copy

// let const
// arrow function
// default value
// block scope
// Destructuring
// spread rest

// const user = {
//   name: "John Doe",
//   age: 30,
//   city: "New York",
//   address: {
//     street: "123 Main St",
//     state: "NY",
//     zip: "10001",
//   },
// };

// let name = "Baktiar";
// const username = user.name;
// const userAge = user.age;
// const userCity = user.city;
// const userAddress = user.address.street;

// const { name, city } = user;

// console.log(name); //

// Destructuring an array

// const numbers = [1, 2, "asdfsadf", 4, {}];

// const [first, , , fourth, fifth] = numbers;

// console.log(first); //1
// console.log(fourth); // 2
// console.log(fifth); //'asdfsadf'

// const user = {
//   name: "John Doe",
//   city: "New York",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     state: "NY",
//     zip: "10001",
//   },
// };

// const { name, age, ...restProperties } = user;
// console.log(restProperties);

// const newObject = { ...user, isMarried: true };

// const numbers = [1, 2, 3, 5, {}];

// const students = [...numbers, 6, 7, 8];

// const numbers = [1, 2, "asdfsadf", 4, {}];

// const [first, second, ...restNumbers] = numbers;

// console.log(restNumbers);

// rest  бул остатоктарды алып берет
// spread бул распределить

// const array = [
//   { name: "nooruz", age: 18 },
//   { name: "baktiar", age: 20 },
//   { name: "Anvar", age: 13 },
// ];

// const filteredArray = array.filter(({ name, age }) => {
//   if (age >= 18) {
//     return true;
//   }
// });