(function(){

  'use strict';

  $(document).ready(initialize);

  var questions = [
    ['How many moons does earth have?', '1'],
    ['How many moons does mars have?', '31'],
    ['How many moons does mercury have?', '2'],
    ['How many moons does jupiter have?', '4']
  ];



  function initialize(){
    $('#quiz').click(askQuestion);
    $('button.tiny').click(answerQuestion);
  }

  function askQuestion(){
    for(var i = 0; i < questions.length; i++){
      $('#q'+ i).text(questions[i][0]);
    }
  }

  function answerQuestion(){
    var qnum = $(this).data('qnum');
    if($('.answer'+qnum).val()===questions[qnum][1]){
      alert('right');
    }else{
      alert('wrong');
          
    }
  }

})();

