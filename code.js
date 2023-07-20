
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
function game() {
    
    let computer = 0;
    let player = 0;

    for (let i = 0; i < 5; i++) {
        let playerInput = prompt('Pick rock, paper, or scissors').toLowerCase();
        let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result[0])
        if (result[1] === 'Player') player++;
        else if (result[1] === 'Computer') computer++;
    }

    if (computer === player) console.log(`It's a tie! ${computer}-${player}`);
    else if (computer > player) console.log(`Computer wins! ${computer}-${player}`);
    else console.log(`Player wins! ${player}-${computer}`);
}

game();