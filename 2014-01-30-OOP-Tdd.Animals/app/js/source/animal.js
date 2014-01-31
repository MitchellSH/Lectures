/* jshint unused:false */

var Animal = (function(){

  'use strict';

  function Animal(name){
    this.name = name;
    this.species = 'dog';
    this.gender = 'male';
    this.age = 0;
  }

  return Animal;
})();
