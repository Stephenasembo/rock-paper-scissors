function main()
{
    let humanScore = 0;
    let computerScore = 0;

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const result = document.querySelector('#result');

    function playGame()
    {
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

        function getHumanChoice()
        {
            rock.addEventListener('click', selectRock);

            paper.addEventListener('click', selectPaper);
                
            scissors.addEventListener('click', selectScissors);
        }

        function selectRock()
        {
            computerSelection = getComputerChoice();
            playRound('rock', computerSelection, tie, win, loss, gameOver);
        }

        function selectPaper()
        {
            computerSelection = getComputerChoice();
            playRound('paper', computerSelection, tie, win, loss, gameOver);
        }

        function selectScissors()
        {
            computerSelection = getComputerChoice();
            playRound('scissors', computerSelection, tie, win, loss, gameOver);
        }

        let computerSelection;
        getHumanChoice();

        function playRound(humanChoice, computerChoice, tie,  win, loss, gameOver)
        {
            if (humanScore >= 5 || computerScore >= 5)
            {
                gameOver(main);
                return;
            }
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
            let scores = `current scores: player: ${humanScore} 
                            computer: ${computerScore}`;

            const para = document.createElement('p');
            const scoresPara = document.createElement('p');
            const lineBreak = document.createElement('br');
            const resultDiv = document.createElement('div');

            para.textContent += text;
            scoresPara.textContent += scores;

            resultDiv.appendChild(para);
            resultDiv.appendChild(lineBreak);
            resultDiv.appendChild(scoresPara);

            result.appendChild(resultDiv);
        }

        function win()
        {
            humanScore += 1;
            computerScore += 0;
            let text = "Yay! You won this round!";
            let scores = `current scores: player: ${humanScore} 
                            computer: ${computerScore}`;

            const para = document.createElement('p');
            const scoresPara = document.createElement('p');
            const lineBreak = document.createElement('br');
            const resultDiv = document.createElement('div');

            para.textContent += text;
            scoresPara.textContent += scores;

            resultDiv.appendChild(para);
            resultDiv.appendChild(lineBreak);
            resultDiv.appendChild(scoresPara);

            result.appendChild(resultDiv);
        }

        function loss()
        {
            humanScore += 0;
            computerScore += 1;
            let text = "Oh! You lost this round!";
            let scores = `current scores: player: ${humanScore} 
                            computer: ${computerScore}`;
            const para = document.createElement('p');
            const scoresPara = document.createElement('p');
            const lineBreak = document.createElement('br');
            const resultDiv = document.createElement('div');

            para.textContent += text;
            scoresPara.textContent += scores;

            resultDiv.appendChild(para);
            resultDiv.appendChild(lineBreak);
            resultDiv.appendChild(scoresPara);

            result.appendChild(resultDiv);
        }

        function removeEventListeners()
        {
            rock.removeEventListener('click', selectRock);
            paper.removeEventListener('click', selectPaper);
            scissors.removeEventListener('click', selectScissors);
        }

        function gameOver(main)
        {
        let text = '';
        if (humanScore > computerScore)
        {
            text = 'HOORAY! You won the game \n' +
                    ' Final game results: '+
                    ' Player: ' + humanScore +
                    ' Computer: ' + computerScore + '\n';
        }
        else if (humanScore < computerScore)
        {
            text = 'Oh, you lost wanna have another try ? \n' +
                    ' Final game results: '+
                    ' Player: ' + humanScore +
                    ' Computer: ' + computerScore + '\n';
        }
        else
        {
            text = "Phew! That was an intense game but it's a tie \n" +
                    ' Final game results: '+
                    ' Player: ' + humanScore +
                    ' Computer: ' + computerScore + '\n';
        }
        result.innerText = text;
        const playButton = document.createElement('button');
        playButton.textContent = 'Play Game Again';
        playButton.addEventListener('click', () => location.reload());
        result.appendChild(playButton);
    }
    }
    playGame();
}


document.addEventListener('DOMContentLoaded', main);