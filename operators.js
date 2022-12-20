// x = 3;
// y = 4;
// x = 10 + y;
// console.log(x);
// x -= 5;
// console.log(x);
// let r = 2;
// r += 3;
// console.log("r value:", r);
let x = 100;
let y = 5;
x &= y;
// console.log(x);
// console.log((x |= y));
// x = 2;
// y = 2;
// console.log(x === y);
// console.log(2 != 2.1);
// console.log(2 == "2");
console.log(0 == "");
console.log(0 === "");
console.log(true == "true");
// Number("true");
// Number("4")
// 4
// Number(true)
// 1
// Number("true")
// NaN
// "\t"==0
// true
// Number(\t)
// VM210:1 Uncaught SyntaxError: Invalid or unexpected token
// Number("\t")
// 0
// Number("\n")
// 0
// "\t"=="\n"
// false
// "\t"==Number("\n") //converted to numbers
// true
// //equal == is different types converted to number form
// undefined
// // === is first check data type of the variable
// undefined
// [6,7]==[6,7] // here array r takes diiferent address
// false
let f = [3, 4];
// (2) [3, 4]
let b = [3, 4];
// (2) [3, 4]
// f = b;
// (2) [3, 4]
console.log(f == b);

var r = 100;
// r &&= 5;
// console.log(r);

// let x = 3,
//   y = 4,
//   z = 6;
// let result = x < y && y < z;
// let n = !result;
// console.log(result, n);
