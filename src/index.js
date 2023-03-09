import './style.css';
import { addGame, refreshGame } from './modules/createGame.js';

const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');

submit.addEventListener('click', (e) => {
  addGame(e);
});
refresh.addEventListener('click', refreshGame);
