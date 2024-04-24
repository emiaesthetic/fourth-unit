'use strict';

const isLeap = (year) =>
	year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

const leapYears = (start, end) => {
	[start, end] = start > end ? [end, start] : [start, end];

	const allYears = [...Array(end - start + 1).keys()].map(
		(index) => start + index,
	);

	const result = allYears.filter(isLeap);

	// for (let year = start; year <= end; year++) {
	// 	if (isLeap(year)) result.push(year);
	// }

	return result;
};

console.log(leapYears(-2000, -2024));
