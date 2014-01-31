/* global Animal: false, animalFactory: false */
(function(){

  'use strict';

  $(document).ready(initialize);

  var animals = [];

  function initialize(){
    $('#add-photo').click(addPhoto);
    $('#add-animal').click(addAnimal);
<<<<<<< HEAD
=======

>>>>>>> 31a80baf1b40b8d3b19fad59d50c1ec76f5b9435
    animals = animalFactory();
  }

  function addAnimal(event){
    var species = $('#species').val();
    var age = $('#age').val() * 1;
<<<<<<< HEAD
    var gender = $('#gender input:checked').val();
=======
    var gender = $('#gender').val();
>>>>>>> 31a80baf1b40b8d3b19fad59d50c1ec76f5b9435
    var color = $('#color').val();
    var name = $('#name').val();
    var description = $('#description').val();
    var photos = getAnimalPhotos();

<<<<<<< HEAD
    var animal = new Animal(species, age, gender, color, name, description, photos);
    if (animal) {showAnimals(animals);}
=======
    var animal = new Animal(name, age, gender, photos, description, color, species);
>>>>>>> 31a80baf1b40b8d3b19fad59d50c1ec76f5b9435
    animals.push(animal);

    event.preventDefault();
  }

<<<<<<< HEAD
  function showAnimals(animals){
    $.each(animals, function(animal){
      var $tr  = $('<tr>');
      var $td1 = $('<td>').text(animal.species);
      var $td2 = $('<td>').text(animal.color);
      var $td3 = $('<td>').text(animal.name);
      var $td4 = $('<td>').text(animal.age);
      var $td5 = $('<td>').text(animal.gender);
      var $td6 = $('<td>').text(animal.description);
      var $td7photo = $('<div>').css('background-image', animal.photos[0]);
      var $td7 = $('<td>').append($td7photo);
      var $td8photo = $('<div>').css('background-image', animal.photos[1]);
      var $td8 = $('<td>').append($td8photo);
      $tr.append($td1, $td2, $td3, $td4, $td5, $td6, $td7, $td8);
      $('#animalTable').append($tr);
    });
  }

  function getAnimalPhotos(){
    var photoArray = $('#photos > .photoDiv');
    return _.map(photoArray, function(photo){
      return $(photo).css('background-image');
    });
  }
  function addPhoto(event){
    var $url = $('#photo').val();
    var $photoDiv = $('<div class="photoDiv"></div>').css('background-image', 'url(' + $url + ')');

    $('#photos').append($photoDiv);
=======
  function getAnimalPhotos(){
    var $divs = $('#photos > a > div');
    return _.map($divs, function(div){
      return $(div).css('background-image');
    });
  }


  function addPhoto(event){
    var url = $('#photo').val();

    var $a = $('<a>');
    $a.attr('href', '#');
    $a.addClass('th radius');

    var $div = $('<div>');
    $div.css('background-image', 'url(' + url + ')');
    $div.addClass('photo');

    $a.append($div);
    $('#photos').append($a);
    
>>>>>>> 31a80baf1b40b8d3b19fad59d50c1ec76f5b9435
    event.preventDefault();
  }

})();

