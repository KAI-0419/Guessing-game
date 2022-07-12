let drawButton = document.getElementById("draw")
let userInput = document.getElementById("user-input")
let resetButton = document.getElementById("reset-button")
let resultArea = document.getElementById("type-num")
let chanceArea = document.getElementById("chance-area")
let chances = 5;
let gameOver = false;
let history = []

drawButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){userInput.value=""})

computerNum = 0

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value;
    if(userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100사이 숫자 입력"
    return;
    }
    if(history.includes(userValue)) {
        resultArea.textContent = "이미 입력하신 값 입니다."
        return ;
    }

    chances--; 
    chanceArea.textContent = `남은 기회는 ${chances}번 입니다.`

    if(userValue > computerNum) {
        resultArea.textContent = "DOWN"
    } else if(userValue < computerNum) {
        resultArea.textContent = "UP"
    } else {
        resultArea.textContent = "CORRECT!!!"
        gameOver = true;
    }

    history.push(userValue)

    if(chances < 1) {
        gameOver = true;
    }

    if(gameOver == true) {
        drawButton.disabled = true;
    }

}

function reset() {
    userInput.value = ""
    pickRandomNum()
    resultArea.textContent = "결과값이 나옵니다."
    gameOver = false;
    drawButton.disabled = false;
    chances = 5;
    chanceArea.textContent = `남은 기회는 ${chances}번 입니다.`
    history = [];
}

pickRandomNum();
