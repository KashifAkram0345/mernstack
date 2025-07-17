
let mydiv = document.querySelector('#myDiv');
let newElement = document.createElement('span');
newElement.textContent = "Kashif Akram";

mydiv.insertAdjacentElement("beforebegin", newElement);