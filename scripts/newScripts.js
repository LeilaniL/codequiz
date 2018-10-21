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

$(document).ready(function() {
  $('.question').html(questionTwo);
});
