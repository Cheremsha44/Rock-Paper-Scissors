let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button")

const choiceHuman = document.getElementById('choiceHuman')
const choiceEnemy = document.getElementById('choiceEnemy')

const scoreVivodHuman = document.getElementById('humanScore')
const scoreVivodEnemy = document.getElementById('enemyScore')

const container = document.querySelector("#container");

const humanWin = document.createElement("h3");
humanWin.textContent = "YOUUU WIIN";
const enemyWin = document.createElement("h3");
enemyWin.textContent = "YOU LOOOSEE"

function getComputerChoice(){
    let result = Math.floor(Math.random() * 3)
    if (result === 1){
        result = "scissors"
    } else if (result === 2){
        result = "paper"
    }else{
        result = "rock"
    }
    return result;
};

function playGame(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++
    }else{
        computerScore++
    }
    scoreVivodHuman.textContent = humanScore
    scoreVivodEnemy.textContent = computerScore
    if(humanScore === 5){
        container.appendChild(humanWin)
    }else if(computerScore === 5){
        container.appendChild(enemyWin)
    }
    if (humanScore === 5 || computerScore === 5) {
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection = button.id;
        choiceHuman.textContent = humanSelection
        
        const computerSelection = getComputerChoice()
        choiceEnemy.textContent = computerSelection

        playGame(humanSelection, computerSelection)
    });
});
