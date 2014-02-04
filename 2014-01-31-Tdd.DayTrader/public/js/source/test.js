/* global asyncTest:false, Client:false, Portfolio:false, start:false, test:false, throws:false, deepEqual:false, Stock:false, ok:false */

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

test( 'Portfolio#delStock', function(){
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);

  var s5 = p1.delStock('AAPL');
  var stocks = p1.delStock(['AMZN', 'GOOG']);

  deepEqual(p1.stockCount, 1, 'should have 1 remaining stock');
  deepEqual(s5.symbol, 'AAPL', 'should find aapl');
  deepEqual(stocks.length, 2, 'should remove 2 stocks');
  deepEqual(stocks[0].symbol, 'AMZN', 'should get amzn');
  deepEqual(stocks[1].symbol, 'GOOG', 'should get goog');

});

test( 'Client#new', function(){
  var p1 = new Client('Bob');
  
  ok(p1 instanceof Client, 'p1 should be an instance of Client');
  deepEqual(p1.name, 'Bob', 'p1 should have a name');
  deepEqual(p1.portfolioCount, 0, 'p1 should have no portfolio');
});

test( 'Client#addPortfolio', function(){
  var p1 = new Client('Bob');
  var s1 = new Portfolio('Tech Stock');
  var s2 = new Portfolio('Business Stock');
  var s3 = new Portfolio('My Stock');
  var s4 = new Portfolio('Live Stock');

  p1.addPortfolio(s1);
  p1.addPortfolio(s2);
  p1.addPortfolio([s3, s4]);

  deepEqual(p1.portfolioCount, 4, 'should have 4 portfolios');
});

test( 'Client#getPortfolio', function(){
  var p1 = new Client('Bob');
  var s1 = new Portfolio('Tech Stock');
  var s2 = new Portfolio('Business Stock');
  var s3 = new Portfolio('My Stock');
  var s4 = new Portfolio('Live Stock');

  p1.addPortfolio(s1);
  p1.addPortfolio(s2);
  p1.addPortfolio([s3, s4]);

  var s5 = p1.getPortfolio('Tech Stock');
  var portfolios = p1.getPortfolio(['Business Stock', 'My Stock']);

  deepEqual(s5.symbol, 'Tech Stock', 'should find Tech Stock');
  deepEqual(portfolios.length, 2, 'should find 2 portfolios');
  deepEqual(portfolios[0].symbol, 'Business Stock', 'should get Business Stock');
  deepEqual(portfolios[1].symbol, 'My Stock', 'should get My Stock');
});

test( 'Client#delPortfolio', function(){
  var p1 = new Client('Bob');
  var s1 = new Portfolio('Tech Stock');
  var s2 = new Portfolio('Business Stock');
  var s3 = new Portfolio('My Stock');
  var s4 = new Portfolio('Live Stock');

  p1.addPortfolio(s1);
  p1.addPortfolio(s2);
  p1.addPortfolio([s3, s4]);

  var s5 = p1.delPortfolio('Tech Stock');
  var portfolios = p1.delPortfolio(['Business Stock', 'My Stock']);

  deepEqual(p1.portfolioCount, 1, 'should have 1 remaining stock');
  deepEqual(s5.symbol, 'Tech Stock', 'should find Tech Stock');
  deepEqual(portfolios.length, 2, 'should remove 2 portfolios');
  deepEqual(portfolios[0].symbol, 'Business Stock', 'should get Business Stock');
  deepEqual(portfolios[1].symbol, 'My Stock', 'should get My Stock');

});
