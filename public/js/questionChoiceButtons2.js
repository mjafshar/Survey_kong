$(document).ready(function() {

  function Choice(options) {
    this.questionCounter = options.questionCounter;
    this.id = options.id;
  }

  Choice.prototype.incrementQuestionCounter = function() {
    this.questionCounter += 1
  }


  function Question(choices, questionCounter) {
    this.choices = choices;
    this.questionCounter = questionCounter;
  }

  Question.prototype.addChoice = function() {
    var lastEle = this.choices.length - 1
    var newChoice = new Choice(
      {questionCounter: this.questionCounter,
       id: this.choices[lastEle].id + 1})
    $('.'+'choice-box-'+this.questionCounter).append("<input type='text' name='questions[question"+this.questionCounter+"[answers[chosen_answer"+newChoice.id+"]]]' placeholder='answer'><br>")
    })
  }





});
