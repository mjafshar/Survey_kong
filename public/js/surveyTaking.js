$(function(){
  // event.preventDefault();
  var questions = $('.questions');
  var survey_id = $('.survey_id').val();
  var complete = false;
  var questionGroups = {};
  var location = "/survey/"+survey_id;

  $('ul.questions li:first-child').addClass("active");
  $('ul.questions li.active').css('visibility', 'visible');

  $("#next-question").click(function(event) {
    var visibleQuestion = questions.find('ul.questions li.active');

    $('ul.questions li.active').removeAttr('style');

    var $visibleQuestion = $("ul.questions li.active").removeClass("active");
    var divs = $visibleQuestion.parent().children();
    divs.eq((divs.index($visibleQuestion) + 1) % divs.length).addClass("active");

    $('ul.questions li.active').css('visibility', 'visible');
  });

  $("#previous-question").click(function(event) {
    var visibleQuestion = questions.find('ul.questions li.active');

    $('ul.questions li.active').removeAttr('style');

    var $visibleQuestion = $("ul.questions li.active").removeClass("active");
    var divs = $visibleQuestion.parent().children();
    divs.eq((divs.index($visibleQuestion) - 1)).addClass("active");

    $('ul.questions li.active').css('visibility', 'visible');
  });

  var createQuestionGroups = function() {
    $(":radio").each(function(){
        questionGroups[this.name] = true;
    });
  };

  var formCompleted = function() {
    for(var group in questionGroups){
      if_checked = !!$(":radio[name="+group+"]:checked").length;
      if (if_checked) {
        complete = true;
      }
      else {
        complete = false;
        alert("Please answer question number "+group);
      }
    }
  };


  $('#submit_button').click(function() {
    createQuestionGroups();
    formCompleted();

    if (complete === false) {
      event.preventDefault();
    }
    else {
      location.href=location;
    }
  });
});
