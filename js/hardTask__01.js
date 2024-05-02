'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  set width(value) {
    this._width = Number.isFinite(value) ? value : this._width;
  },

  set height(value) {
    this._height = Number.isFinite(value) ? value : this._height;
  },

  get perimeter() {
    const perimeter = (this._width + this._height) * 2;
    return `${perimeter}см`;
  },

  get area() {
    const area = this._width * this._height;
    return `${area}см2`;
  },
};

console.log(rectangle.perimeter);
console.log(rectangle.area);

rectangle.width = 6;
rectangle.height = 4;

console.log(rectangle.perimeter);
console.log(rectangle.area);

rectangle.width = 'Hello';
rectangle.height = 'world';

console.log(rectangle.perimeter);
console.log(rectangle.area);
