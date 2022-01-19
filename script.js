//selecting all elements
var startButton = document.querySelector("#startbtn")
var ruleBox = document.querySelector("#rulebox");
var quit = ruleBox.querySelector("#quit");
var restart = ruleBox.querySelector("#restart");
var quizBox = document.querySelector("#quizbox");
var resultBox = document.querySelector("#resultbox");
var options = document.querySelector("#options");
var timeCount = document.querySelector("#timecount");
var home = document.querySelector("#home");

//When you click the start button, homepage will hide

// startButton.onClick = "ruleBox".style.display=;

startButton.addEventListener("click",function () {
        home.classList.add("hide");
    });

// document.onclick = function () {
//     home.style.display = ((home.style.display != "none") ? "none" : "block");
// };

//When you click the start button, rulebox will show
// startButton.addEventListener("click", function() {
//     ruleBox.classList.add("active");
// });


// from the rulebox, you will choose either continue or quit.

// if quit clicked, go back to home page

// if continue clicked, quiz shows
// when continue clicked, timer countdown starts from 60 sec



// timer function
var timeCount = 60;

window.setInterval(function(){
 if (timeCount > 0)
 timeCount--;
      document.getElementById("timer").innerHTML = `${timeCount} seconds left`;
if (timeCount <= 0)
	timeCount = 60;
}, 1000);





// computer will randomly pick quiz

// When answer is correct, correct answer will turn green

// When anser is incorrect, incorrect answer will turn red

// When answer is incorrect, timer will decrement by 10 seconds

// Whether answer is correct/incorrect computer will show next quiz


  


