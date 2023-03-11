let getTriangleArea = new Function (
    'base',
    'height',
    'return base * height / 2;'
);
console.log(getTriangleArea(10, 4));

// 関数リテラル・無名関数
let getTriangleArea2 = function(base, height) {
    return base * height / 2;
}
console.log(getTriangleArea2(20, 8));

// アロー関数
let getTriangleArea3 = (base, height) => {
    return base * height / 2;
};
console.log(getTriangleArea3(40, 16));

// これは動く
console.log(getTriangleArea4(80, 16));
function getTriangleArea4(base, height){
    return base * height / 2;
}