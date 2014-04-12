$(document).ready(function() {
  var reEmail = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
  var passCap = /[A-Za-z]+/
  var passNumeric = /\d+/
  var passLength = /.{8,}/
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
          $(".error-message").html('Invalid email or password.')
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


  $('.add-choice').on('click', function(event) {
    event.preventDefault();
    $(".choice-box").append('<input type="text" name="chosen_answer" placeholder="answer"><br>')
  });

  $('.remove-choice').on('click', function(event) {
    event.preventDefault();
    choices = $(".choice-box input");
    choices_size = choices.length;
    choices[choices_size - 1].remove();
    $('.choice-box br:last-child').remove();
  })

  var newQuestion = '<input type="text" name="title" placeholder="Survey Title">
        <br><br>
        <input type="text" name="question" placeholder="question, question!"><br>
        <br><br>
        <div class="choice">
          <div class="choice-box">
            <input type="text" name="chosen_answer" placeholder="answer"><br>
          </div>
          <br>
            <button class="add-choice">Add a choice</button>
            <button class="remove-choice">Remove a choice</button>
        </div>'

  $('.add-question').on('click', function(event) {
    event.preventDefault();
    $('.question-choice').append(newQuestion);
  });

});
