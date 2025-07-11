

function alertPara(event) {
    alert("You Clicked on Para:" + event.target.textContent );
    
}

let mydiv = document.getElementById('div');

  document.addEventListener('click',alertPara )