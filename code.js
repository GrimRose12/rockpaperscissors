let computer = 0;
let player = 0;

// Randomnly return 'rock', 'paper', or 'scissors'
function getComputerChoice(){
    const choose = Math.floor(Math.random()*3);
    // 2 = scissors, 1 = paper, 0 = rock
    const choice = (choose === 2) ? 'Scissors' : (choose ? 'Paper' : 'Rock');
    return choice;
}

// Return string on who wins and what choices were made
function playRound(playerSelection, computerSelection) {
    let result = '';
    let winner = '';

    if (playerSelection === computerSelection) {
        result = `Draw! Both picked ${playerSelection.toLowerCase()}`;
        winner = 'None';
        return [result, winner];
    }
    else if (playerSelection === 'Rock') winner = (computerSelection === 'Paper') ? 'Computer' : 'Player';
    else if (playerSelection === 'Paper') winner = (computerSelection === 'Scissors') ? 'Computer' : 'Player';
    else if (playerSelection === 'Scissors') winner = (computerSelection === 'Rock') ? 'Computer' : 'Player';

    result = (winner === 'Player') ? `${winner} wins! ${playerSelection} wins against ${computerSelection.toLowerCase()}` : `${winner} wins! ${computerSelection} wins against ${playerSelection.toLowerCase()}`;

    return [result, winner]; 
}   


// 5 rounds, that keeps track of scores. Shows winner at the end
function game(playerInput) {
    const res = document.querySelector('.result');
    const playerScore = document.querySelector('.score .player');
    const computerScore = document.querySelector('.score .computer');
    const finalRes = document.querySelector('.final-result');
    
    let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    //console.log(result[0])
    res.textContent = result[0];
    if (result[1] === 'Player') player++;
    else if (result[1] === 'Computer') computer++;

    playerScore.textContent = player;
    computerScore.textContent = computer;

    if (player === 5) {
        finalRes.textContent = 'Player is first to reach 5 wins!';
        player = 0;
        computer = 0;
    }
    else if (computer === 5) {
        finalRes.textContent = 'Computer is first to reach 5 wins!'
        player = 0;
        computer = 0;
    }
}

const btn = document.querySelectorAll('.button');

btn.forEach(button => button.addEventListener('click', function () {
    game(button.parentElement.className)}))
