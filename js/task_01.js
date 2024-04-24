'use strict';

const filter = (values, exceptions) => {
	const result = [];

	for (const value of values) {
		if (!exceptions.includes(value)) {
			result.push(value);
		}
	}

	return result;
};

const allStudents = [
	'Иванов',
	'Петров',
	'Сидоров',
	'Кузнецов',
	'Смирнов',
	'Попов',
	'Соколов',
];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const passersStudents = filter(allStudents, failedStudents);
console.log(passersStudents);
