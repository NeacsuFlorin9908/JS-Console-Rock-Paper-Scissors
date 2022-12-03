alert("We start the game session 'Rock/Paper/Scissors'");
console.log("We start the game session 'Rock/Paper/Scissors'");
function computersPlay() {
    let computerChoice = null;
    const randomInteger = Math.floor(Math.random()*3);
    if (randomInteger == 0){
        computerChoice = "ROCK";
    }
    else if(randomInteger == 1){
        computerChoice = "PAPER";
    }
    else if(randomInteger == 2){
        computerChoice = "SCISSORS";
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let string;
    if((computerSelection == "ROCK")&&(playerSelection == "SCISSORS")){
        string = "You Lose! Rock beats Scissors!";
    }
    else if((computerSelection == "ROCK")&&(playerSelection == "PAPER")){
        string = "You Won! Paper beats Rock!";
    }
    else if((computerSelection == "PAPER")&&(playerSelection == "ROCK")){
        string = "You Lose! Paper beats Rock!";
    }
    else if((computerSelection == "PAPER")&&(playerSelection == "SCISSORS")){
        string = "You Won! Scissors beats Paper!";
    }
    else if((computerSelection == "SCISSORS")&&(playerSelection == "ROCK")){
        string = "You Won! Rock beats Scissors!";
    }
    else if((computerSelection == "SCISSORS")&&(playerSelection == "PAPER")){
        string = "You Lose! Scissors beats Paper!";
    }
    else if((computerSelection == "SCISSORS")&&(playerSelection == "SCISSORS")){
        string = "It's TIE!";
    }
    else if((computerSelection == "PAPER")&&(playerSelection == "PAPER")){
        string = "It's TIE!";
    }
    else if((computerSelection == "ROCK")&&(playerSelection == "ROCK")){
        string = "It's TIE!";
    }
    else{
        console.log("You type the option incorrectly!");
    }
    return string;
}

function game() {
    let computer = 0;
    let player = 0;
    let check;
    while((player != 3) && (computer != 3)){
        let playerChoice = prompt('What is your choice?');
        let playerSelection = playerChoice.toUpperCase().trim();
        if (playerSelection !== 'ROCK' && playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS') {
            console.log("Nice try! Please enter a valid input.");
        }
        let computerSelection = computersPlay();
        check = playRound(playerSelection, computerSelection);
        if ((check == "You Won! Rock beats Scissors!") || (check == "You Won! Paper beats Rock!") || (check == "You Won! Scissors beats Paper!")){
            player = player + 1;
            console.log(check);
            console.log("The new score is: Player: " + player +" & Computer: " + computer);
        }
        else if((check == "You Lose! Rock beats Scissors!") || (check == "You Lose! Scissors beats Paper!") || (check == "You Lose! Paper beats Rock!")){
            computer = computer + 1;
            console.log(check);
            console.log("The new score is: Player: " + player +" & Computer: " + computer);
        }
        else if(check == "It's TIE!"){
            console.log(check);
            console.log("The score is same as last round: Player: " + player +" & Computer: " + computer);
        } 
    }
    if(computer == 3){
            console.log("Computer wins the game!");
        }
        else if(player == 3){
            console.log("You win the game!")
        }
        let reloadOption = prompt('Do you want to start a new game?', 'Yes/No');
        if(reloadOption.toUpperCase() == "YES"){
            window.location.reload()
        }
        else if(reloadOption.toUpperCase() == "NO"){
            console.log("You finish this game session!");
        }
}

game();
