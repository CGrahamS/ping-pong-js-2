$(document).ready(function() {
  $('#calculator').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var math = $('input:radio[name=math]:checked').val();
    var simpleCalculator = new Calculator("hot pink");
    var sum;

    if (math === "add") {
      sum = simpleCalculator.add(number1, number2);
    } else if (math === "subtract") {
      sum = simpleCalculator.subtract(number1, number2);
    } else if (math === "multiply") {
      sum = simpleCalculator.multiply(number1, number2);
    } else if (math === "divide") {
      sum = simpleCalculator.divide(number1, number2);
    } else {
      alert("Please choose a method.")
    }

    $('#solution').prepend('<p>' + sum + ' is the answer.</p>');
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append('<li>' + element + '</li>');
    });
  });
});

$(document).ready(function() {
  $('#signup').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').append('<p><em>' + email + '</em> has been added to our list! </p>');
  });
});
