/* global Animal: false */

(function(){

  'use strict';

  window.animalFactory = function(){
    var animals = [];
    var animal;

    var photos = [];
<<<<<<< HEAD
    photos[0] = 'url(http://images5.fanpop.com/image/photos/24500000/Fennec-Fox-fox-24576626-800-920.jpg)';
    photos[1] = 'url(http://25.media.tumblr.com/tumblr_m75zqcrbS51qzya49o1_500.jpg)';

    animal = new Animal('Makoto', 2, 'Female', photos, 'Happy Fox', 'Orange', 'Fox');
    animals.push(animal);
    
    photos[0] = 'url(http://unleashthefanboy.s3.amazonaws.com/wp-content/uploads/2013/01/Godzilla2000-1.jpg)';
    photos[1] = 'url(http://www.scified.com/pics/18882.jpg)';

    animal = new Animal('Godzilla', 100, 'Male', photos, 'Destroyer Of Worlds', 'Green', 'Giant Lizard');
    animals.push(animal);
    
    photos[0] = 'url(http://www.flayrah.com/sites/default/files/u/Higgs%20Raccoon/Brian_Griffin.png)';
    photos[1] = 'url(http://fc00.deviantart.net/fs42/i/2009/138/b/c/Family_Guy___Brian_Griffin_by_NickOnline.jpg)';

    animal = new Animal('Brain', 45, 'Male', photos, 'Alcholic', 'White', 'Dog');
=======
    photos[0] = 'url(http://a.tgcdn.net/images/products/zoom/ed66_exclusive_doctor_who_k9_figure.jpg)';
    photos[1] = 'url(http://www.hdwallpaperscorner.com/wp-content/uploads/2013/12/Siberian-Husky-Images.jpg)';

    animal = new Animal('Fido', 3, 'Male', photos, 'Happy Dog', 'Brown', 'Dog');
>>>>>>> 31a80baf1b40b8d3b19fad59d50c1ec76f5b9435
    animals.push(animal);

    return animals;

  };

})();
