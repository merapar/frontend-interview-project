import { getComments, getPosts, getUsers } from "./data";

console.time('comments')
getComments().then((comments) => {
  console.timeLog('comments', comments);
});

console.time('posts');
getPosts().then((posts) => {
  console.timeLog('posts', posts);
});


console.time('users');
getUsers().then((users) => {
  console.timeLog('users', users);
});
