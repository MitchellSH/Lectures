(function(){

  'use strict';

  $(document).ready(initialize);

  var text = 'We the people of the United States, in order to form a more perfect union, establish justice, insure domestic tranquility, provide for the common defense, promote the general welfare, and secure the blessings of liberty to ourselves and our posterity, do ordain and establish this Constitution for the United States of America.';

  function initialize(){
    $(document).foundation();
    $('textarea').val(text);
    $('a.button.round').click(geronimo);
  }

  function geronimo(){
    var words = $('textarea').val();
    words = words.replace(/,/g,'').replace(/\./g,'').split(' ');
    var evens = words.filter(function(val){
      return 0 === val.length%2;
    });
    var odds = words.filter(function(val){
      return 0 !== val.length%2;
    });
    
    var pigWords = [];
    _.map(evens, function(word){
      var pigWord = word.substring(1)+word.substring(0, 1);
      pigWords.push(pigWord+'ay');
    });

    var noVowelWords = [];
    _.map(odds, function(word){
      noVowelWords.push(word.replace(/[aeiou]/gi,''));

    });
    _.pull(noVowelWords, '');
    displayWords(pigWords, noVowelWords);

  }

  function displayWords(pigWords, noVowelWords){
    var timer1 = setInterval(function(){
      if(pigWords.length){
        $('#evenslist').append('<li><span>' + pigWords[0].toLowerCase() + '</span></li>');
        pigWords.shift();
      }else{
        clearInterval(timer1);
      }
    },1000);
  
    var timer2 = setInterval(function(){
      if(noVowelWords.length){
        $('#oddslist').append('<li><span>' + noVowelWords[0].toUpperCase() + '</span></li>');
        noVowelWords.shift();
      }else{
        clearInterval(timer2);
      }
    },1000);
  }
    

})();

