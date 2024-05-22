// Destructuring en objetos
const obj = {
  name: "Jhon",
  lastname: "Bueno",
  age: 22,
};

const { lastname, age, name } = obj;
console.log(name, lastname, age);

// Destructuring en arrays
const array = [1, 2, 3, 4, 5, 6];

const [value2, value10000] = array;
console.log(value2, value10000);
