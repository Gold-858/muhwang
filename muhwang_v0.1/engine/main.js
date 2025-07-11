import { createCharacter } from './character.js';
import { startBattle } from './battle.js';

const log = document.getElementById("log");

function render(text) {
  log.textContent += `\n${text}`;
}

const player = createCharacter("초보 무사");

const enemy = {
  name: "산적 두목",
  hp: 30,
  atk: 5
};

render("당신은 무림에 첫 발을 디뎠습니다.");
startBattle(player, enemy, render);
