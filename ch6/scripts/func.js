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

function sum(...nums){
    let result = 0;
    for (let num of nums){
        if(typeof num !== 'number'){
            throw new Error(`指定値が数値ではない`);
        }
        result += num;
    }
    return result;
}
console.log(sum(1,2,3,4,5));

function printf(format, ...args){
    for(let i = 0; i<args.length;i++){
        let pattern = new RegExp(`\\{${i}\\}`,'g');
        format = format.replaceAll(pattern, args[i]);
    }
    console.log(format);
}
printf('こんにちは、{0}さん。私は{1}です。', '田中', '山田');

function showDialog({
    content = '',
    title = 'dialog',
}){
    console.log(`content:${content}`);
    console.log(`title:${title}`);
}
showDialog({
    content:'だいあぉぐ',
});
showDialog({
    title:'たいとる'
});