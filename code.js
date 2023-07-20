
// Randomnly return 'rock', 'paper', or 'scissors'
function getComputerChoice(){
    const choose = Math.floor(Math.random()*3);
    // 2 = scissors, 1 = paper, 0 = rock
    const choice = (choose === 2) ? 'scissors' : (choose ? 'paper' : 'rock');
    return choice;
}

console.log(getComputerChoice());
// // Return string on who wins and what choices were made
// function playRound(playerSelection, computerSelection) {

// }

// let playerSelection = ''; // Get user input
// let computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// // 5 rounds, that keeps track of scores. Shows winner at the end
// function game() {
//     for (let i = 0; i < 5; i++) {
//         // Code
//     }
// }