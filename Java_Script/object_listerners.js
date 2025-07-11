
function changeText(event) {
    console.log(event);
    let fpara = document.getElementById('p1');
    fpara.textContent = "Hello Kashif";
}

let fpara = document.getElementById('p1');

fpara.addEventListener('click', changeText);