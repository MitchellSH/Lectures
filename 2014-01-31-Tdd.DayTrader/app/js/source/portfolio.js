/* jshint unused:false */

var Portfolio = (function(){

  'use strict';

  function Portfolio(name){
    this.name = name;
    this._stocks = [];
  }
  
  Object.defineProperty(Portfolio.prototype, 'stockCount', {
    get: function(){return this._stocks.length;}
  });
  
  Portfolio.prototype.addStock = function(input){
      this._stocks.push(input);
      this._stocks = _.flatten(this._stocks);
    };
  
  Portfolio.prototype.getStock = function(input){
      var output;

      if(typeof input === 'string'){
        output = findStock(input, this._stocks);
      } else {
        output = _.map(input, function(symbol){
          return findStock(symbol, this._stocks);
        }, this);
      }

      return output;
    };
  
  function findStock(symbol, stocks){
    return _.find(stocks, function(stock){
      return symbol === stock.symbol;
    });
  }
  
  Portfolio.prototype.delStock = function(input){
      var stocks = [].concat(input);

      var output = _.remove(this._stocks, function(stock){
          return _.contains(stocks, stock.symbol);
        });

      if(typeof input === 'string'){
        output = output[0];
      }

      return output;
    };
  
  return Portfolio;
})();
