(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.add = function(number1, number2) {
  return number1 + number2;
};

Calculator.prototype.subtract = function(number1, number2) {
  return number1 - number2;
};

Calculator.prototype.multiply = function(number1, number2) {
  return number1 * number2;
};

Calculator.prototype.divide = function(number1, number2) {
  return number1 / number2;
};

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/pingpong.js":1}]},{},[2]);
