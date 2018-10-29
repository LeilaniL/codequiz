var questionOne =
  '<p>Would you rather work on developing the front-end or back-end?</p>' +
  '<label><input type="radio" name="questionOne" value = "frontend"> Front-end</label>' +
  '<label><input type="radio" name="questionOne" value="backend">Back-end</label>' +
  '<label><input type="radio" name="questionOne" value="fullstack">Fullstack or undecided</label>';
var questionTwo =
  '<p>What would you like to build?</p>' +
  '<label><input type="radio" name="questionTwo" value = "apps">Apps</label>' +
  '<label><input type="radio" name="questionTwo" value="games">Games</label>' +
  '<label><input type="radio" name="questionTwo" value="cms">Websites to display content</label>' +
  '<label><input type="radio" name="questionTwo" value="biz">Business software</label>' +
  '<label><input type="radio" name="questionTwo" value="dunno">Not sure yet</label>';
var questionThree =
  '<p>Which of these is your favorite company?</p>' +
  '<label><input type="radio" name="questionThree" value="amazon">Amazon</label>' +
  '<label><input type="radio" name="questionThree" value="netflix">Netflix</label>' +
  '<label><input type="radio" name="questionThree" value="facebook">Facebook</label>' +
  '<label><input type="radio" name="questionThree" value="microsoft">Microsoft</label>' +
  '<label><input type="radio" name="questionThree" value="other">None of the above</label>';
var questionFour =
  '<p>Do you prefer to dive in and learn the easiest way first; or to thoroughly understand the fundamentals before trying things out?</p>' +
  '<label><input type="radio" name="questionFour" value = "easy"> Easy way, I want to be building cool stuff already!</label>' +
  '<label><input type="radio" name="questionFour" value="hard">Deep understanding, so I have a solid foundation first.</label>';
var questionFive =
  '<p>Which trend sounds most exciting to work on?</p>' +
  '<label><input type="radio" name="questionFive" value="ai">Artificial intelligence and machine learning</label>' +
  '<label><input type="radio" name="questionFive" value="vr">Virtual or augmented reality</label>' +
  '<label><input type="radio" name="questionFive" value="nopeTrends">I don\'t care what\'s trendy, classics are tried and true.</label>';
var answerCSS = '<p id="CSSTrack">You should study CSS. Keep working on JavaScript, too!</p>';
var answerPhp='<p id="php">You might like to learn php!</p>';
var answerJava='<p id="java">Check out Java! It\'s widely used, and helps you understand the inner workings of a program in more detail.</p>';
var answerCSharp='<p id="csharp">C# was developed by Microsoft, but is used in a variety of applications.</p>';
var answerPython='<p id="python"> Python is easy to get started with. You should try it!</p>';
var answer="";
var blanks = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  answer
];
var answerArray = [];
var getAnswer = function(answerArray) {
  if (answerArray[0]==="frontend") {
    return answer = answerCSS;
} else if ((answerArray[3]==="easy") | (answerArray[4]==="ai")){
    return answer = answerPython;
} else if ((answerArray[2]==="microsoft") | (answerArray[4]==="vr")){
    return answer = answerCSharp;
} else if ((answerArray[1]==="cms") | (answerArray[2]==="facebook")){
    return answer = answerPhp;
} else  {
    return answer = answerJava;
}
};
$(document).ready(function() {
  var i = 0;
  $('.question').html(blanks[i]);
  $('form').submit(function(event) {
    event.preventDefault();
      switch(i){
        case 0: 
          var checkedBox = ($('input[name=questionOne]:checked').val());
          answerArray.push(checkedBox);
          break;
        case 1:
          var checkedBox = ($('input[name=questionTwo]:checked').val());
          answerArray.push(checkedBox);
          break;
        case 2:
          var checkedBox = ($('input[name=questionThree]:checked').val());
          answerArray.push(checkedBox);
          break;
        case 3:
          var checkedBox = ($('input[name=questionFour]:checked').val());
          answerArray.push(checkedBox);
          break;
        case 4:
          var checkedBox = ($('input[name=questionFive]:checked').val());
          answerArray.push(checkedBox);
          getAnswer(answerArray);
          break;
        case 5:
          debugger;
          $('.answer').append(answer);
          break;
      }
      i++;
      $('.question').html(blanks[i]); 
    });
  });

