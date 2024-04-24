'use strict';

const getAveragePriceGoods = (goodsData) => {
	let sumAveragePriceEachProduct = 0;

	for (const product of goodsData) {
		const [quantityProduct, totalPriceProduct] = product;
		sumAveragePriceEachProduct += totalPriceProduct / quantityProduct;
	}

	return (sumAveragePriceEachProduct / goodsData.length).toFixed(2);
};

const allCashbox = [
	[12, 4500],
	[7, 3210],
	[4, 650],
	[3, 1250],
	[9, 7830],
	[1, 990],
	[6, 13900],
	[1, 370],
];

const averagePriceGoods = getAveragePriceGoods(allCashbox);
console.log(averagePriceGoods);
