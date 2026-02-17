let body = document.querySelector("body");
let game = document.querySelector(".game");
let resetBtn = document.getElementById("reset");
let msg = document.querySelector(".msg1");
let h5 = document.getElementById("welc");
let nav = document.querySelector(".header");

let turn = "X";
let boxes = document.querySelectorAll(".box");

game.addEventListener("mouseover", () => {
    game.style.backgroundColor = "red";
});

game.addEventListener("mouseout", () => {
    game.style.backgroundColor = "";
});

nav.addEventListener("mouseover", () => {
    h5.innerText = "Welcome to Game 🤍";
});

const winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            box.innerText = turn;
            turn = turn === "X" ? "O" : "X";
            winnerCheck();
        }
    });
});

function showWinner(winner) {
    msg.innerText = `Winner is: ${winner}`;
    boxes.forEach(box => box.disabled = true);
}

function winnerCheck() {
    for (let pattern of winningCondition) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
            }
        }
    }
}

resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    turn = "X";
    msg.innerText = "";
});
