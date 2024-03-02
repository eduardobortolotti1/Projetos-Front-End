var firstPlayerNumber = Math.floor(Math.random() * 6) + 1;
var secondPlayerNumber = Math.floor(Math.random() * 6) + 1;

console.log(firstPlayerNumber);
console.log(secondPlayerNumber);

if (firstPlayerNumber > secondPlayerNumber) {
    document.querySelector("h1").innerText = "Player 1 Wins!"
    document.querySelector(".dice .img1").setAttribute('src', './images/dice' + firstPlayerNumber + '.png')
    document.querySelector(".dice .img2").setAttribute('src', './images/dice' + secondPlayerNumber + '.png')

}
else if (secondPlayerNumber > firstPlayerNumber) {
    document.querySelector("h1").innerText = "Player 2 Wins!"
    document.querySelector(".dice .img1").setAttribute('src', './images/dice' + firstPlayerNumber + '.png')
    document.querySelector(".dice .img2").setAttribute('src', './images/dice' + secondPlayerNumber + '.png')
}
else if (firstPlayerNumber === secondPlayerNumber) {
    document.querySelector("h1").innerText = "It's a Draw!"
    document.querySelector(".dice .img1").setAttribute('src', './images/dice' + firstPlayerNumber + '.png')
    document.querySelector(".dice .img2").setAttribute('src', './images/dice' + secondPlayerNumber + '.png')
}