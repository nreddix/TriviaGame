var questions = [
"The color orange is named after the fruit" ,
"You can legally drink alcohol while driving in Mississippi" ,
"George Washington had wooden teeth",
"Google was originally called Backrub"
]

var windowAlert = setTimeout (function() {
alert("Let the Games Begin!");
}, 1000);

for (var i = 0; i < questions.length; i++) {
$("#Play").on("click", function() {
  $("#questions").append("<h2>The color orange is named after the fruit</h2>");
}
)}