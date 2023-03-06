let book = {
    title:'JS本格入門',
    author:{
        name : '田中',
        address:'東京都',
    },
    price:2980,
};
console.log(book.author.name);
console.log(book['author']['name'])