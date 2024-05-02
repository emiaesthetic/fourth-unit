'use strict';

const cart = {
  items: [],
  count: 0,
  _discount: 0,

  set setDiscount(promo) {
    this._discount = promo === 'METHED' ? 0.15 : promo === 'NEWYEAR' ? 0.21 : 0;
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },

  calculateItemPrice() {
    const totalPrice = this.items.reduce(
        (currentSum, product) => currentSum + product.price * product.count,
        0,
    );

    return (totalPrice - totalPrice * this._discount).toFixed(2);
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

console.log(`Цена без скидки: ${cart.totalPrice}`);

cart.setDiscount = 'NEWYEAR';
console.log(`Цена со скидкой: ${cart.totalPrice}`);

cart.clear();
cart.print();
