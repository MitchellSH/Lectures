/* global test:false, start:false, asyncTest:false, deepEqual:false, Portfolio:false, Stock:false, ok:false */

'use strict';

test( 'Stock#new', function(){
  var s1 = new Stock('AAPL', 50, 25);
  s1.symbol = 'AAPL';
  s1.shares = 50;
  s1.purchaseAmount = 25;

  ok(s1 instanceof Stock, 's1 should be an instance of Stock');
  deepEqual(s1.getSymbol(), 'AAPL', 's1 should be AAPL');
  deepEqual(s1.getShares(), 50, 's1 should have 50 shares');
  deepEqual(s1.getPurchaseAmount(), 25, 's1 was purchases at $25');
});


asyncTest( 'Stock#getQuote', function(){
  var s1 = new Stock('AAPL', 50, 25);
  s1.getQuote(function(quote){
    ok(quote.LastPrice > 0, 'appl quote should be above zero');
    start();
  });
});
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
  deepEqual(p1.stockCount(), 0, 'p1 should have no stock');
});

test( 'Portfolio#addStock', function(){
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('GOOG', 150, 30);
  var s3 = new Stock('AMZN', 200, 25);
  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock(s3);
  
  deepEqual(p1.stockCount(), 1, 'p1 should have one stock');
  deepEqual(p1.stockCount(), 1, 'p1 should have one stock');
  deepEqual(p1.stockCount(), 1, 'p1 should have one stock');
});


