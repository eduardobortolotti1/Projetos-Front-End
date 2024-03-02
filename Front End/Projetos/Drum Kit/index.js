//Adds an event listener to every button object, and activates handleClick() function.
document.querySelectorAll("button").forEach(function(btn) {
    btn.addEventListener("click", handleClick);
})

//handleClick() receives the button object, and delivers the button innerHTML content to makeSound() 
function handleClick() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
}

//Checks for keydown events in the browser, and delivers the key pressed to makeSound()
document.addEventListener("keydown", event => {
    makeSound(event.key);
    buttonAnimation(event.key);
});

//Receives a key string, makes the appropriate sound with the elements on screen.
function makeSound(key) {
    //Makes the key string lowercase to conflict with uppercase keys.
    key = key.toLowerCase();
    
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        
        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
            
        default:
            console.log(key + " - Isn't an instrument key!");
            break;
    }
}


// function createButton() {
//     var drumButton = document.createElement("button");
//     var desiredContainer = document.querySelector("div.set");
//     drumButton.className = "drum l";
//     drumButton.textContent = "l";
//     desiredContainer.appendChild(drumButton);
// }

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}