var questionOne = '<p>Would you rather work on developing the front-end or back-end?</p>'
+ '<label><input id = "end" type="radio" name="whichEnd" value = "frontend"> Front-end</label><label><input type="radio" name="whichEnd" value="backend">Back-end</label>' + '<label>
    <input type="radio" name="whichEnd" value="fullstack">
    Fullstack or undecided
  </label>'

$(document).ready(function() {
  $(".question").html(questionOne);
});
