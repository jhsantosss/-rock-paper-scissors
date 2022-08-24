let computerSelection = ''
let playerSelection = ''
let computerWins = 0
let playerWins = 0

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
        return `Tie`
    } else if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper')
        ) {
        return `Computer`
    } else 
        return `Player`
}

function score(computerW, playerW) {
    computerWins += computerW
    playerWins += playerW
    return `Computer ${computerWins} vs ${playerWins} Player`
}

function result() {
    if (computerWins === playerWins) {
        return `It's a tie! Live to fight another day...`
    } else if (computerWins > playerWins) {
        return `Game Over! You lost the war!`
    } else {
        return `Congratulations! You won the war!`
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        if (computerWins < 3 && playerWins < 3 ) {
            computerSelection = getComputerChoice()
            playerSelection = prompt('Choose your weapon:')
            if (playRound(computerSelection, playerSelection) === 'Tie') {
                console.log(`${computerSelection} vs ${playerSelection}\n It's a tie.`)
                console.log(score(0,0))
            } else if (playRound(computerSelection, playerSelection) === 'Computer') {
                console.log(`${computerSelection} vs ${playerSelection}\n You lose the battle`)
                console.log(score(1,0))
            } else if (playRound(computerSelection, playerSelection) === 'Player') {
                console.log(`${computerSelection} vs ${playerSelection}\n You won the battle`)
                console.log(score(0,1))
            }
        }
    }
    return result()
}

console.log(game())
