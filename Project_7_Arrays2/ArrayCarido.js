const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2099842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// some and every

// is at least person 19?
const date = new Date();
const isNineteen = people.some((per) => date.getFullYear() - per.year >= 19);
console.log(isNineteen); // true

// is everyone 19 ?

const isEveryNineteen = people.every(
  (per) => date.getFullYear() - per.year >= 19
);
console.log(isEveryNineteen); // false

// find
// find the comment with the ID of 823423
const findComment = comments.find(comment => comment.id === 823423);
console.log(findComment); // returns the object


// find index
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index)

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index+1)
];

console.log(newComments);