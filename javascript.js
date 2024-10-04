// Play the game
// The game has 5 rounds
// Declare score variables

let humanScore = 0;
let computerScore = 0;

// Play 5 rounds

for (let i = 0; i < 5; i++)
{
    playGame();
}

function playGame()
{
    // Randomly generate the computer choice

    function getComputerChoice()
    {
        let randomNumber = Math.random();
        if (randomNumber > 0 && randomNumber < 0.33)
        {
            choice = 'rock';
        }
        else if (randomNumber > 0.33 && randomNumber < 0.66)
        {
            choice = 'paper';
        }
        else
        {
            choice = 'scissors'
        }
        return choice;
    }

    // Get human choice
    // Prompt user for input
        // Make it case insensitive
    function getHumanChoice()
    {
        let choice = prompt('What is your choice ?', '');
        let lowerCase = choice.toLowerCase();
        choice = lowerCase;
        return choice;
    }
        
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    // Call playRound for one round of the game
    playRound(humanSelection, computerSelection);

    function playRound(humanChoice, computerChoice)
    {
        // Implement logic of the game
            // Rock beats scissors
            // Paper beats rock
            // Scissors beats paper
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
        }
    }
}
// Decide the winner of the game based on their scores
// Display the winner

if (humanScore > computerScore)
{
    console.log('You win the game');
}

else if (humanScore < computerScore)
{
    console.log('The computer wins the game');
}

else
{
    console.log('It\'s a tie');
}