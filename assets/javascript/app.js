var beginGame;
var windowAlert = setTimeout (function() {
alert("Let the Games Begin!");
}, 1000);


var questions = ["The color orange is named after the fruit" , "You can legally drink alcohol while driving in Mississippi" ,"George Washington had wooden teeth","Google was originally called Backrub"]  
$("#Play").on("click", beginGame);{
    beginGame = setTimeout(function(){
      var i = 0;
      $("#questions").empty();
      $("#questions").append(questions[i]);
      i++
    }, 2000);
  }
