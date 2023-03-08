let data = {
    apple : 150,
    orange : 100,
    banana : 120,
};

for (let key in data){
    console.log(`${key} = ${data[key]}`)
}

console.log('------');

let data2 = ['apple', 'banana', 'orange'];
Array.prototype.hoge = function(){};
for (let value of data2){
    console.log(value);
}

console.log('------');

let books = [
    ['ゼロからわかる TypeScript入門', '技術評論社'],
    ['これからはじめるVue.js 3実践入門', 'SBクリエイティブ'],
    ['Bootstrap 5 フロントエンド開発の教科書', '技術評論社'],
];
for([title, publisher] of books){
    console.log(`${title}(${publisher}刊行)`)
}
console.log('------');
let books2 = [
    {
      isbn: '978-4-297-12635-3',
      title: 'ゼロからわかる TypeScript入門',
      publisher: '技術評論社'
    },
    {
      isbn: '978-4-8156-1336-5',
      title: 'これからはじめるVue.js 3実践入門',
      publisher: 'SBクリエイティブ'
    },
    {
      isbn: '978-4-297-12490-8',
      title: 'Bootstrap 5 フロントエンド開発の教科書',
      publisher: '技術評論社'
    },
];

for ([title, publisher] of books){
    console.log(`${title}(${publisher}刊行)`)
}

console.log('------');
let data3 = [ 'apple', 'orange', 'banana' ];
data3.forEach(function(value, index, array){
    console.log(value);
})