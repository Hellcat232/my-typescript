import "./style.css";

function add(num: number, str: string, bool: boolean, empty: null) {
  return;
}
// console.log(add(1, "hello", true, null));

let isDone: boolean = false;
let decimal: number = 10;
let text: string = "blue";
const obj: object = { name: "Tom", age: 30 };

// interface User {
//   name: string;
//   age: number;
// }

let user: User = {
  name: "Tom",
  age: 30,
};

let userJack: User = { name: "Jack", age: 23 };

let arrString: string[] = ["Text"];

// arrString = ["Tex"];

let arrNumber: number[] = [11];

// arrNumber = [11];

let matrix: number[][] = [
  [1, 2],
  [3, 4],
];

let mixed: (number | string | boolean)[] = ["text", false, 1];

let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

type User = { name: string; age: number };
let users: User[] = [
  { name: "Tom", age: 30 },
  { name: "Jack", age: 23 },
  { name: "Mark", age: 40 },
];

users[0].name = "Natali";

let arrAny: any[];
arrAny = [123, "TEXT", { name: "Tom" }, [1, 2, 3]];

console.log(arrAny);
//=============================================================================
let notSure: any = 4;
notSure = false;
notSure = {};
notSure = "maybe a string instead";

let num: number;

num = notSure;

console.log(num);
