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

let index2 = 0;

while (index2 <= 100) {
  console.log(index2);
  index2++;
}

//! task 2

let counter = 0;

while (counter <= 100) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
  counter++;
}

//! task 3

let counter2 = 6;
let result = 15;

while (counter2 <= 100) {
  result = result + counter2;
  counter2 = counter2 + 1;
}

console.log(result);

let text = "Nooruz";

//! length тесктиин узундугун эсептеп берет
console.log(text.length);

//! charAt()
console.log(text.charAt());

let counter3 = 0;

while (0 < counter3) {
  console.log(text.charAt(counter3));
  counter3--;
}

let text2 = prompt("Какой сегодня день недели?");

switch (text2) {
  case "Понедельник":
  case "Вторник":
  case "Среда":
  case "Четверг":
  case "Пятница":
    alert("обаа туура");
    break;

  case "Суббота":
  case "Воскресение": {
    alert("жок туур эмес");
  }
}
