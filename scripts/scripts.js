$(document).ready(function() {
  // first question checks frontend or backend
  $("form#quiz").submit(function(event){
    alert($('input[name=whichEnd]:checked', '#quiz').val());
  });
    event.preventDefault();
  });

  // second question check
//   $("form").submit(function(event){
//     if ($('frontend').prop('checked'))
//      {
//       $("#CSSTrack").show();
//     } else {
//       $("#secondQuestion").show();
//   }
//     event.preventDefault();
//   });

// var isChecked = $('#rdSelect').is(':checked');
