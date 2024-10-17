let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');

function playGame()
{
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
                playRound('rock', computerSelection, tie, win, loss, gameOver);
        });

        paper.addEventListener('click', () => {
            playRound('paper', computerSelection, tie, win, loss, gameOver);
        });

        scissors.addEventListener('click', () => {
            playRound('scissors', computerSelection, tie, win, loss, gameOver);
        });
    }


    function playRound(humanChoice, computerChoice, tie,  win, loss, gameOver)
    {
        if (humanScore >= 5 || computerScore >= 5)
        {
            gameOver();
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

    function gameOver()
    {
    let text = '';
    if (humanScore > computerScore)
    {
        text = 'HOORAY! You won the game';
    }
    else if (humanScore < computerScore)
    {
        text = 'Oh, you lost wanna have another try ?';
    }
    else
    {
        text = "Phew! That was an intense game but it's a tie";
    }
    result.textContent = text;
    }
}

playGame();
