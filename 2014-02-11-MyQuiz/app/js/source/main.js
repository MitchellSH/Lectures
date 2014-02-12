(function(){

  'use strict';

  $(document).ready(initialize);

  var questions = [
    ['How many Doctors are there?', '12'],
    ['How many years has Doctor Who been around?', '50'],
    ['Which Doctor(number) wears a bow tie?', '11'],
    ['Which Doctor(number) said "Allons-y"?', '10']
  ];



  var random = _.shuffle(questions);


  function initialize(){
    $('#quiz').click(askQuestion);
    $('button.tiny.radius').click(answerQuestion);
  }

  function askQuestion(){
    for(var i = 0; i < random.length; i++){
      $('#q' + i).text(random[i][0]);
    }

  }

  function answerQuestion(){
    var qnum = $(this).data('qnum');
    if($('.answer'+qnum).val()===random[qnum][1]){
      alert('right');
    }else{
      alert('wrong');
    }
  }

})();

