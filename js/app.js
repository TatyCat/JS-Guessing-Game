let min= 1, max = 10, winningNum = randomWinningNumber(min, max), guessesLeft = 3;

console.log(winningNum);
const game = document.querySelector('#game'), 
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        playAgain = document.querySelector('.playAgain'),
        message = document.querySelector('.message');

        minNum.textContent = min;
        maxNum.textContent = max;


guessBtn.addEventListener('click', function(){
    var guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max){
        setGameMessage(`Please enter a number between ${min} and ${max}`, 'red'); 

    }else if(guessBtn.classList.contains("playAgain")){
        window.location.reload();

    }else if(guess === winningNum){
        gameOver(`True that. The number ${winningNum} is correct, you Win!`, 'lightgreen');
    }else{
        if(guessesLeft > 0){
            guessesLeft -=1;
            guessInput.style.borderColor = 'red';
                setGameMessage(`Oh no, ${guess} is not correct. ${guessesLeft} guesses are left.`, 'red');
        }else if(guessesLeft === 0){
            gameOver(`Ha, game over. The correct number was ${winningNum}.`, 'black');
        }
    }
});      

function setGameMessage(msg, color){
    message.style.background = color;
    message.textContent = msg; 
}

function butDidIWin(){
    if(guessesLeft > 0){
        guessesLeft -=1;
        guessInput.style.borderColor = 'red';
            setGameMessage(`Oh no, ${guess} is not correct. ${guessesLeft} guesses are left.`, 'red');
    }else if(guessesLeft === 0){
        gameOver(`Ha, game over. The correct number was ${winningNum}.`, 'black');
    }
}

function gameOver(msg, color){
    guessInput.disabled = true;
    // message.style.color = 'red';
    guessInput.style.borderColor = color;

    setGameMessage(msg, color);

    guessBtn.value = 'Play Again';
    guessBtn.classList.toggle("playAgain", true);
}

function randomWinningNumber(min, max){
    return (Math.floor(Math.random() * (max - min +1) + min));
}
