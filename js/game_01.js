'use strict';

const randomNumber = Math.ceil(Math.random() * 100);

while (true) {
	const userAttempt = prompt('Угадайте число от 1 до 100');

	if (userAttempt === null) {
		break;
	} else if (!Number.isFinite(+userAttempt)) {
		alert('Введите число!');
	} else if (+userAttempt > randomNumber) {
		alert('Загаданное число меньше!');
	} else if (+userAttempt < randomNumber) {
		alert('Загаданное число больше!');
	} else {
		alert('Правильно!');
		break;
	}
}
