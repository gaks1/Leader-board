import {
  name, score, baseurl, ul,
} from './selector.js';

let gameID = '';
const createGame = async () => {
  const gameName = 'Isaac game';
  const url = `${baseurl}/games/`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: gameName }),
  });
  const data = await response.json();
  gameID = data.result;
  return gameID;
};

const addGame = async (e) => {
  e.preventDefault();
  const username = name.value;
  const userscore = score.value;
  const url = `${baseurl}/games/${gameID}/scores/`;
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: username,
      score: userscore,
    }),
  });
  name.value = '';
  score.value = '';
};

const refreshGame = async () => {
  const url = `${baseurl}/games/${gameID}/scores/`;
  const response = await fetch(url);
  const data = await response.json();
  ul.innerHTML = '';
  data.result.forEach((el) => {
    const li = document.createElement('li');
    li.textContent = `${el.user} : ${el.score}`;
    ul.appendChild(li);
  });
};

export { createGame, addGame, refreshGame };
