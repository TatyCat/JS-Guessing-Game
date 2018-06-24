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
// event

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max){
        setGameMessage(`Please enter a number between ${min} and ${max}`, 'red'); 
    }else if(guess === winningNum){
        gameOver(`True that. The number ${winningNum} is correct, you Win!`);
    
    }else{
        guessesLeft -=1;
        if (guessesLeft === 0){
            gameOver(`Ha, game over. The correct number was ${winningNum}.`, 'black');
        }else{
            guessInput.style.borderColor = 'red';
            setGameMessage(`Oh no, ${guess} is not correct. ${guessesLeft} guesses are left.`, 'red');
        }
    }

});      
    
// if(document.getElementsByTagName('input').classList.contains()){
//     guessBtn.addEventListener("click", function(){this.style.backgroundColor = "blue";});
// }
if(document.getElementsByClassName('button').classList.contains("button")){
    guessInput.disabled = true;
}




function setGameMessage(msg, color){
    message.style.background = color;
    message.textContent = msg; 
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

  


// user guesses a number
// if the number is correct, 
// tell the user you, you's right. big letters, bold celebratory color.

// if user is wrong,
// tell them that they are wrong, and subtract remaining guesses. leave red banner


// if user runs out of chances or they guess correctly, game ends. 
// game ender should block the button for submit & input, and refresh if they want to play playAgain. 


// #TODO Fix text size of banner on mobile. maybe a BR tag only on sm screen/mobile.
