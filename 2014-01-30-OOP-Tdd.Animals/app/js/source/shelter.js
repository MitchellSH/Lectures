/* jshint unused:false */

var Shelter = (function(){

  'use strict';

  function Shelter(name){
    this.name = name;
    this.location = 'Not Defined';
    this.capacity = 0;

  }
  Shelter.prototype.setHours = function(times){
      var hours = _.map(times, function(time){
        return time.day + ' ' + time.open + '-' + time.close;
      });

      this.hours = hours.join(', ');
    };

  Shelter.prototype.getHours = function(){
    return this.hours;
  };

  Shelter.prototype.addAnimal = function(animal){
    this.animals.push(animal);
  };

  return Shelter;
})();
