"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function game() {
  let aiNumber = 10;
  let userNumber = +prompt("Угадай число от 1 до 100");
  console.log(userNumber);

  if (userNumber == null) {
    alert("null");
  }
  if (!isNumber(userNumber)) {
    alert("Введите число!!!");
    console.log(userNumber);
    game();
  } else if (userNumber > aiNumber && userNumber != null) {
    alert("Загаданное число меньше");
    console.log(userNumber);
    game();
  } else if (userNumber < aiNumber) {
    alert("Загаданное число больше");
    console.log(userNumber);
    game();
  } else if (userNumber == aiNumber) {
    alert("Поздравляю, Вы угадали!!!");
    console.log(userNumber);
  }
}

game();
