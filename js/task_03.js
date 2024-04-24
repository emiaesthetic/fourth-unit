'use strict';

const calculate = (amountBasket, quantity, promo) => {
	let totalPrice = amountBasket;

	if (quantity > 10) {
		totalPrice *= 0.97;
	}

	if (totalPrice > 30000) {
		totalPrice -= (totalPrice - 30000) * 0.15;
	}

	if (promo === 'METHED') {
		totalPrice *= 0.9;
	} else if (promo === 'G3H2Z1' && totalPrice > 2000) {
		totalPrice -= 500;
	}

	return totalPrice;
};

const result = calculate(35000, 11, 'METHED');
console.log(`Итоговая цена с учетом скидок: ${result}`);
