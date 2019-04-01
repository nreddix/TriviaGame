var beginGame;
var windowAlert = setTimeout (function() {
alert("Let the Games Begin!");
}, 1000);

var questions = ["The color orange is named after the fruit" , "You can legally drink alcohol while driving in Mississippi" ,"George Washington had wooden teeth","Google was originally called Backrub"]
for (var i = 0; i < questions.length; i++) {
  $("#Play").on("click", beginGame);{
    beginGame = setTimeout(function(){
      $("#questions").append([questions]);
    }, 2000);
  }}
