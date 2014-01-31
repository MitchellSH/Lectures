/* global test:false, deepEqual:false, ok:false, Shelter:false, Animal:false */

'use strict';

test( 'Shelter', function(){
    var shelter = new Shelter();
    var s1 = new Shelter();
    var string = 'my string';

    ok(shelter instanceof Shelter, 'shelter should be an instance of Shelter');
    ok(s1 instanceof Shelter, 's1 should be an instance of Shelter');
    ok(!(string instanceof Shelter), 'string should not be an instance of Shelter');
  });

test( 'Shelter#Name', function(){
    var s1 = new Shelter('Green Hills Shelter');

    deepEqual(s1.name, 'Green Hills Shelter', 's1 should have a name');
  });

test( 'Shelter#location', function(){
    var s1 = new Shelter('Green Hills Shelter');
    s1.location = 'Main St';
    var s2 = new Shelter('GHS');

    deepEqual(s1.location, 'Main St', 's1 should have a location');
    deepEqual(s2.location, 'Not Defined', 's2 should have a default location');
  });

test( 'Shelter#capacity', function(){
    var s1 = new Shelter('Green Hills Shelter');

    deepEqual(s1.capacity, 0, 's1 should have a zero capacity');
  });

test( 'Shelter#setHours()', function(){
    var s1 = new Shelter('Green Hills Shelter');
    s1.setHours([
      {day:'Mon', open:'8am', close:'5pm'},
      {day:'Wed', open:'11am', close:'2pm'},
      {day:'Fri', open:'9am', close:'4pm'}
    ]);

    deepEqual(s1.getHours(), 'Mon 8am-5pm, Wed 11am-2pm, Fri 9am-4pm', 's1 should have set hours');
  });

test( 'Shelter#addAnimal()', function(){
    var s1 = new Shelter('Green Hills Shelter');
    var a1 = new Animal('fido');
    s1.addAnimal(a1);


    ok(s1.animals.length === 1, 's1 should have 1 item in array');
    ok(s1.animals[0] instanceof Animal, 's1 should have 1 animal');
    deepEqual(s1.animals[0].name, 'fido', 'fido shouldbe in the shelter');

  });

test( 'Shelter#placeAnimal()', function(){
    var s1 = new Shelter('Green Hills Shelter');
    var a1 = new Animal('fido');
    var a2 = new Animal('fido');
    var a3 = new Animal('fido');
    s1.placeAnimal(a1, a2, a3);


    ok(s1.animals.length === 1, 's1 should have 1 item in array');
    ok(s1.animals[0] instanceof Animal, 's1 should have 1 animal');
    deepEqual(s1.animals[0].name, 'fido', 'fido shouldbe in the shelter');

  });


test( 'Animal', function(){
    var a1 = new Animal();

    ok(a1 instanceof Animal, 'a1 should be an instance of Animal');
  });

test( 'Animal#name', function(){
    var a1 = new Animal('fido');

    deepEqual(a1.name, 'fido', 'a1 should have a name');
  });

test( 'Animal#species', function(){
    var a1 = new Animal('dog');

    deepEqual(a1.species, 'dog', 'a1 should have a species');
  });

test( 'Animal#gender', function(){
    var a1 = new Animal('male');

    deepEqual(a1.gender, 'male', 'a1 should have a gender');
  });


test( 'Animal#age', function(){
    var a1 = new Animal(0);

    deepEqual(a1.age, 0, 'a1 should have an age');
  });


