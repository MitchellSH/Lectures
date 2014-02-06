/* global test:false, Product:false, Person:false, deepEqual:false, ok:false */

'use strict';

test('Product#new', function(){
  var p1 = new Product('CD', 3);
  var p2 = new Product('Rope', 2);

  ok(p1.name, 'CD', 'p1 should be a CD');
  ok(p2.name, 'Rope', 'p2 should be a Rope');
  deepEqual(p1.price, 3, 'p1 should be 3');
  deepEqual(p2.price, 2, 'p2 should be 2');
});

test('Person#new', function(){
  var p1 = new Person('Bob', 500);
  var p2 = new Person('Liz', 700);
  
  ok(p1.name, 'Bob', 'p1 should be Bob');
  ok(p2.name, 'Liz', 'p2 should be Liz');
  deepEqual(p1.cash, 500, 'p1 should have $500');
  deepEqual(p2.cash, 700, 'p2 should have $700');
});


