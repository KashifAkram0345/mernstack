class Human {
  age = 13;
  height = 5;
  #weight = 84;

  walking() {
    console.log("I am walking", this.#weight);
  }

  running() {
    console.log("I am running");
  }
}

let obj = new Human();
obj.walking();  // Output: I am walking
