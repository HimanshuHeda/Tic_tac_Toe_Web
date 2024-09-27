let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg");

let turnX=true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () =>{
    turnX = true;
    count = 0;
    enableBoxes();
    msg.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("Box was clicked!");
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true; 
        count++;
       let iswinner = checkWinner();

       if(count === 9 && !iswinner){
        gameDraw();
       }
    })
})

const gameDraw = () =>{
    msg.innerText = `Game was a Draw,`;
    msg.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congrats, winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for( let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
    
    if(pos1val !="" && pos2val != "" && pos3val !=""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("winner", pos1val);
            showWinner(pos1val);
           }
        }
    }
};

resetBtn.addEventListener("click", resetGame);