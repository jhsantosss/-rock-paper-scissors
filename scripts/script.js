function getComputerChoice() {
    const choice = Math.random()
    if (choice < 0.33) {
        return 'Rock'
    } else if (choice < 0.66) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
    
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return 'It\'s a tie.'
    } else if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper')
        ) {
        return 'You lose!!!'
    } else 
        return 'You won!!!'
}

const computerSelection = getComputerChoice()
const playerSelection = prompt('Make your choice: ')

console.log(`${computerSelection} vs ${playerSelection}`)
console.log(playRound(computerSelection, playerSelection))
