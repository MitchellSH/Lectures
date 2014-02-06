/* jshint unused:false */

var Product = (function(){

  'use strict';

  function Product(name, price){
    this.name = name;
    this._price = price;
  }

  Object.defineProperty(Product.prototype, 'price', {
    get: function(){return this._price;}
  });

  return Product;
})();
