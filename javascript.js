// Play the game
// The game has 5 rounds
// Declare score variables

let humanScore = 0;
let computerScore = 0;

// In each round
    // Get computer choice randomly
for (let i = 0; i < 5; i++)
{
    playGame();
}

// Play 4 more rounds
function playGame()
{
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

    playRound(humanSelection, computerSelection);

    function playRound(humanChoice, computerChoice)
    {
        // Rock beats paper
        switch(humanChoice)
        {
            case 'rock':
                switch(computerChoice)
                {
                    case 'rock':
                        console.log('It\'s a Tie');
                        humanChoice += 1;
                        computerChoice += 1;
                        break;

                    case 'paper':
                        console.log('You lose! Paper beats Rock');
                        computerChoice += 1;
                        break;

                    case 'scissors':
                        console.log('You win! Rock beats Scissors');
                        humanChoice += 1;
                        break;
                }
                break;

            case 'paper':
                switch(computerChoice)
                {
                    case 'rock':
                        console.log('You win! Paper beats Rock');
                        humanChoice += 1;
                        break;

                    case 'paper':
                        console.log('It\'s a Tie!');
                        humanChoice += 1;
                        computerChoice += 1;
                        break;

                    case 'scissors':
                        console.log('You lose! Scissors beats Paper');
                        computerChoice += 1;
                        break;
                }
                break;

            case 'scissors':
                switch(computerChoice)
                {
                    case 'rock':
                        console.log('You lose! Rock beats Scissors');
                        computerChoice += 1;
                        break;

                    case 'paper':
                        console.log('You win! Scissors beats Paper');
                        humanChoice += 1;
                        break;

                    case 'scissors':
                        console.log('It\'s a Tie!');
                        humanChoice += 1;
                        computerChoice += 1;
                        break;
                }
                break;

            // Handle input error
            default:
                console.log('Invalid choice');
            
        }
            // Decide the winner
            // Display the winner
            // Increment the winner's score by 1
            // Rock beats scissors
            // Paper beats rock
            // Scissors beats paper
    }

    // Call the playRound 5 times
}
// Decide the winner of the game based on their scores
// Display the winner