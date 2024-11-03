# Projects related to Dom

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)  


# Solution code

## project 4

```html
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="styleparct.css">
</head>
<body>
    <div class="wraper">
      <h1>Number Guesses Game</h1>
      <p id="guide">Try and guess a random number between 1 to 100</p>
      <p id="guide2">You have 10 attempts to guess right nember</p>

      <br>

      <form class="form">
        <label for="guessField">Guesses Number :</label>
        <input type="text" id="guessField" class="guessField">
        <input type="submit" id="subt" value="Submit Guess" class="guessSubmit">

      </form>

      <div class="resultParas">
        <p class="prev ">Previous Guesses :<span class="guesses"></span></p>
        <p class="rem">Guesses Remaining :<span class="lastResult"></span></p>
        <p class="lowOrHi"></p>
      </div>
    </div>

  <script src="scriptpract.js"></script>
</body>
</html>

```


```Css
    *{
  margin: 0;
  padding: 0;
}

body{
  background-color: rgb(206, 145, 66);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}


#guide {
  font-size: 1.5rem;
  margin-top: 1rem;
}

#guide2{
  font-size: 1.3rem;
  margin-top: 0.3rem;
}

label{
  font-size: 2rem;
  margin: 1rem;
}

.guessField{
  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: 1rem;
  background-color: black;
  color: white;
  
}

#subt{
  display: flex;
  flex-wrap: wrap;
  margin-left: 14.5rem;
  margin-top: 1rem;
  padding: 0.4rem 0.1rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;font-weight: 700;
  background-color: black;
  color: white;
}


.prev{
  font-size: 1.5rem;
  margin-top: 1rem;
}

.rem{
  font-size: 1.5rem;
  margin-top: 0.3rem;
}



.wraper {
  box-sizing: border-box;
  text-align: center;
  width: 35rem;
  height: 35rem;
  background-color: #474747;
  color: #fff;
  font-size: 25px;
  align-items: center;
}



.lowOrHi{
  font-size: 1.3rem;
}

```


```javaScript
    let  randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validdateGuess(guess);
  })
}

function validdateGuess(guess){
  if(isNaN(guess)){
    alert(`Please enter a valid number`)

  }else if(guess < 1){
    alert(`Please enter a number more than 1`)

  }else if(guess > 100){
    alert(`Please enter a number less than 100`)

  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over, Random number was ${randomNum}`)
      endGame();

    }else{
      displayGuess(guess)
      checkGuess(guess);
    }
  }
}


function checkGuess(guess){
  if(guess === randomNum){
    displayMessage(`You guessed it right`)
    endGame()

  }else if(guess < randomNum){
    displayMessage(`Number is Tooo Low`)

  }else if(guess > randomNum){
    displayMessage(`Number is Tooo High`)
  }
}


function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess},   `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`

}


function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame" > Start New Game</h2>`;
  startOver.appendChild(p)
  playGame = false;
  newGame()

}


function newGame(){
  const newGameBtn = document.querySelector('#newGame')
  newGameBtn.addEventListener('click', (e) => {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true;

  })
}



```