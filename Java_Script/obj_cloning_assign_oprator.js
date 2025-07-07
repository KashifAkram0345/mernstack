let obj = {
    age: 12,
    wt: 30,
    ht: 74,
};

// Clone obj into a new object using Object.assign()
let man = Object.assign({}, obj);

console.log(man);

console.log(obj);
