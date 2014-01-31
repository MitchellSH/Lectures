(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#get-weather').click(getWeather);
  }

  function getWeather(){
    var url = 'http://api.wunderground.com/api/601ded51b24fc355/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, recieve);
  }

  function recieve(data){
    console.log(data);
  }
})();
