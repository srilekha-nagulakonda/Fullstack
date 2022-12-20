//array literal
// const ids = [1, 2, 3, 4, 56];
// const ids2 = [];
// console.log(ids);
// console.log(ids2);

// const ids3 = new Array(1, 2, 3, 4, 5);
// console.log(ids3);
// ids3[0] = 8;
// console.log(ids3);

//array constructor

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.constructor();
// console.log(text);

// const fruits = [1, 2, 3, 4];
// let text = fruits.constructor();
// console.log(text);

//concatination

r1 = [1, 2, 4, "sri"];
r2 = ["we", "eddy", "ious"];
r4 = [23, 45];
// const r3 = r1.concat(r2, r4);
// console.log(r3);

// console.log(r1.copyWithin(0, 2));
// console.log(r1.copyWithin(2, 0));
// // Input array
// var array = [1, 2, 3, 4, 5, 6, 7];

// // placing at index position 0 the element
// // between index 3 and 6
// console.log("Array " + array.copyWithin(0, 3, 6));

//length
// fruit = ["s", 12, 34, "rt"];
// // console.log(fruit.length);
// console.log(fruit.push("r"));
// console.log(fruit);

// //is Array
// console.log(Array.isArray(fruit));
// h = { 1: 3 };
// console.log(Array.isArray(h));
// console.log((fruit instanceof Array) + (fruit instanceof Object));
// var fruits = ["Apple", "Mango", "Banana"];

// const users = [
//   {
//     id: 1,
//     name: "Harsh",
//     password: "123456",
//   },
//   {
//     id: 2,
//     name: "user 2",
//     password: "12345",
//   },
// ];
// console.log(users);

// users.push({
//   id: users.length + 1,
//   name: "user 3",
//   password: "user1234",
// });
// console.log(users);
// let y = users.pop();
// console.log(y);
// console.log(users);

// console.log(Array.isArray(users));

// console.log(users instanceof Array);

// const nums = [1, 2, 3, 45, 3];
// console.log(nums);

// console.log(nums.toString());

// const name1 = "srilekha sri sr";
// const nameArr = name1.split(" ");
// console.log(nameArr);

// const nameJoined = nameArr.join("*");
// console.log(nameJoined);

let fruits1 = ["orange", "papaya", "pine", "apple"];
// console.log(fruits1.shift());
// console.log(fruits1.unshift("lemon"));
// console.log(fruits1);

// const n = [1, 4, 34, 5, 3];
// // console.log(n);
// const h = n.splice(2, 0, 23);
// console.log(n);
// console.log(h);
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits.splice(2, 2));
// console.log(fruits);
// fruits.splice(2, 0, "tru", "we");
// console.log(fruits);

// f = fruits.slice(1, 3);
// console.log(f);
// console.log(fruits);

// console.log(fruits.sort());
// console.log(fruits.reverse());

// g = [4, 36];
// console.log(g.map(Math.sqrt));

//filter
let f = [23, 34, 54, 13];
let result = f.filter(check);
function check(f1) {
  f1 >= 18;
}
// console.log(f);
// console.log(reult);

const users = [
  {
    name: "name 1",
    role: "user",
  },
  {
    name: "name 2",
    role: "admin",
  },
  {
    name: "name 3",
    role: "user",
  },
];
const UserRoole = users.filter((user) => user.role === "user");
// console.log(UserRoole);

const nums = [1, 2, 3, 4];
const reduceModel = nums.reduce(
  (previous, currentvalue) => previous + currentvalue,
  0
);
// console.log(reduceModel);

const users2 = [
  {
    name: "user 1",
    isActive: false,
  },
  {
    name: "user 2",
    isActive: true,
  },
  {
    name: "user 3",
    isActive: false,
  },
];
const isAllActive = users2.every((value) => value.isActive === true);
// console.log(isAllActive);
const anyActive = users2.some((value) => value.isActive === true);
// console.log(anyActive);

// const strings = ["hi", "how", "when"];
const strings = [1, 2, 3, 4];

console.log(strings);
// console.log(strings.indexOf("hi"));
// console.log(strings.indexOf(1));

const findnum = strings.find((value) => value === 2);
// console.log(findnum);

const user3 = users2.find((value) => value.name === "user 2");
// console.log(user3.name);
// console.log(user3.isActive);

const tags = ["js", "webdev", "frontend", "backend"];
// console.log(tags.includes("webdev"));
