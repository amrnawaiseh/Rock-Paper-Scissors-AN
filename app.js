document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const chooseContainer = document.querySelector('.choose-section');
    const resultContainer = document.querySelector('.result-section');
    const cards = document.querySelectorAll('.cards-container .cards');
    const resultDiv = document.querySelector('.play-result p');
    const resBtn = document.querySelector(".restart img")
    let playerSelection ;
    let computerSelection;

    cards.forEach(card => {
        card.addEventListener('click', () => {
            playerSelection = card.id;
            computerSelection = computerPlay();
            const roundResult = playRound(playerSelection, computerSelection);

            chooseContainer.classList.add('hidden');
            resultContainer.classList.add('visible');
            resultDiv.textContent = roundResult;

            document.querySelector(`.user-selection .${playerSelection}-selection`).classList.add('visible');
            document.querySelector(`.computer-selection .${computerSelection}-selection`).classList.add('visible');
        });
    });

    function computerPlay() {
        const randomIndex = Math.floor(Math.random() * choices.length);

        return choices[randomIndex];
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return 'YOU TIED!';
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            return 'YOU WIN!';
        } else {
            return 'YOU LOSE!';
        }
    }
     
    resBtn.addEventListener('click', () => {
        chooseContainer.classList.remove('hidden');
        resultContainer.classList.remove('visible');
        document.querySelector(`.user-selection .${playerSelection}-selection`).classList.remove('visible');
        document.querySelector(`.computer-selection .${computerSelection}-selection`).classList.remove('visible');
    });

});
