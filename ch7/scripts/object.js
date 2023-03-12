let member = new Object();
member.name = '田中';
member.age = 21;
member.show = function(){
    console.log(`私は${this.name}、${this.age}です`);
}
member.show();