let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

let started = false;
let level = 0;
let newScore = 0;
let gameColor = ["red","purple","gray","yellow"];
let gameSeq = [];
let userSeq = [];

document.addEventListener("keypress",()=>{
    console.log("Hello Dear Game");
    if(started == false){
        started = true;
        levelIn();
    }
});

function flashUp(box){
    box.classList.add("flash");
    setTimeout(()=>{
        box.classList.remove("flash");
    },500);
}
function flashBox(box){
    box.classList.add("user");
    setTimeout(()=>{
        box.classList.remove("user");
    },500);
}

function levelIn(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randNum = Math.floor(Math.random()*3);
    let randBox = gameColor[randNum];
    let ele = document.querySelector(`#${randBox}`);
    gameSeq.push(randBox);

    console.log(gameSeq);
    console.log(randNum);
    console.log(ele);
    flashUp(ele);
}

function highScore(){
    if(level > newScore){
        newScore = level;
        h3.innerText = `Your highest Score is ${level}`;
    }

}
function checkUp(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelIn(),1000);
        }
    }else{
        h2.innerHTML = `Game over! Your socre was <b>${level}</b> <br>Pres  any key start again`;
        highScore();
        newGame();
        console.log(gameSeq);
    }
}

function btnClicked(){
    let btn = this;
    flashBox(btn)

    Color = btn.getAttribute("id");

    userSeq.push(Color);
    checkUp(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){
    btn.addEventListener("click",btnClicked);
}


function newGame(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}