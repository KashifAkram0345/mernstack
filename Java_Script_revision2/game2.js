let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choise");
let userChoicePara = document.querySelector("#user-score1");
let CompChoicePara = document.querySelector("#Computer-score1");


let generateCompChoice = () => {
    let options = ["rock", "paper", "scissors"]; 
    let random = Math.floor(Math.random() * 3);
    return options[random]; 
};

let drawGame = () => {
    console.log("Game Was Draw.");
    msg.innerText = "Game Was Draw!";
    msg.style.backgroundColor= "yellow";
};

let showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        console.log("You Win!");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userChoicePara.innerText = userScore;


    } else {

       compScore++;
       CompChoicePara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You Lost ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
};

let playGame = (userChoice) => {
    console.log("User Choice =", userChoice);

    let compChoice = generateCompChoice(); 
    console.log("Comp Choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true; // FIXED: "scissor" ➜ "scissors"
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice); // FIXED: passed correct variable name
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log("Choice was clicked:", userChoice);
        playGame(userChoice);
    });
});
