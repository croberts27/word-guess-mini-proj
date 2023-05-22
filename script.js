let startButton = document.querySelector("#start-button");

var timerNum = 60;

function startGame () {
    timerInterval = setInterval(() => {
        timerCount = document.querySelector("#timer").innerHTML = "00:00:" + timerNum;
        timerNum--;

        if (timerNum === 0) {
            clearInterval(timerInterval)
        }
    }, 1000);
}

// document.getElementById("start-button").addEventListener("click", startGame);

startButton.addEventListener('click', ()=> {
    startGame()
})