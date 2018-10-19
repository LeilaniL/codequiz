$(document).ready(function() {
  // first question checks frontend or backend
  $("form#quiz").submit(function(event){
    var checkedBox = ($('input[name=whichEnd]:checked', '#quiz').val());
    if(checkedBox==="frontend"){
      alert("yay");
    }
    else {
      alert("sad");
    }
    event.preventDefault();
    });
  });
