let choices = ["rock","scissors","paper"];
let wins = 0;
let losses = 0;

const buttons = document.querySelectorAll(`button`);

const score = document.querySelector(`.score`);
score.innerText = `The player has ${wins} wins. And computer has ${losses} wins`;

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function getComputerChoice(){
    return choices[getRandomInt(3)];
}

function gameWin(player, computer){
    wins++; 
    return `You Win! ${player} beats ${computer}`;
}

function gameLoss(player, computer){
    losses++;
    return `You loss! ${player} losses to ${computer}`;
}

function tie(player, computer){
    return `Tie! ${player} and ${computer} is the same`;
}

function rules(win,loss,player, computerSelection){
    if(computerSelection === loss){
        return gameLoss(player, computerSelection);
    }else if(computerSelection === win){
        return gameWin(player, computerSelection);
    }else{
        return tie(player,computerSelection);
    }
}

function playRound(playerSelection = "", computerSelection = getComputerChoice()){
    //playerSelection = prompt("Choose: rock, paper or scissors");
    playerSelection = playerSelection.toLowerCase();

    switch(playerSelection){
        case "rock":
            return rules("scissors", "paper", playerSelection, computerSelection);
        case "scissors":
            return rules("paper", "rock", playerSelection, computerSelection);
        case "paper":
            return rules("rock", "scissors", playerSelection, computerSelection)
    }
}

function updateScore(){
    if(wins === 5){
        score.innerText = `Player has won with a score of ${wins}`;
        return
    }
    if(losses === 5){
        score.innerText = `Computer has won with a score of ${losses}`;
        return
    }
    score.innerText = `The player has ${wins} wins. And computer has ${losses} wins`;
}

buttons.forEach((button) => button.addEventListener(`click`, (e) => {
    if(wins < 5 && losses < 5) playRound(button.innerText);
    updateScore()}));