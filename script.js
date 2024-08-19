// const users = [
//   { id: 1, name: "Samir", age: 13 },
//   { id: 2, name: "Amir", age: 12 },
//   { id: 3, name: "Zamir", age: 11 },
// ];

// const renderUsers = () => {
//   const promies = new Promise((resolve, rejected) => {
//     resolve(users);
//   });
//   promies
//     .then((response) => {
//       return response;
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.log(err));
// };

// renderUsers();

// const getTodos = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json()
//         renderTodos
//     }

// };

const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
  } catch (error) {}
};
