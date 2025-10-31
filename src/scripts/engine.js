const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        livesDisplay: document.querySelector(".menu-lives h2"),
        scoreTableBody: document.querySelector("#score-table tbody"),
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 20,
        lives: 3,
    },
    actions: {
        timerId: null,
        countDownTimerId: null,
        //timerId: setInterval(randomSquare, 1000),
        //countDownTimerId: setInterval(countDown, 1000),
    },
};

// Função que controla a contagem do tempo
function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert(
            " ⏰ Tempo esgotado! Sua pontuação final foi: " +
                state.values.result
        );

        saveScore(state.values.result, state.values.currentTime);
    }
}

// Som ao acertar o inimigo
function playSound() {
    let audio = new Audio("./src/sounds/hit.m4a");
    audio.volume = 0.1;
    audio.play();
}

// Escolhe um quadradro aleatório para ser o inimigo
function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

// Atualiza o número de vidas
function updateLivesDisplay() {
    if (state.values.lives < 0) state.values.lives = 0;
    state.view.livesDisplay.textContent = "x" + state.values.lives;
}

// Função que trata o clique em um quadrado
function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound();
            } else {
                state.values.lives--;
                updateLivesDisplay();

                if (state.values.lives <= 0) {
                    clearInterval(state.actions.countDownTimerId);
                    clearInterval(state.actions.timerId);
                    alert("☠ Game Over! Você perdeu todas as vidas!");
                    saveScore(state.values.result, state.values.currentTime);
                }
            }
        });
    });
}

function saveScore(result, timeLeft) {
    let scores = JSON.parse(localStorage.getItem("bestScores")) || [];

    scores.push({ points: result });

    scores.sort((a, b) => b.points - a.points);

    scores = scores.slice(0, 3);

    localStorage.setItem("bestScores", JSON.stringify(scores));

    updateScoreTable();
}

function updateScoreTable() {
    let scores = JSON.parse(localStorage.getItem("bestScores")) || [];
    state.view.scoreTableBody.innerHTML = "";

    scores.forEach((score, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${score.points}</td>
        `;
        state.view.scoreTableBody.appendChild(row);
    });
}

function init() {
    addListenerHitBox();
    updateLivesDisplay();
    updateScoreTable();

    /*state.actions.timerId = setInterval(
        randomSquare,
        state.values.gameVelocity
    );
    state.actions.countDownTimerId = setInterval(countDown, 1000);*/
}

init();

window.addEventListener("beforeunload", () => {
    localStorage.removeItem("bestScores");
});

const startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
    state.values.hitPosition = null;
    state.values.result = 0;
    state.values.lives = 3;

    state.values.currentTime = 20;

    state.view.score.textContent = state.values.result;
    state.view.timeLeft.textContent = state.values.currentTime;
    updateLivesDisplay();
    updateScoreTable();

    // Inicia os timers do jogo
    state.actions.timerId = setInterval(
        randomSquare,
        state.values.gameVelocity
    );
    state.actions.countDownTimerId = setInterval(countDown, 1000);

    // Desativa o botão para não iniciar duas vezes
    startButton.disabled = true;
});
