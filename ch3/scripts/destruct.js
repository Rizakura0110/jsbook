let data = [56, 40, 26, 82, 19, 17, 73, 99];
let [x0, x1, x2, x3, x4, x5, x6, x7] = data;
console.log(x0);
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
console.log(x6);
console.log(x7);

let [y0, y1, y2, ...other] = data;
console.log(y0);
console.log(y1);
console.log(y2);
console.log(other);
console.log('----------');

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);