'use strict';

// Selecting elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currScore0El = document.getElementById('current--0');
const currScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores, currScore, activePlayer, playing;    

const init =  function () {
    scores = [0,0];
    currScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    currScore0El.textContent = 0;
    currScore1El.textContent = 0;    
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--active');


}

init();
const switchPlayer = function () {
        //!Reset the current score, also put the score in prev player score:
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');    
}


btnRoll.addEventListener('click', function () {
    if(playing)
    {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        const diceImageName = `dice-${dice}.png`;
        diceEl.src = diceImageName;
      
        if (dice !== 1) {
          //!Add to the current score;
          currScore += dice;
          document.getElementById(`current--${activePlayer}`).textContent =
            currScore;
        } else {
          //!Switch player
      
          switchPlayer();
        }
    }
});


btnHold.addEventListener('click', function () {
if(playing)
{
    scores[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= 100)
    {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
    }
    else
    {
        switchPlayer();
    }

}

})


btnNew.addEventListener('click', init);