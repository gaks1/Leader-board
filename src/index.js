import './style.css';
import { createGame, addGame, refreshGame } from './modules/createGame.js';

const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');

createGame();

submit.addEventListener('click', (e) => {
  addGame(e);
});
refresh.addEventListener('click', refreshGame);
