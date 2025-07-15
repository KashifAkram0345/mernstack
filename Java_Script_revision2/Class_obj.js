


class Human{
    #age = 13;// Private()
    wt = 42;// Public
    ht = '5ft 7inc';
    walking() {
        console.log("I'm Walking");
    }

    running() {
        console.log("I'm Running");
    }
}
let obj = new Human();
console.log(obj);