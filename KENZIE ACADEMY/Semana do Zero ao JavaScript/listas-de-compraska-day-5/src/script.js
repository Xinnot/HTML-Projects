let input = document.getElementById("item-input");
let button = document.getElementById("item-button");
let ul = document.getElementById("itens");
let itens = document.getElementsByClassName("li");
let itensButtons = document.getElementsByClassName("remove");

function criarEelemento() {
  let li = document.createElement("li");
  
  let xButton = document.createElement("button");
  li.appendChild(xButton);
  xButton.innerHTML = "X";
  xButton.className = "remove";
  
  li.appendChild(xButton);
  
  let text = document.createTextNode(input.value);
  
  li.appendChild(text);
  
  ul.appendChild(li);
  
  input.value = "";
  buttonEvents();
}

function deleteItem() {
  this.parentElement.remove();
}

function buttonEvents() {
  for (let i = 0; i < itensButtons.length; i++) {
    itensButtons[i].addEventListener("click", deleteItem)
    
  }
}

button.addEventListener("click", criarEelemento);
buttonEvents();