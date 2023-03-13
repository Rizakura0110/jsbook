let member = new Object();
member.name = '田中';
member.age = 21;
member.show = function(){
    console.log(`私は${this.name}、${this.age}です`);
}
member.show();

let pet = {
    typw : "スノーホワイトハムスター",
    name : 'たろう',
    description : {
        bitrh : '2022-01-01'
    }
};
let pet2 = {
    name : '山田吉良',
    clor : 'white',
    description : {
        food : 'ヒマワリの種',
    },
};
let pet3 = {
    weight : 42,
    photo: 'hoge/hege/hoge',
};
Object.assign(pet, pet2, pet3);
console.log(pet)

let copied = Object.assign({}, pet);
console.log(pet);
console.log(copied);
console.log(pet === copied); // false

let human = {
    name : '鈴木',
    age : 18,
};
Object.defineProperty(human, 'age', {
    value : 25,
    writable : false,
    configurable : true,
    enumerable : true,
});
Object.defineProperty(human, 'gender', {
    value : 'male',
    writable : true,
    configurable : true,
    enumerable : true,
});
for (let prop in human){
    console.log(`${prop}: ${human[prop]}`);
};