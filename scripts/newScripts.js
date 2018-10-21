var questionOne =
  '<p>Would you rather work on developing the front-end or back-end?</p>' +
  '<label><input type="radio" name="whichEnd" value = "frontend"> Front-end</label>' +
  '<label><input type="radio" name="whichEnd" value="backend">Back-end</label>' +
  '<label><input type="radio" name="whichEnd" value="fullstack">Fullstack or undecided</label>';
var questionTwo =
  '<p>What would you like to build?</p>' +
  '<label><input type="radio" name="whatBuild" value = "apps">Apps</label>' +
  '<label><input type="radio" name="whatBuild" value="games">Games</label>' +
  '<label><input type="radio" name="whatBuild" value="cms">Websites to display content</label>' +
  '<label><input type="radio" name="whatBuild" value="biz">Business software</label>' +
  '<label><input type="radio" name="whatBuild" value="dunno">Not sure yet</label>';
var questionThree =
  '<p>Which of these is your favorite company?</p>' +
  '<label><input type="radio" name="company" value="amazon">Amazon</label>' +
  '<label><input type="radio" name="company" value="netflix">Netflix</label>' +
  '<label><input type="radio" name="company" value="facebook">Facebook</label>' +
  '<label><input type="radio" name="company" value="microsoft">Microsoft</label>' +
  '<label><input type="radio" name="company" value="other">None of the above</label>';
var questionFour =
  '<p>Do you prefer to dive in and learn the easiest way first; or to thoroughly understand the fundamentals before trying things out?</p>' +
  '<label><input type="radio" name="difficulty" value = "easy"> Easy way, I want to be building cool stuff already!</label>' +
  '<label><input type="radio" name="difficulty" value="hard">Deep understanding, so I have a solid foundation first.</label>';
var questionFive =
  '<p>Which trend sounds most exciting to work on?</p>' +
  '<label><input type="radio" name="trend" value="ai">Artificial intelligence and machine learning</label>' +
  '<label><input type="radio" name="trend" value="vr">Virtual or augmented reality</label>' +
  '<label><input type="radio" name="trend" value="nopeTrends">I don\'t care what\'s trendy, classics are tried and true.</label>';

$(document).ready(function() {
  $('.question').html(questionOne);
  $('form').submit(function(event) {
    $('.question').html(questionTwo);
    event.preventDefault();
  });
});
