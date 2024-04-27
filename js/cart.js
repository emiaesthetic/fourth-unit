'use strict';

const cart = {
	items: [],
	totalPrice: 0,
	count: 0,

	getTotalPrice() {
		return this.totalPrice;
	},

	calculateItemPrice() {
		this.totalPrice = this.items.reduce(
			(currentSum, product) => currentSum + product.price * product.count,
			0,
		);
	},

	increaseCount(count) {
		this.count += count;
	},

	add(name, price, count = 1) {
		const item = {
			name,
			price,
			count,
		};

		this.items.push(item);
		this.calculateItemPrice();
		this.increaseCount(count);
	},

	clear() {
		this.items = [];
		this.totalPrice = 0;
		this.count = 0;
	},

	print() {
		console.log(JSON.stringify(this.items));
		console.log(`Общая стоимость корзины: ${this.totalPrice}`);
	},
};

cart.print();

cart.add('Хлеб', 60);
cart.print();

cart.add('Молоко', 100, 3);
cart.print();

cart.add('Соль', 20, 100);
cart.print();

console.log(cart.count)
console.log(cart.getTotalPrice());

cart.clear();
cart.print();
