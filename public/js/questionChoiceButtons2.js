$(document).ready(function() {

  function Choice(options) {
    this.questionCounter = options.questionCounter;
    this.choiceCounter = options.choiceCounter;
  }

  Choice.prototype.incrementQuestionCounter = function() {
    this.questionCounter += 1
  }

  Choice.prototype.incrementChoiceCounter = function() {
    this.choiceCounter += 1
  }

  Choice.prototype.addChoice = function() {
    $('.'+'add-choice-'+this.questionCounter).on('click', function(event) {
      event.preventDefault();
      $('.'+'choice-box-'+this.questionCounter).append("<input type='text' name='questions[question"+this.questionCounter+"[answers[chosen_answer"+answerCounter+"]]]' placeholder='answer'><br>")
    })
  }

  function Question(choices, questionCounter) {
    this.choices = choices;
    this.questionCounter = questionCounter;
  }

  Question.prototype.addChoice = function() {
    var lastEle = this.choices.length - 1
    var newChoice = new Choice(
      {questionCounter: this.questionCounter,
       choiceCounter: this.choices[lastEle].choiceCounter + 1})
    $('.'+'choice-box-'+this.questionCounter).append("<input type='text' name='questions[question"+this.questionCounter+"[answers[chosen_answer"+answerCounter+"]]]' placeholder='answer'><br>")
    })
  }






});
