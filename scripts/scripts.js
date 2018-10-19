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
      if((checkedBox==="games")||(checkedBox==="biz")){
      $(".radioThree").css('visibility', 'visible');
      }
      else if((checkedBox==="apps")||(checkedBox==="dunno")){
      $(".radioFour").css('visibility', 'visible');
      }
      else {
      $("#php").show();
      }
      event.preventDefault();
      });
      // third question asks about companies
      $("form#thirdQuestion").submit(function(event){
        var checkedBox = ($('input[name=company]:checked', '#thirdQuestion').val());
        if((checkedBox==="amazon")||(checkedBox==="netflix")){
        $("#java").show();
        }
        else if(checkedBox==="facebook"){
        $("#php").show()
        }
        else {
        $(".radioFive").css('visibility', 'visible');
        }
        event.preventDefault();
        });
  });
