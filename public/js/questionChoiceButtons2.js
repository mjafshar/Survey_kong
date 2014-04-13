$(document).ready(function() {



  function Choice(options) {
    this.boxCounter = options.boxCounter;
    this.addCounter = options.addCounter;
    this.removeCounter = options.removeCounter;
  }

  Choice.prototype.incrementBoxCounter = function() {
    this.boxCounter += 1
  }

  Choice.prototype.incrementAddCounter = function() {
    this.addCounter += 1
  }

  Choice.prototype.incrementRemoveCounter = function() {
    this.removeCounter += 1
  }

  Choice.prototype.addChoice =

  function Question(choices, questionCounter) {
    this.choices = choices;
    this.questionCounter = questionCounter;
  }

}
