
// Randomnly return 'rock', 'paper', or 'scissors'
function getComputerChoice(){
    const choose = Math.floor(Math.random()*3);
    // 2 = scissors, 1 = paper, 0 = rock
    const choice = (choose === 2) ? 'Scissors' : (choose ? 'Paper' : 'Rock');
    return choice;
}

// Return string on who wins and what choices were made
function playRound(playerSelection, computerSelection) {
    const result = '';
    let winner = '';

    if (playerSelection === computerSelection) result = 'Draw! Both picked ${playerSelection}';
    else if (playerSelection === 'Rock') winner = (computerSelection === 'Paper') ? 'Computer' : 'Player';
    else if (playerSelection === 'Paper') winner = (computerSelection === 'Scissors') ? 'Computer' : 'Player';
    else if (playerSelection === 'Scissors') winner = (computerSelection === 'Rock') ? 'Computer' : 'Player';

    if (winner === 'Player') {
        result = '${winner} wins! ${computerSelection} wins against ${playerSelection}'
    }
    result = (winner === 'Player') ? '${winner} wins! ${playerSelection} wins against ${computerSelection}' : '${winner} wins! ${computerSelection} wins against ${playerSelection}';
    
    return [result, winner]; 
}   

let playerSelection = ''; // Get user input
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// 5 rounds, that keeps track of scores. Shows winner at the end
function game() {
    for (let i = 0; i < 5; i++) {
        // Code
    }
}