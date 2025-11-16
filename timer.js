let timerDisplay = document.getElementById('timer');
let timeLeft = 45;

function startTimer() {
    timeLeft = 45;
    timerDisplay.innerText = "45 segundos restantes...";
    let interval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft + " segundos restantes...";
        if (timeLeft <= 0) {
            timerDisplay.innerText = "Descanso finalizado!";
            clearInterval(interval);
        }
    }, 1000);
}
