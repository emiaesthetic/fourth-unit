'use strict';

const productTitle = prompt('Введите название товара: ');
const productCategory = prompt('Введите категорию товара: ');
const productQuantity = +prompt('Введите количество товара: ', 0);
const productPrice = +prompt('Введите цену товара: ', 0);

if (
	Number.isFinite(productQuantity) &&
	productQuantity > 0 &&
	Number.isFinite(productPrice) &&
	productPrice > 0
) {
	const productTotalPrice = productPrice * productQuantity;
	console.log(
		`На складе ${productQuantity} единицы товара "${productTitle}" на сумму ${productTotalPrice} деревянных`,
	);
} else {
	console.log('Вы ввели некорректные данные');
}
