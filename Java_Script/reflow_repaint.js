

let fargment = document.createDocumentFragment();



for (let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is Paragraph :"+i;
    fargment.appendChild(para);
}

document.body.appendChild(fargment);