'use strict';

const randomNumber = Math.ceil(Math.random() * 100);


const entryNumber = () => {
  const userEntry = prompt('Введите число: ');

  if (userEntry === null) return null;

  if (Number.isFinite(+userEntry)) return +userEntry;

  alert(`${userEntry} - не число! Введите число: `);
  return entryNumber();
};


const guessNumber = () => {
  const userAttempt = entryNumber();

  if (userAttempt === null) return;

  if (userAttempt === randomNumber) {
    alert('Правильно!');
    return;
  } else if (userAttempt > randomNumber) {
    alert('Загаданное число меньше!');
    return guessNumber();
  } else {
    alert('Загаданное число больше!');
    return guessNumber();
  }
};

guessNumber();
