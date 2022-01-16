// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// Home page disappear (look into css 'display: none')
var container = document.getElementById("container");

var startBtn = document.getElementById("startbutton");
startBtn.onclick = startQuiz

function startQuiz() {
    console.log(container);
    // const classes = container.classList
    // console.log(classes)
    container.classList.add("hide");
   

     
    
}

// render the timer to the screen
// hide timer until start button clicked
// Show timer when start button clicked
var myClock = document.getElementById('clock');
var displaySetting = myClock.style.display;

// show screen with first question
// show possible choices/ answers along with question
// choices/ answers will be buttons
// timer needs to start counting down


// WHEN I answer a question
// THEN I am presented with another question

// if correct answer is selected choice/ answer button turns green
// if wrong answer then choice/ answer button turns red
// how long button stays different color

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// how much time is subtracted

// after chocie/ answer selected then that question is replaced with the next question

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over



// WHEN the game is over
// THEN I can save my initials and my score


// show score on screen
// replace question with input field for initials and save button
// after save button is pushed, save initials and score in local storage
// render scores list from local storage
// maybe restart game button??
