



const t1 = performance.now();
for (let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is Paragraph"+i;
    document.body.appendChild(para);
}

const t2 = performance.now();
console.log("Total time :" + (t2 - t1));