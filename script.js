let index = 1;

if (index < 5) {
  console.log("Hello");
}
//! while loop

let i = 1;

while (i < 5) {
  console.log("i" + i);
  i = i + 1;
}

//! increment

let a = 0;

console.log(a); //0
a = a + 1; //1

console.log(a); //1

//! decrement

let b = 1;
console.log(b); //1
b = b - 1;

console.log(b);

// //! task 1

// let index2 = 0;

// while (index2 <= 100) {
//   console.log(index2);
//   index2++;
// }

//! task 2

// let counter = 0;

// while (counter <= 100) {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }
//   counter++;
// }

//! task 3

let counter2 = 6;
let result = 15;

while (counter2 <= 10) {
  result = result + counter2;
  counter2 = counter2 + 1;
}

console.log(result);
