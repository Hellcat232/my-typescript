import "./style.css";

function add(num: number, str: string, bool: boolean, empty: null) {
  const obj: {} = {
    num,
    str,
    bool,
    empty,
  };

  return obj;
}
console.log(add(1, "hello", true, null));

let isDone: boolean = false;
let decimal: number = 10;
let text: string = "blue";
const obj: object = { name: "Tom", age: 30 };

// interface User {
//   name: string;
//   age: number;
// }

let user: { name: string; age: number } = {
  name: "Tom",
  age: 30,
};

let userJack: User = { name: "Jack", age: 23 };

let arrString: string[] = ["Text"];

// arrString = ["Tex"];

let arrNumber: number[] = [11];

// arrNumber = [11];

let matrix: (number | string)[][] = [
  [1, "2"],
  ["3", 4],
];

console.log(matrix);

let mixed: (number | string | boolean)[] = ["text", false, 1];

let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// type User = { name: string; age: number };
// let users: User[] = [
//   { name: "Tom", age: 30 },
//   { name: "Jack", age: 23 },
//   { name: "Mark", age: 40 },
// ];

// users[0].name = "Natali";

let arrAny: any[];
arrAny = [123, "TEXT", { name: "Tom" }, [1, 2, 3]];

console.log(arrAny);
//=============================================================================
let notSure: string = "4";
// notSure = false;
// notSure = {};
// notSure = "maybe a string instead";

// let num: number;

// num = notSure;

// console.log(num);

function fetchUserData() {
  return "Tom";
}

let userData: unknown = fetchUserData();
if (typeof userData === "string") {
  console.log(userData.toLocaleUpperCase());
}

let tupleType: [string, boolean];
//====================================================
tupleType = ["false", false];

enum Role {
  ADMIN,
  USER,
}

const person = { role: Role.USER };

if (person.role === Role.USER) {
  console.log("Role", Role.USER);
}

enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

function resp(status: HttpCodes) {
  return status;
}

console.log(resp(HttpCodes.Unauthorized));

//======================================================

let mixedType: string | boolean | number;

mixedType = false;
mixedType = 10;
mixedType = "string";

function combi(param1: string | number, param2: number | string) {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

console.log(combi("1", "6"));

//============================================================

function greet1(): string {
  return "100";
}

const greet2 = (): string => {
  return "Hello World";
};

let result: string = greet2();

console.log(result);

type User = { id: number; name: string };

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const getUserName = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

let res = getUserName(users);

console.log(res);
