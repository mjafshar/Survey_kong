$(function(){
  // event.preventDefault();
  var questions = $('.questions');
  $('ul li:first-child').addClass("active");
  $('.active').css('visibility', 'visible');

  $("#next-question").click(function(event) {
    event.preventDefault();
    var visibleQuestion = questions.find('li.active');
    console.log('we are clickin right');

    $('.active').removeAttr('style');

    var $visibleQuestion = $(".active").removeClass("active");
    var divs = $visibleQuestion.parent().children();
    divs.eq((divs.index($visibleQuestion) + 1) % divs.length).addClass("active");

    $('.active').css('visibility', 'visible');
  });

  $("#previous-question").click(function(event) {
    event.preventDefault();
    var visibleQuestion = questions.find('li.active');
    console.log('we are clickin left');

    $('.active').removeAttr('style');

    var $visibleQuestion = $(".active").removeClass("active");
    var divs = $visibleQuestion.parent().children();
    divs.eq((divs.index($visibleQuestion) - 1)).addClass("active");

    $('.active').css('visibility', 'visible');
  });
});
