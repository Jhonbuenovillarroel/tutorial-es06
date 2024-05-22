// Prototipos

// function Person(name, lastname, age) {
//   this.name = name;
//   this.lastname = lastname;
//   this.age = age;
// }

// Person.prototype.getFullName = function () {
//   return `${this.name} ${this.lastname}`;
// };
// Person.prototype.getAge = function () {
//   return this.age;
// };

// const person1 = new Person("Jhon", "Bueno", 22);
// console.log(person1.getFullName());
// console.log(person1.getAge());

// Clases

class Person {
  constructor({ name, lastname, age }) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.lastname}`;
  }
  getAge() {
    return this.age;
  }
}

const person1 = new Person("Jhon", "Bueno", 22);
// console.log(person1.getFullName());
// console.log(person1.getAge());

class Teacher extends Person {
  constructor({ genre, ...obj }) {
    super(obj);
    this.genre = genre;
  }
}

const teacher1 = new Teacher({
  name: "Lucia",
  genre: "Female",
  age: 32,
  lastname: "Altamirano",
});
console.log(teacher1.getFullName());
