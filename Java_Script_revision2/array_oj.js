// // Object create
let obj = {
    name: "Kashif",
    age: 16,
    height: 5,
    weight: 45,
    city:"Basirpur",
};
console.log(obj);

// // Creation of an arrays

let arr = [1, 2, 3, 4, 5];
console.log(arr);

// // constructor of arr

let brr = new Array('kashif', true, 1, 2, 3, 4, 5);
brr.push("Umar");
brr.pop();
brr.shift();
brr.unshift("Kashif Akram");
console.log(brr.slice(3, 5));
console.log(brr);
console.log(typeof (arr, brr));


// Map Keyword

let arr1 = [10, 20, 30];
 let ans=arr1.map((number)=>{
    return number * number;

})

console.log(ans);


// filter

let arr2 = [1, 2, 3, 4, 5, 6];

let ans1 = arr2.filter((number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

console.log(ans1);  




let arr3 = [10, 20, 30, 40];
 let ans3=arr3.reduce((acc, crr) => {
    return acc + crr;
})

console.log(ans3);


let arr4 = [3, 8, 9, 6];
arr4.sort();
console.log(arr4);




let arr5 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
arr5.forEach((value, index) => {
    console.log("Number:", value, "index", index);
    
})
























































