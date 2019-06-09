// Dice!

var randomNumberOne = Math.floor(Math.random() * 6) + 1;
// is there a sprintf equiv?
var diceImageOneSrc = 'images/dice' + randomNumberOne + '.png';
var diceOneImage = document.querySelector('.img1');
diceOneImage.setAttribute('src', diceImageOneSrc);

var randomNumberTwo = Math.floor(Math.random() * 6) + 1;
var diceImageTwoSrc = 'images/dice' + randomNumberTwo + '.png';
var diceTwoImage = document.querySelector('.img2');
diceTwoImage.setAttribute('src', diceImageTwoSrc);

// Win/Lose/Draw

if (randomNumberOne > randomNumberTwo) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins!';
} else if (randomNumberTwo > randomNumberOne) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins!';
} else {
    document.querySelector('h1').innerHTML = 'Draw!';
}
