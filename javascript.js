let humanScore = 0;
let computerScore = 0;

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

function playGame()
{
    // Randomly generate the computer choice

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
    function getHumanChoice()
    {
        let humanChoice;
        rock.addEventListener('click', () => humanChoice = 'rock');
        paper.addEventListener('click', () => humanChoice = 'paper');
        scissors.addEventListener('click', () => humanChoice = 'scissors');
        return humanChoice;
    }
        
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    // Call playRound for one round of the game

    rock.addEventListener('click', () => playRound(humanSelection, computerSelection));
    paper.addEventListener('click', () => playRound(humanSelection, computerSelection));
    scissors.addEventListener('click', () => playRound(humanSelection, computerSelection));

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

            // Handle input error
            default:
                console.log('Invalid choice');
                humanScore += 0;
                computerScore += 1;
        }
    }
}
playGame();