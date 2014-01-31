(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-item').click(addItem);
  }

  function addItem(event){
    var item = $('#item').val();
    var quantity = $('#quantity').val();
    var price = $('#price').val();
    var total = quantity * price;
    addItemToTable(item, quantity, price, total);
    updateTotals();
    event.preventDefault();
  }
  function updateTotals(){
    var $quantities = $('table > tbody > tr > td:nth-child(3)');
    var numbers = transformTdsToNumbers($quantities);
    var theSum = sum(numbers);
    $('table > tfoot > tr > td:nth-child(3)').text(numberToCurrency(theSum));
    
    var $totals = $('table > tbody > tr > td:nth-child(3)');
    numbers = transformTdsToNumbers($totals);
    theSum = sum(numbers);
    $('table > tfoot > tr > td:nth-child(4)').text(numberToCurrency(theSum));
  }

  function sum(numbers){
    var total = 0;
    for(var i = 0; i < numbers.length; i++){
      total += numbers[i];
    }

    return total;
  }

  function transformTdsToNumbers($tds){
    return $.map($tds, function(td){
      return td.textContent.slice(1) * 1;
    });

  }

  function addItemToTable(item, quantity, price, total){
    var $tr = $('<tr>');
    var $item = $('<td>');
    $item.text(item);
    var $quantity = $('<td>');
    $quantity.text(quantity);
    var $price = $('<td>');
    $price.text(numberToCurrency(price * 1));
    var $total = $('<td>');
    $total.text(numberToCurrency(total));

    $tr.append($item, $quantity, $price, $total);

    $('table tbody').append($tr);
    
  }
  
  function numberToCurrency(number){
    return '$' + number.toFixed(2);
  }
})();
