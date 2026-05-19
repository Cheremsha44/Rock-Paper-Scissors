function getComputerChoice(){
    let rand = Math.random()
    rand *= 3
    let result = Math.ceil(rand)
    if (result === 1){
        console.log("Computer choice - scissors")
    } else if (result === 2){
        console.log("Computer choice - paper")
    }else{
        console.log("Computer choice - rock")
    }
    return result;
};

function getHumanChoice(){
    let result = prompt()
    result = result.toLowerCase()
    if (result === "scissors"){
        result = 1
    }else if (result === "paper"){
        result = 2
    } else if (result === "rock"){
        result = 3
    }else {
        alert("rock, paper, or scissors.");
        result = 1
    }
    return result;
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log("Draw")
    } else if (humanChoice === 1 && computerChoice === 2){
        console.log("You win!!!")
        humanScore++
    } else if (humanChoice === 2 && computerChoice === 3){
        console.log("You win!!!")
        humanScore++
    } else if (humanChoice === 3 && computerChoice === 1){
        console.log("You win!!!")
        humanScore++
    }else{
        console.log("You lose")
        computerScore++
    }
}

function playGame(){
    for(let i = 1; i < 6; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("humanScore - " + humanScore + "/computerScore - " + computerScore)
    }
    if(humanScore > computerScore){
        console.log("YYOOOOOUUU WIN")
    }else if(humanScore < computerScore){
        console.log("YYOOOOOUUU loooooooseeee")
    }else{
        console.log("Draw")
    }
}
playGame();