$(document).ready(initialize);

function initialize(){
  $('.numbers').click(displayNumber);
  $('#sign').click(changeSign);
  $('#push').click(pushToQueue);
  $('.symbols').click(compute);
  $('#clear').click(clear);
}


function compute(){
  var symbols = this.id;
  var $lis = $('#queue li');
  var numbers = parseTags($lis);
  var result = 0;

  if(numbers.length<2){
    if(symbols === "clear")
      result = 0;
    else
      return;
  }
  else{
  
  switch(symbols){
    case 'add':
      result = numbers[0] + numbers[1];
      break;
    case 'sub':
      result = numbers[1] - numbers[0];
      break;
    case 'mul':
      result = numbers[0] * numbers[1];
      break;
    case 'div':
      result = numbers[0] / numbers[1];
      break;
    case 'pow':
      result = Math.pow(numbers[1], numbers[0]);
      break;
    case 'sum':
      for(var i = 0, len=numbers.length; i<len; i++){
        result += numbers[i];
      }
    case 'clear':
        result = 0;
      }
  }
      $('#answer').text(result);
      $('#queue').empty();
      addVis();

}

function pushToQueue(){
  var display = $('#answer').text();
  $('#answer').text('0');
  var $li = $('<li>');
  $li.text(display);
  $('#queue').prepend($li);
  var $lis = $('#queue li');
  var numbers = parseTags($lis);
  if(numbers.length>2)
    hideVis();
}

function displayNumber(){
  var display = $('#answer').text();
  var current = this.textContent;
  var output;
  

  if(current === '.' && containsChar(display, '.')) return;
  if(current === '.' && display === '0')output = '0.';
  
  if(display === '0' && current !== '.')
    output = current;
  else
    output = display + current;
  
    $('#answer').text(output);


}

function changeSign(){
  var number = $('#answer').text();
  number *= -1;
  $('#answer').text(number);
}

function hideVis(){
  $('.symbols').removeClass('hide');
  $('#sum').removeClass('hide');
  $('#clear').removeClass('hide');
  $('#sum').addClass('emph');
}

function addVis(){
  $('.symbols').removeClass('hide');
  $('#sum').removeClass('emph');
}
