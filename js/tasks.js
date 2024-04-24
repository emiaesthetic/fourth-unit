'use strict';

// Задача №2
const rain = Math.round(Math.random());
console.log(rain ? 'Пошёл дождь. Возьмите зонт!' : 'Дождя нет!');

// Задача №3
const mathScores = +prompt('Введите кол-во баллов по математике: ', 0);
const russianLanguageScores = +prompt(
	'Введите кол-во баллов по русскому языку: ',
	0,
);
const computerScienceScores = +prompt(
	'Введите кол-во баллов по информатике: ',
	0,
);

if (
	0 <= mathScores <= 100 &&
	0 <= russianLanguageScores <= 100 &&
	0 <= computerScienceScores <= 100
) {
	const totalScores =
		mathScores + russianLanguageScores + computerScienceScores;
	console.log(
		totalScores >= 265
			? 'Поздравляю, вы поступили на бюджет!'
			: 'У вас недостаточно баллов :(',
	);
} else {
	console.log('Вы ввели некорректные данные');
}

// Задача №4
const amountMoney = +prompt('Какую сумму денег вы хотите снять?', 0);

if (!Number.isFinite(amountMoney) || amountMoney < 0) {
	console.log('Вы ввели некорректные данные');
} else if (amountMoney % 100 !== 0) {
	console.log('Минимальная купюра 100 рублей');
} else {
	console.log('Выдача денег.');
}
