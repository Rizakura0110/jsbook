let x = 1;
let y = x;
x = 2;
// 1
console.log(y);

let data1 = [0, 1, 2];
let data2 = data1;
data1[0] = 5;
// [5, 1, 2]
console.log(data2);