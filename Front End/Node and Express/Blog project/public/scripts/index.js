console.log("Hello world!");

document.querySelectorAll("i.fa-pen").forEach((btn) => {
  btn.addEventListener("click", function(event){
    buttonHandler(btn);
  });
});

document.querySelectorAll(".fa-x").forEach((btn) => {
  btn.addEventListener("click", function(event) {
    delPost(btn);
  })
});

function buttonHandler(btn) {
  var btnNameID = btn.parentNode.parentNode.querySelector("h1").getAttribute("id");
  var btnContentID = btn.parentNode.parentNode.querySelector("h2").getAttribute("id");
  var idNumber = btnNameID.replace(/[^0-9]/g, '')

  var btnName = document.querySelector("#" + btnNameID).innerText;
  var btnContent = document.querySelector("#" + btnContentID).innerText;

  document.querySelector("#postName").value = btnName;
  document.querySelector("#postContent").value = btnContent;

  changeForm(idNumber);
};

function clearForm() {

};

function changeForm(idNumber){
 
  var form = document.querySelector("#form");

  form.setAttribute("action", "/submit?_method=PATCH");
  
  var numberInput = document.createElement("input");

  numberInput.setAttribute("type", "hidden");
  numberInput.setAttribute("name", "idNumber");
  numberInput.setAttribute("id", "idNumber");
  numberInput.style.display = "none";

  numberInput.value = idNumber;
  
  form.prepend(numberInput);

}

function delPost(btn) {
  var btnNameID = btn.parentNode.parentNode.querySelector("h1").getAttribute("id");
  var btnContentID = btn.parentNode.parentNode.querySelector("h2").getAttribute("id");
  var idNumber = btnNameID.replace(/[^0-9]/g, '');

  fetch("/submit?idNumber=" + idNumber, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(() => {
    window.location.replace("http://localhost:3000/");
  });

}