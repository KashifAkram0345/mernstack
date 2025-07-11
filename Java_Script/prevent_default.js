

let anchorElement = document.getElementById('a1');
anchorElement.addEventListener('click', function (event) {
    event.preventDefault();
    anchorElement.textContent = " Please Stopped";
});



