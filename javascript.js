// Play the game
// The game has 5 rounds
// Declare score variables
// In each round
    // Get computer choice randomly
    function getComputerChoice()
    {
        let randomNumber = Math.random()
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
        function getHumanChoice()
        {
            let choice = prompt('What is your choice ?', '');
            let lowerCase = choice.toLowerCase();
            choice = lowerCase;
            return choice;
        }
        console.log(getHumanChoice());
        // Prompt user for input
            // Make it case insensitive
            // Handle input errors
    // Decide the winner
    // Display the winner
    // Increment the winner's score by 1
// Play 4 more rounds
// Decide the winner of the game based on their scores
// Display the winner