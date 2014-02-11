/* jshint unused:false */
(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#one').click(ChangesBackground);
    $('#two').click(ChangesBackground2);
  }

  function ChangesBackground (){
    $('body').css('background', 'lightgreen');
    $('h1').text('Doctor Who');
  }
  function ChangesBackground2 (){
    $('body').css('background', 'lightblue');
    $('h1').text('My fav Show');
  }
})();

