const fetch = require('node-fetch');
const promptly = require('promptly');

async function getUser(username) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const json = await res.json();
  return json;
}

async function start(username) {
  const user = await getUser(username);
  console.log(user);
}

promptly.prompt('Username: ')
  .then(value => {
    start(value);
  });
