/*

const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);]

*/

/*
console.log("start fetching")
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);
console.log("finish Fetching")
*/

/* getting LastPost


const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return { title: data.at(-1).title, body: data.at(-1).body };
};

const last = getLastPost();
last.then(data => console.log(data));    // not so clean 


*/

/* getting LastPost using await



const getLastPost = async function () {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    
    return { title: data.at(-1).title, body: data.at(-1).body };
};

const lastPost = await getLastPost();
console.log(lastPost);


*/

/*Blocking Code

console.log('start fetching users');
await fetch(`https://jsonplaceholder.typicode.com/users`);
console.log("Finish Fetching")

*/

let g;
