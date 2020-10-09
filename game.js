
// Global variables for storing scores
let compScore = 0
let userScore = 0


// Randomly return rock, paper or scissors
function computerPlay() {
    let gameChoices = ['rock', 'paper', 'scissor'];
    let randomChoice = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomChoice];
}


//Add an event listener to all buttons that call
//playRound and other functions when clicked. btn.target.id returns the "id" of 
//the button, which represents player choice.
const btns = document.querySelectorAll("button");
btns.forEach(btn => btn.addEventListener('click', btn => {
    playRound(computerPlay(), btn.target.id);
    keepScore();
    resetScore();
}))


//Display the winning message and reset scores when they reach 5
function resetScore() {
    if (compScore == 5) {
        msg = "Computer wins the game!!"
        showMessage(msg)
        compScore = 0; userScore = 0
        keepScore()
        return;

    } else if (userScore == 5) {
        msg = "You've beaten the computer!!!";
        showMessage(msg)
        compScore = 0; userScore = 0
        keepScore()
        return;
    }
}

//Update Score
function keepScore(){
    document.getElementById("score1").innerHTML = userScore
    document.getElementById("score2").innerHTML = compScore
}


// Display message declaring the correct winner,
// and clear the message after 5 seconds.
function showMessage(post) {
    let form = document.getElementById("message")
    let noMessage = ""
    form.innerHTML = post
    setTimeout(function() {
        form.innerHTML = noMessage
    }, 5000)
}



// Play game
function playRound(computer, player) {

    document.getElementById("comp").innerHTML = computer
    document.getElementById("user").innerHTML = player

    if (computer == player){
        alert("You and the computer chose " + computer + ", replay round");
        return;
    }
    else if (computer == 'rock' && player == 'scissor'){
        compScore++
    }
    else if (computer == 'rock' && player == 'paper'){
        userScore++
    }
    else if (computer == 'scissor' && player == 'rock'){
        userScore++
    
    }
    else if (computer == 'scissor' && player == 'paper'){
        compScore++
     
    }
    else if (computer == 'paper' && player == 'scissor'){

        userScore++   
    }
    else if (computer == 'paper' && player == 'rock'){
        compScore++
    }
    else {
        return;
    } 
}

