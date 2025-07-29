

// // Code:1
// t1=performance.now()
// for (let i = 1; i <= 100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is para" + i;
//     document.body.appendChild(para);
//     t2 = performance.now();
// }
// console.log("Total time Code:1", +(t2 - t1));

// //Code:2


// t3 = performance.now();
//     let mydiv = document.createElement('div')
// for (let i = 1; i <= 100; i++){
//    let para = document.createElement('p');
//     para.textContent = "This is para" + i;
//     mydiv.appendChild(para);
//     t4 = performance.now();
    
// }
// console.log("Total time Code:2", +(t4 - t3));


// Best Code
 t3 = performance.now();
let fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para" + i;
    t4=performance.now();
    fragment.appendChild(para);

  
}
document.body.append(fragment);
console.log("Total time Code:2", +(t4 - t3));
