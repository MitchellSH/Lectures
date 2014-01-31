function add(x, y){
  return x + y;
}

function sum(numbers){
  var total = 0;
  for(var i = 0; i < numbers.length; i++)
    total += numbers[i];
  return total;
}

function countEvens(x){
  var counter = 0;

  

  for(var i = 0; i < x.length; i++)
    if(x[i] % 2 === 0)
      counter++;

  return counter;
  
}

function makeEvenStringsUppercase(strings){
  for(var i = 0; i < strings.length; i++)
    if(strings[i].length % 2 === 0)
      strings[i] = strings[i].toUpperCase();

  return strings;
}

function sumLengthOfStrings(sentence){
  var strings = sentence.split(' ');
  var sum = 0;
  for(var i = 0; i < strings.length; i++) 
    sum += strings[i].length;
  
  return sum;
}

function makeCatWithName(name){
  return {name:name};
}
