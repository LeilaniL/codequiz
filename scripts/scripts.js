$(document).ready(function() {
  // first question checks frontend
  $("form#quiz").submit(function(event){
    var checkedBox = ($('input[name=whichEnd]:checked', '#quiz').val());
    if(checkedBox==="frontend"){
      $("#CSSTrack").show();
    }
    else {
      alert("sad");
    }
    event.preventDefault();
    });
  });
