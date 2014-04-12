$(document).ready(function() {

  questionCounter = 1

  add = ".add-choice-1"
  remove = ".remove-choice-1"
  box = ".choice-box-1"

  $(add).on('click', function(event) {
    event.preventDefault();
    $(box).append('<input type="text" name="chosen_answer" placeholder="answer"><br>')
  });

  $(remove).on('click', function(event) {
    event.preventDefault();
    choices = $(box +' input');
    choices_size = choices.length;
    choices[choices_size - 1].remove();
    var brToRemove = $(box + ' br:last-child')
    $(brToRemove).remove();
  });


  $('.add-question').on('click', function(event) {
    questionCounter++
    add = add.replace(add.charAt(add.length-1), questionCounter)
    remove = remove.replace(remove.charAt(remove.length-1), questionCounter)
    box = box.replace(box.charAt(box.length-1), questionCounter)

    var newQuestion = "<br><input type='text' name='question' placeholder='question, question!'><br><br><br><div class='choice'><div class=" + box + "><input type='text' name='chosen_answer' placeholder='answer'><br></div><br><button class="+add+">Add a choice</button><button class="+remove+">Remove a choice</button></div>"
    event.preventDefault();
    $('.question-choice').append(newQuestion);
  });

  $('.remove-question').on('click', function(event) {

  })

});
