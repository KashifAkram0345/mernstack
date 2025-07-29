
let mydiv = document.createElement('div');
let fragment = document.createDocumentFragment();

function events() {
  for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    mydiv.appendChild(para);
  }

  fragment.appendChild(mydiv);
  document.body.appendChild(fragment);
}

document.getElementById('button').addEventListener("click", events);

