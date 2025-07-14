
   //  Simple Function
function sayName() {
    console.log("Kashif Akram");
}

sayName();


   //  Simple Function
function getValue(age, height) {
    console.log("My Age is :" + age);
    console.log("My Height is:" + height);
}

getValue(16, 5.6);



 // Arrow Function

const Arrow = (place, city) => {
    console.log("Place Name: " + place);
    console.log("City Name: " + city);
};

Arrow("Faisal Mosque", "Islamabad");

// Return function


function getMultiplication(a, b) {
    return a*b;
}


let ans = getMultiplication(8, 5);

console.log( "Multiplication is :"+ans);