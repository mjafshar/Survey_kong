// $(document).ready(function() {

//   function Choice(options) {
//     this.questionCounter = options.questionCounter;
//     this.id = options.id;
//   }

//   Choice.prototype.incrementQuestionCounter = function() {
//     this.questionCounter += 1
//   }

//   function Question(choices, id) {
//     this.choices = choices;
//     this.id = id;
//     this.addChoiceButton = $('.'+'add-choice-'+this.id).bind(this);
//   }

//   Question.prototype.addChoice = function() {
//     var lastEle = this.choices.length - 1;
//     var newChoice = new Choice(
//       {questionCounter: this.id,
//        id: this.choices[lastEle].id + 1});
//     this.choices.push(newChoice);
//     var that = this;
//     $('.'+'choice-box-'+this.id).append("<input type='text' name='questions[question"+this.id+"[answers[chosen_answer"+newChoice.id+"]]]' placeholder='answer'><br>");
//   };

//   Question.prototype.removeChoice = function() {
//     var lastEle = this.choices.length - 1;
//     var that = this;
//     this.choices.splice(lastEle);
//     var choices = $('.choice-box-'+this.id+' input');
//     var choice_size = choices.length;
//     console.log(choices[choice_size -1])
//     choices[choice_size - 1].remove();
//     var brToRemove = $('.choice-box-'+this.id+' br:last-child');
//     $(brToRemove).remove();
//   }

//   var myChoice1 = new Choice({
//     questionCounter: 1,
//     id: 1});

//   var myQuestion = new Question([myChoice1],1);

//   $('.add-choice-1').on('click', function(event) {
//     event.preventDefault();
//     myQuestion.addChoice();
//   });

//   $('.remove-choice-1').on('click', function(event) {
//     event.preventDefault();
//     myQuestion.removeChoice();
//   });

// });
