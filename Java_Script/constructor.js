class Human {
  age = 13;
  height = 5;
  weight = 84;


constructor(newAge,newheight){
  this.age=newAge;
  this.height=newheight;
}

  walking() {
    console.log("I am walking");
  }

  running() {
    console.log("I am running");
  }
}

let obj = new Human(58,89);
console.log(obj.height)
obj.walking();  // Output: I am walking
