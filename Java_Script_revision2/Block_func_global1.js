
// global scoped
var x = 10;
console.log(x);

//Blocked scoped
{
    let x = 20;
    console.log(x);
}
// Function scoped


function example() {
    var x = 30;
    console.log(x);
}

example();
