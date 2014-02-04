/* global asyncTest:false, Portfolio:false, start:false, test:false, throws:false, deepEqual:false, Stock:false, ok:false */

'use strict';

test( 'Stock#new', function(){
  var s1 = new Stock('AAPL', 50, 25);

  throws(function(){
    s1.symbol = 'abc';
  }, 'should not be able to set symbol on s1');

  throws(function(){
    s1.shares = 'abc';
  }, 'should not be able to set shares on s1');

  throws(function(){
    s1.purchaseAmount = 'abc';
  }, 'should not be able to set purchaseAmount on s1');

  ok(s1 instanceof Stock, 's1 should be an instance of Stock');
  deepEqual(s1.symbol, 'AAPL', 's1 should be AAPL');
  deepEqual(s1.shares, 50, 's1 should have 50 aapl stock');
  deepEqual(s1.purchaseAmount, 25, 'purchased s1 at $25');
});


//asyncTest( 'Stock#getQuote', function(){
//  var s1 = new Stock('AAPL', 50, 25);
//  s1.getQuote(function(quote){
//    ok(quote.LastPrice > 0, 'appl quote should be above zero');
//    start();
//  });
//});
asyncTest( 'Stock#value', function(){
  var s1 = new Stock('AAPL', 50, 25);
  s1.value(function(value){
    ok(value > 0, 'appl total value should be alone zero');
    start();
  });
});
test( 'Portfolio#new', function(){
  var p1 = new Portfolio('Tech Stocks');
  
  ok(p1 instanceof Portfolio, 'p1 should be an instance of Portfolio');
  deepEqual(p1.name, 'Tech Stocks', 'p1 should have a name');
  deepEqual(p1.stockCount, 0, 'p1 should have no stock');
});

test( 'Portfolio#addStock', function(){
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);

  deepEqual(p1.stockCount, 4, 'should have 4 stocks');
});

test( 'Portfolio#getStock', function(){
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);

  var s5 = p1.getStock('AAPL');
  var stocks = p1.getStock(['AMZN', 'GOOG']);

  deepEqual(s5.symbol, 'AAPL', 'should find aapl');
  deepEqual(stocks.length, 2, 'should find 2 stocks');
  deepEqual(stocks[0].symbol, 'AMZN', 'should get amzn');
  deepEqual(stocks[1].symbol, 'GOOG', 'should get goog');
});


