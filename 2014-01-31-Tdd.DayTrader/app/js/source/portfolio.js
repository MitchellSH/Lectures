/* jshint unused:false */

var Portfolio = (function(){

  'use strict';

  var stocks = [];


  function Portfolio(name){
    this.name = name;
  }

  Portfolio.prototype.stockCount = function(){
    return stocks.length;
  };
  
  Portfolio.prototype.addCount = function(stock){
    stock.add(stock);
  };
  
  Portfolio.prototype.removeStock = function(symbol){
    stock.add(stock);
  };
  return Portfolio;
})();
