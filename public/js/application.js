$(document).ready(function() {
  var reEmail = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
  var passCap = /[A-Za-z]+/;
  var passNumeric = /\d+/;
  var passLength = /.{8,}/;
  // var rePassword = /(?=.{6,})(?=.*[A-Z]+)(?=.*\d+)/;

  $('.signup').on('click', function(event) {
    var password = $("input[name='user_info[password]']").val();
    var confirm_password = $("input[name='confirm_password']").val();

    if (($("input[name='user_info[name]']").val().length === 0)) {
      event.preventDefault();
      $(".name").html("You must enter your name!");
    }
    if (!reEmail.test($("input[name='user_info[email]']").val())) {
      event.preventDefault();
      $(".email").html("Email must be in a valid format!");
    }

    if (!passLength.test(password)) {
      event.preventDefault();
      $(".password").html("Password must Contain at least 8 characters!");
    }
    else if (!passNumeric.test(password)) {
      event.preventDefault();
      $(".password").html("Password must Contain at least one numeric character!");
    }
    else if (!passCap.test(password)) {
      event.preventDefault();
      $(".password").html("Password must Contain at least one capital letter!");
    }

    if (confirm_password !== password) {
      event.preventDefault();
      $(".confirm_password").html("Passwords do not match!");
    }
  });
  $("input").focus(function() {
    $("span").text('');
  });

  $('.login').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/users/login',
      type: 'POST',
      data: {
        email: $("input[name='email']").val(),
        password: $("input[name='password']").val()
      },
      success: function(response) {
        if (response === 'false') {
          $(".error-message").html('Invalid email or password.');
        }
        else {
          location.href="/users/index";
        }
      }
    });
    $("input").focus(function() {
      $(".error-message").text('');
    });
  });

});
