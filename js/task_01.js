'use strict';

const showTableHeader = () => {
	let header = 'am'.padStart(4).padEnd(6);

	for (let i = 1; i <= 10; i++) {
		header += `${i}`.padStart(12);
	}

	console.log(header);
};

const showTableBody = () => {
	for (let i = 1; i <= 10; i++) {
		let tableRow = `${i}`.padStart(6);

		for (let j = 1; j <= 10; j++) {
			tableRow += `${i ** j}`.padStart(12);
		}

		console.log(tableRow);
	}
};

showTableHeader();
showTableBody();
