// // SYMBOLS

// // Library land
// const uid = Symbol();
// console.log(uid);

// const user = {
//   // id: 'p1',
//   [uid]: "p1",
//   name: "Max",
//   age: 30,
//   [Symbol.toStringTag]: "User",
// };

// user[uid] = "p3";

// // app land => Using the library

// user.id = "p2"; // this should not be possible!

// console.log(user[Symbol("uid")]);
// console.log(Symbol("uid") === Symbol("uid"));
// console.log(user.toString());

// ITERATORS

// const company = {
//   curEmployee: 0,
//   employees: ["Max", "Manu", "Anna"],
//   next() {
//     if (this.curEmployee >= this.employees.length) {
//       return { value: this.curEmployee, done: true };
//     }
//     const returnValue = {
//       value: this.employees[this.curEmployee],
//       done: false,
//     };
//     this.curEmployee++;
//     return returnValue;
//   },
// };

// // console.log(company.next());
// // console.log(company.next());
// // console.log(company.next());

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

// GENERATORS

// const company = {
//   employees: ["Max", "Manu", "Anna"],
//   [Symbol.iterator]: function* employeeGenerator() {
//     // getEmployee: function* employeeGenerator() {
//     let currentEmployee = 0;
//     while (currentEmployee < this.employees.length) {
//       yield this.employees[currentEmployee];
//       currentEmployee++;
//     }
//   },
// };

// for (const employee of company) {
//   console.log(employee);
// }

// console.log([...company]);

// // const it = company.getEmployee();

// // console.log(it.next());
// // console.log(it.next());
// // console.log(it.next());
// // console.log(it.next());
// // console.log(it.next());

// REFLECT API

// const course = {
//   title: "JavaScript - The Complete Guide",
// };

// Reflect.setPrototypeOf(course, {
//   toString() {
//     return this.title;
//   },
// });

// Reflect.deleteProperty(course, "title");

// // Object.deleteProperty(course, 'title');

// // delete course.title;

// console.log(course);

// PROXY API

// ---

const course = {
  title: "JavaScript - The Complete Guide",
};

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    if (propertyName === "length") {
      return 0;
    }
    return obj[propertyName] || "NOT FOUND";
  },
  set(obj, propertyName, newValue) {
    console.log("Sending data ...");
    if (propertyName === "rating") {
      return;
    }
    obj[propertyName] = newValue;
  },
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
pCourse.new = "new";
console.log(pCourse.title, pCourse.length, pCourse.rating, pCourse.new);
