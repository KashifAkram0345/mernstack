
// let bt1 = document.querySelector('#bt1');
// bt1.onclick = () => {
//     console.log("You are clicked on bt1");
//     console.log(alert(" I'm bt1"));
    
// }

// let div = document.querySelector('#div');


// div.onmouseover = function (event) {
//   console.log("You hovered on the div!");
//     div.style.color = "black";
//     console.log(event)
//     console.log(event.target);
// };


// div.onmouseout = function (event) {
//   div.style.color = "white";
// };

// let mode1 = document.querySelector('#mode');
// mode1.addEventListener("click",() =>{
//     console.log("You are trying to changing mode");
//     mode1.style.color = "white";
//    mode1.style.backgroundColor = "black";

// })
//   let b2 = document.querySelector('#b2');

//   b2.addEventListener("click", () => {
//     for (let i = 1; i <= 5; i++) {
//       console.log(i);
//     }
//   });

// let b3 = document.querySelector('#b3');
// b3.addEventListener("click", () => {
//     b3.style.backgroundColor = "yellow";
//     console.log("yellow")
// })
// console.log(b3);
// let isHidden = false;
// let b4 = document.querySelector('#b4');

// b4.addEventListener("click", () => {
//     if (isHidden) {
//         b4.style.display = "block";
//         isHidden = false;
//     } else {
//         b4.style.display = "none";
//         isHidden = true;
//     }
// });

// console.log(b4);



// function changeText() {
//     let fheading = document.querySelector('#fheading');
//     fheading.textContent = "Hello Kashif";

// }
// fheading.addEventListener("click", changeText);
    
// let fanchor = document.getElementById('fanchor');

// fanchor.addEventListener("click", function (event) {
//     console.log(event);
//     event.preventDefault();
//     fanchor.textContent = "Click done";
// });


let paras = document.querySelectorAll('p');

for (let i = 0; i < paras.length; i++) {
    let para = paras[i];
    para.addEventListener('click', function () {
        alert("You clicked on paragraph: " + (i + 1));
    });
}
























































