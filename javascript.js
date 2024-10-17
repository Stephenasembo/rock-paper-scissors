let humanScore = 0;
let computerScore = 0;

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let result = document.querySelector('#result');

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
                    tie();
                    break;

                case 'paper':
                    loss();
                    break;

                case 'scissors':
                    win();
                    break;
            }
            break;

        case 'paper':
            switch(computerChoice)
            {
                case 'rock':
                    win();
                    break;

                case 'paper':
                    tie();
                    break;

                case 'scissors':
                    loss();
                    break;
            }
            break;

        case 'scissors':
            switch(computerChoice)
            {
                case 'rock':
                    loss();
                    break;

                case 'paper':
                    win();
                    break;

                case 'scissors':
                    tie();
                    break;
            }
            break;
    }
}

function tie()
{
    humanScore += 1;
    computerScore += 1;
    let text = "This round was a tie!";
}

function win()
{
    humanScore += 1;
    computerScore += 0;
    let text = "YYay! You won this round!";
}

function loss()
{
    humanScore += 0;
    computerScore += 1;
    let text = "Oh! You lost this round!";
}