$(document).ready(initialize);

function initialize(){
  // $ means jQuery
  // $('css or jQuery selector')
  $('h1').css('color', 'red');
  $('h1').css('font-size', '20px');
  var currentH1Text = $('h1').text();
  console.log(currentH1Text);
  $('h1').text('Welcome to Javascript');

  $('div').css('color', '#ff00ff');
  $('#d2').css('font-size', '9px');
  $('#d3').css('background-color', 'black');
  
  $('.c1').css({'color':'green', 'background-color':'blue'}).text('Mitch');
  

  var bgcolor = prompt('What background color do you want?');
  $('#d3').css('background-color', bgcolor);

  var text = prompt('What text do you want?');
  $('#d3').text(text);

  var numPs = $('.cp').length;
  console.log(numPs);

}



