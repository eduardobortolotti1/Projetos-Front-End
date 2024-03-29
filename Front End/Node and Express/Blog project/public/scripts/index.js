console.log("Hello world!");

document.querySelectorAll("i.fa-pen").forEach((btn) => {
  btn.addEventListener("click", function(){
    buttonHandler(btn);
  });
});

document.querySelectorAll(".fa-x").forEach((btn) => {
  btn.addEventListener("click", function() {
    delPost(btn);
  })
});

function buttonHandler(btn) {
  let btnNameID = btn.parentNode.parentNode.querySelector("h1").getAttribute("id");
  let btnContentID = btn.parentNode.parentNode.querySelector("h2").getAttribute("id");
  let idNumber = btnNameID.replace(/[^0-9]/g, '')

  let btnName = document.querySelector("#" + btnNameID).innerText;
  let btnContent = document.querySelector("#" + btnContentID).innerText;

  document.querySelector("#postName").value = btnName;
  document.querySelector("#postContent").value = btnContent;

  changeForm(idNumber);
}

// function clearForm() {
//
// }

function changeForm(idNumber){
 
  let form = document.querySelector("#form");

  form.setAttribute("action", "/submit?_method=PATCH");
  
  let numberInput = document.createElement("input");

  numberInput.setAttribute("type", "hidden");
  numberInput.setAttribute("name", "idNumber");
  numberInput.setAttribute("id", "idNumber");
  numberInput.style.display = "none";

  numberInput.value = idNumber;
  
  form.prepend(numberInput);

}

function delPost(btn) {
  let btnNameID = btn.parentNode.parentNode.querySelector("h1").getAttribute("id");
  // var btnContentID = btn.parentNode.parentNode.querySelector("h2").getAttribute("id");
  let idNumber = btnNameID.replace(/[^0-9]/g, '');

  fetch("/submit?idNumber=" + idNumber, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(() => {
    window.location.replace("http://localhost:3000/");
  });

}