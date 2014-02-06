/* jshint unused:false */

var Person = (function(){

  'use strict';

  function Person(name, cash){
    this.name = name;
    this._cash = cash;
  }

  Object.defineProperty(Person.prototype, 'cash', {
    get: function(){return this._cash;}
  });

  return Person;
})();
