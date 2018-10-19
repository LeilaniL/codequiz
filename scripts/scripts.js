$(document).ready(function() {
  // first question checks frontend
  $("form#firstQuestion").submit(function(event){
    var checkedBox = ($('input[name=whichEnd]:checked', '#firstQuestion').val());
    if(checkedBox==="frontend"){
      $("#CSSTrack").show();
    }
    else {
      $("#radioTwo").css('visibility', 'visible');
    }
    event.preventDefault();
    });
    // second question moves to either question three or four
    $("form#secondQuestion").submit(function(event){
      var checkedBox = ($('input[name=whatBuild]:checked', '#secondQuestion').val());
      if(checkedBox==="games"){
        alert("games!");
      }
      else {
        alert("malfunction");
      }
      event.preventDefault();
      });
  });
