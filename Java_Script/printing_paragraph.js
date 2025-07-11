

let paras = document.querySelectorAll('p');

function alertPara(event) {
    alert("You Clicked on Para:" + event.target.textContent );
    
}


for (let i = 0; i<paras.length; i++){
    let para = paras[i];
    console.log("addEventListener");
    para.addEventListener('click',alertPara )
    }

