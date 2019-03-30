var delayButtonAlert;
var questions = [
"The color orange is named after the fruit" ,
"You can legally drink alcohol while driving in Mississippi" ,
"George Washington had wooden teeth",
"Google was originally called Backrub"
]


$("#Play").on("click", function() {
    delayButtonAlert = setTimeout(function() {
    }, 2000);
alert("The color orange is named after the fruit.");
console.log(delayButtonAlert)

 function play() {
  for (var i = 0; i < questions.length; i++) {
     $("#question").text(questions[i]);
   }}



})
