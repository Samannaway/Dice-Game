
// tracking the dices, the button and the winner line
let dice1 = document.querySelector(".dice1"); 
let dice2 = document.querySelector(".dice2")
let rollButton = document.querySelector(".roll")
let winner = document.querySelector(".winner")

// making the button work to roll the dice
rollButton.addEventListener("click", ()=>{
    
    //playing dice sound
    let diceSound = new Audio("sound/DICE.wav")
    diceSound.play()

    // generating random numbers
    let randomNum1 = Math.trunc(Math.random()*6)+1;
    let randomNum2 = Math.trunc(Math.random()*6)+1;

    // putting random number in dice to make it roll
    dice1.src="images/dice"+randomNum1+".png"
    dice2.src="images/dice"+randomNum2+".png"

    // checking who wins?
    if (randomNum1==randomNum2) {
        winner.innerHTML = "The game draws"
    }else if (randomNum1>randomNum2) {
        winner.innerHTML = "Player 1 wins"
    }else{
        winner.innerHTML = "Player 2 wins"
    }
});