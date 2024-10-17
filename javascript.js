let humanScore = 0;
let computerScore = 0;

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice(playRound);

function getComputerChoice()
{
    let computerChoice;
    let randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber < 0.33)
    {
        computerChoice = 'rock';
    }
    else if (randomNumber > 0.33 && randomNumber < 0.66)
    {
        computerChoice = 'paper';
    }
    else
    {
        computerChoice = 'scissors'
    }
    return computerChoice;
}

// Get human choice
function getHumanChoice(playRound)
{
    rock.addEventListener('click', () => {
        playRound('rock', computerSelection)
    });
    paper.addEventListener('click', () => {
        playRound('paper', computerSelection);
    });

    scissors.addEventListener('click', () => {
        playRound('scissors', computerSelection);
    });
}


function playRound(humanChoice, computerChoice)
{
    switch(humanChoice)
    {
        case 'rock':
            switch(computerChoice)
            {
                case 'rock':
                    console.log('It\'s a Tie');
                    humanScore += 1;
                    computerScore += 1;
                    break;

                case 'paper':
                    console.log('You lose! Paper beats Rock');
                    computerScore += 1;
                    break;

                case 'scissors':
                    console.log('You win! Rock beats Scissors');
                    humanScore += 1;
                    break;
            }
            break;

        case 'paper':
            switch(computerChoice)
            {
                case 'rock':
                    console.log('You win! Paper beats Rock');
                    humanScore += 1;
                    break;

                case 'paper':
                    console.log('It\'s a Tie!');
                    humanScore += 1;
                    computerScore += 1;
                    break;

                case 'scissors':
                    console.log('You lose! Scissors beats Paper');
                    computerScore += 1;
                    break;
            }
            break;

        case 'scissors':
            switch(computerChoice)
            {
                case 'rock':
                    console.log('You lose! Rock beats Scissors');
                    computerScore += 1;
                    break;

                case 'paper':
                    console.log('You win! Scissors beats Paper');
                    humanScore += 1;
                    break;

                case 'scissors':
                    console.log('It\'s a Tie!');
                    humanScore += 1;
                    computerScore += 1;
                    break;
            }
            break;
    }
}