//OLD FASHIONED JAVASCRIPT - TO BE REWRITTEN WITH JQUERY

//Makes the clear button delete what you typed
document.querySelector("button#clear-button").addEventListener("click", function(){
    event.preventDefault();

    document.querySelector("#taskName").value = "";
    document.querySelector("#taskText").value = "";
});

//Responsible for creating new tasks
document.querySelector("button#createTask").addEventListener("click", function(event){
    event.preventDefault();

    //Creates a copy of the example card that is hidden by default.
    var cardModel = document.querySelector(".card-example");
    var cardCreated = cardModel.cloneNode(true);

    var typedTitle = document.querySelector("#taskName").value;
    var typedText = document.querySelector("#taskText").value;

    if (typedTitle === "") {
        var typedTitle = "<empty>"
    }
    if (typedText === "") {
        var typedText = "<empty>";
    }

    //Adds the title and text to the new card,
    cardCreated.querySelector(".card-title").innerText = typedTitle;
    cardCreated.querySelector(".card-text p").innerText = typedText;

    //and appends it to the start of the list.
    document.querySelector("#tasks-left").prepend(cardCreated);
    cardCreated.classList.remove("card-example");

    //Calls the function to add new event listener, since there are more buttons.
    addEventListenerToButtons();
});

function addEventListenerToButtons() {
    updateDeleteButtons();
    updateDoneButtons(); 
}

function updateDeleteButtons(){
    //Makes every delete button actually delete the parent card.
    document.querySelectorAll("button.delete-button").forEach(function(button){
        button.addEventListener("click", function(event){
        this.parentNode.parentNode.remove();
    })
});
}

function updateDoneButtons() {
    //Makes every "Mark as done" button clone the card to the finished tasks side.
    document.querySelectorAll(".done-button").forEach(function(button){
        button.addEventListener("click", function(){

            var cardCloned = (((this).parentNode).parentNode);

            //Removes the original card from the tasks left side,
            this.parentNode.parentNode.remove();
            
            //Edits and add the card to the other side.
            this.parentNode.querySelector(".done-button").remove();
            document.querySelector("#tasks-done").prepend(cardCloned);
        });
    });
}

