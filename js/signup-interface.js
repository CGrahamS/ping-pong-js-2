$(document).ready(function() {
  $('#signup').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').append('<p><em>' + email + '</em> has been added to our list! </p>');
  });
});
