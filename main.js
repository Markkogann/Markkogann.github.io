function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var correct = 0;

 if (question1 == "Cheyenne") {
 	correct++;
}
 if (question2 == "1900") {
 	correct++;
 }

if (question3 == "Steelers") {
	correct++;
}

 if (question4 == "Bread") {
 	correct++;
 }

var messages = ["Incredible", "Nice job", "Pretty good", "Keep trying", "That's terrible"];
var pictures = ["imgs/winquiz.gif", "imgs/2ndbest.gif", "imgs/3rdbest.gif", "imgs/2ndworstscore.gif", "imgs/worstscore.gif"];
var range;

 if (correct == 0) {
 	range = 4;
 } 

 if (correct == 1){
     range = 3;
}
 if (correct == 2) {
 	range = 2;
}
 if (correct == 3) {
 	range = 1    ;
 }
 if (correct == 4) {
    range = 0;
 }
 
 










    document.getElementById("after_submit").style.visibility = "visible";
	

    document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
	document.getElementById("picture").src = pictures[range];
}