let computerSelection = ''
let playerSelection = ''
let computerWins = 0
let playerWins = 0
const Log = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    // Foreground (text) colors
    fg: {
      black: "\x1b[30m",
      red: "\x1b[31m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      blue: "\x1b[34m",
      magenta: "\x1b[35m",
      cyan: "\x1b[36m",
      white: "\x1b[37m",
      crimson: "\x1b[38m"
    },
    // Background colors
    bg: {
      black: "\x1b[40m",
      red: "\x1b[41m",
      green: "\x1b[42m",
      yellow: "\x1b[43m",
      blue: "\x1b[44m",
      magenta: "\x1b[45m",
      cyan: "\x1b[46m",
      white: "\x1b[47m",
      crimson: "\x1b[48m"
    }
  };
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
        computerSelection = getComputerChoice()
        playerSelection = prompt('Choose your weapon:')
        if (playRound(computerSelection, playerSelection) === 'Tie') {
            console.log(Log.fg.yellow,`${computerSelection} vs ${playerSelection}\n It's a tie.`,Log.reset)
            console.log(Log.fg.cyan,score(0,0),Log.reset)
        } else if (playRound(computerSelection, playerSelection) === 'Computer') {
            console.log(Log.fg.red,`${computerSelection} vs ${playerSelection}\n You lose the battle`,Log.reset)
            console.log(Log.fg.cyan,score(1,0),Log.reset)
        } else if (playRound(computerSelection, playerSelection) === 'Player') {
            console.log(Log.fg.green,`${computerSelection} vs ${playerSelection}\n You won the battle`,Log.reset)
            console.log(Log.fg.cyan,score(0,1),Log.reset)
        }
    }
    return result()
}

console.log(game())
