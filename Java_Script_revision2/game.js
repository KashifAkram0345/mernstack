let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset-bnt');
let new_btn = document.querySelector('#new-btn');
let msgContiner = document.querySelector(".msg-container");
let msg = document.querySelector('#msg');


let turnO = true;

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {  
        console.log("You clicked on box");

        if (turnO) {
            box.innerText = "O"; 
            turnO = false;
        } else {
            box.innerText = "X";  
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});


const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContiner.classList.remove("hide");
    disabledBoxes();
      
};


const checkWinner = () => {
    for (let pattern of winPattern) {
        let Pos1Val = boxes[pattern[0]].innerText;
        let Pos2Val = boxes[pattern[1]].innerText;
        let Pos3Val = boxes[pattern[2]].innerText;
        if (Pos1Val !== "" && Pos2Val != "" && Pos3Val != "") {
            if (Pos1Val == Pos2Val && Pos2Val == Pos3Val) {
                console.log("winner", Pos1Val);
                showWinner(Pos1Val);
            }
        }
    }
}


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContiner.classList.add("hide");
};

reset.addEventListener("click", resetGame);
new_btn.addEventListener("click", resetGame);
