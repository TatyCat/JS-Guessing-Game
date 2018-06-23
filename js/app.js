let min= 1, max = 10, winningNum = randomWinningNumber(min, max), guessesLeft = 3;

console.log(winningNum);
const game = document.querySelector('#game'), 
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

        minNum.textContent = min;
        maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max){
        setGameMessage(`Please enter a number between ${min} and ${max}`, 'red'); 
    }else if(guess === winningNum){
        gameOver(true, `The number ${winningNum} is correct! You Win!`);
        
    }else{
        guessesLeft -=1;
        if (guessesLeft === 0){
            gameOver(false, `Ha, game over. The correct number was ${winningNum}.`);
        }else{
            message.style.color = 'red';
            guessInput.style.borderColor = 'red';
            setGameMessage(`Oh no, ${guess} is not correct. ${guessesLeft} guesses are left.`, 'red');
        }
    }
});      
        
function setGameMessage(msg, color){
    message.style.color = color;
    message.textContent = msg; 
}

function gameOver(won, msg){
    guessInput.disabled = true;

    let color; 
    won === true ? color = 'green': color = 'red';
    message.style.color = color;
    guessInput.style.borderColor = color;

    setGameMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.className += ' play-again';
}

function randomWinningNumber(min, max){
    return (Math.floor(Math.random() * (max - min +1) + min));
}
