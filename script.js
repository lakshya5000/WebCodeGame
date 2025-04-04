let userScore = 0;
let computerScore = 0;

function ComputerChoice() 
{
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function determineWinner(userChoice, computerChoice) 
{
    if (userChoice === computerChoice) 
        {
            return 'It\'s a tie!';
        } 
        else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) 
    {
        userScore++;
        return 'You win!';
    } 
    else 
    {
        computerScore++;
        return 'Computer wins!';
    }
}

function updateScoreAndResult(userChoice, computerChoice) 
{
    const result = determineWinner(userChoice, computerChoice);
    
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
    
    document.getElementById('result').textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}

document.getElementById('rock').addEventListener('click', () => 
    {
        const userChoice = 'rock';
        const computerChoice = ComputerChoice();
        updateScoreAndResult(userChoice, computerChoice);
    }
);

document.getElementById('paper').addEventListener('click', () => 
    {
        const userChoice = 'paper';
        const computerChoice = ComputerChoice();
        updateScoreAndResult(userChoice, computerChoice);
    }
);

document.getElementById('scissors').addEventListener('click', () =>
    {
        const userChoice = 'scissors';
        const computerChoice = ComputerChoice();
        updateScoreAndResult(userChoice, computerChoice);
    }
);
