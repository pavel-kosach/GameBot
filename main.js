"use strict";

let attempts = 10;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function game() {
  let aiNumber = getRandomIntInclusive(1, 100);
  console.log(aiNumber);
  gameProcess();

  function gameProcess() {
    let userNumber = prompt("Угадай число от 1 до 100");

    if (userNumber == undefined) {
      alert("Игра окончена");
    } else if (!isNumber(userNumber)) {
      alert("Введи число!!!");
      gameProcess();
    } else if (userNumber > aiNumber && userNumber != null && attempts > 0) {
      attempts = attempts - 1;
      alert("Загаданное число меньше, осталось попыток " + attempts);
      gameProcess();
    } else if (userNumber < aiNumber && attempts > 0) {
      attempts = attempts - 1;
      alert("Загаданное число больше, осталось попыток " + attempts);
      gameProcess();
    } else if (userNumber == aiNumber && attempts > 0) {
      let startGame = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      if (startGame) {
        attempts = 10;
        game();
      } else {
        alert("Игра окончена");
      }
    } else if (attempts == 0) {
      let startGame = confirm("Попытки закончились! Хотели бы сыграть еще?");
      if (startGame) {
        attempts = 10;
        game();
      } else {
        alert("Игра окончена");
      }
    }
  }
}

game();
