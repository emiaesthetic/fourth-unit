'use strict';

const modifyMessage = function (message) {
	const firstLetter = message.at(0).toUpperCase();
	return firstLetter + message.slice(1).toLowerCase();
};

console.log(modifyMessage('пРИВЕТ, МИР!'));
