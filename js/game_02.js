'use strict';

const entryNumber = (message) => {
	while (true) {
		const userNumber = prompt(message);

    if (userNumber === null) return null;

		if (!Number.isFinite(+userNumber)) {
			alert(`${userNumber} - не число! Введите число: `);
		} else return +userNumber;
	}
};

const getMinMax = () => {
	const numberOne = entryNumber('Введите левую границу (число): ');
	const numberTwo = entryNumber('Введите правую границу (число): ');

	return numberOne > numberTwo
		? [numberTwo, numberOne]
		: [numberOne, numberTwo];
};

const getRandomNumber = (min, max) => {
	return Math.floor(min + Math.random() * (max - min + 1));
};

const [min, max] = getMinMax();
const randomNumber = getRandomNumber(min, max);

const userAttempts = [];
const countAttempts = ((max - min) * 0.3).toFixed();
let currentCount = 1;

while (currentCount <= countAttempts) {
	const userAttempt = entryNumber(`Ваша попытка №${currentCount}. Введите число: `);

  if (userAttempt === null) break;

	if (userAttempts.includes(userAttempt)) {
		alert(`Вы уже вводили число ${userAttempt}`);
		continue;
	} else if (userAttempt > randomNumber) {
		userAttempts.push(userAttempt);
		currentCount++;
		alert('Загаданное число меньше!');
	} else if (userAttempt < randomNumber) {
		userAttempts.push(userAttempt);
		currentCount++;
		alert('Загаданное число больше!');
	} else {
		alert('Правильно!');
    break;
	}
}
