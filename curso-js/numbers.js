const radius = 10;
const pi = 3.14;

const area = pi * radius ** 2;
console.log(area); //314

const crazyOperation = 5 * (10 - 3) ** 2;
console.log(crazyOperation); //245

let postLikes = 10;

postLikes++
postLikes--
console.log(postLikes);

postLikes += 10;
console.log(postLikes); //20

console.log(7 / 'oi'); //NaN

const likesMessage = `O post tem ${postLikes} de likes`;
console.log(likesMessage); 