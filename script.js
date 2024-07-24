// //Создание объекта:

// const object1 = {
//   name: "Samir",
//   age: 13,
//   isMarried: false,
//   address: {
//     metro: "Kuzminki",
//     street: "Zelenodolyskaya",
//     house: 24,
//   },
//   sayHello() {
//     console.log("Hello");
//   },
//   "of course": "Yeah!",
// };

// //? Точная нотация
// console.log(object.age)

// //? Квадратная нотация
// console.log(object['isMarried'])

// const user2 = {
//   name: "Ahmed",
//   age: 9,
//   isMarried: false,
// };
// user2.name = "Ahmed";
// user2.isMarried = false;
// console.log("BEFORE", user2);

// user2.isMarried = true;
// console.log("AFTER", user2);
let user3 = {}; 
const userName = prompt("Как ваше имя?");
const userAge = +prompt("Сколько вам лет?");
const userPassword1 = prompt("Введите пароль:");
const userPassword2 = prompt("Введите пароль для потверждения:");
if (userPassword1 === userPassword2) {
  alert("Добро пожаловать!");
  user3.Name = userName;
  user3.Age = userAge;
  user3.Password = userPassword1;
} else {
  alert("Вход заблокирован!");
}

console.log(user3);
