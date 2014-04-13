$(document).ready(function() {

  questionCounter = 1

  add = "add-choice-1"
  remove = "remove-choice-1"
  box = "choice-box-1"
  answerCounter = 2

  $('.'+add).on('click', function(event) {
    event.preventDefault();
    $('.'+box).append("<input type='text' name='questions[question"+box.charAt(box.length-1)+"[answers[chosen_answer"+answerCounter+"]]]' placeholder='answer'><br>")
    answerCounter++;
  });

  $('.'+ remove).on('click', function(event) {
    event.preventDefault();
    // console.log("this is ('.'+ remove)")
    // console.log($('.'+ remove))
    choices = $('.'+ box +' input');
    choices_size = choices.length;

    choices[choices_size - 1].remove();

    var brToRemove = $('.'+ box + ' br:last-child')
    $(brToRemove).remove();
  });


  $('.add-question').on('click', function(event) {
    questionCounter++
    add = add.replace(add.charAt(add.length-1), questionCounter)
    remove = remove.replace(remove.charAt(remove.length-1), questionCounter)
    box = box.replace(box.charAt(box.length-1), questionCounter)
    answerCounter = 2

    // var newQuestion = "<br><div class='question-choice'><br><br><input type='text' name='question' placeholder='question, question!'><br><br><br><div class='choice'><div class=" + box + "><input type='text' name='chosen_answer' placeholder='answer'><br></div><br><button class="+add+">Add a choice</button><button class="+remove+">Remove a choice</button></div><br></div>"
    var newQuestion = "<div class='question-choice'><br><br><input type='text' name='questions[question"+box.charAt(box.length-1)+"[question]]' placeholder='question, question!'><br><br><br><div class='choice'><div class="+box+"><input type='text' name='questions[question"+box.charAt(box.length-1)+"[answers[chosen_answer1]]]' placeholder='answer'><br></div><br></div><br></div>"

    event.preventDefault();
    $('.big-box').append(newQuestion);
  });

  $('.remove-question').on('click', function(event) {

    event.preventDefault();
    $('.big-box .question-choice:last-child').remove();
  });

});
